import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Timeline() {
  const Timeline = {
    TotalHours: 5000,
    HoursConsumed: 2472,
    ApprovedHours: 400,
    NotApprovedHours: 300,
    Departments: [
      {
        id: "1",
        dept: "design",
        progress: "40%",
        TotalHours: 2000,
        HoursConsumed: 1200,
      },
      {
        id: "2",
        dept: "Strapi",
        progress: "6%",
        TotalHours: 300,
        HoursConsumed: 212,
        ApprovedHours: 400,
        NotApprovedHours: 100,
      },
      {
        id: "3",
        dept: "Python",
        progress: "24%",
        TotalHours: 1200,
        HoursConsumed: 500,
        NotApprovedHours: 200,
      },
      {
        id: "4",
        dept: "Node",
        progress: "15%",
        TotalHours: 750,
        HoursConsumed: 330,
        exceed: 400,
      },
      {
        id: "5",
        dept: "Testing",
        progress: "15%",
        TotalHours: 750,
        HoursConsumed: 230,
      },
    ],
  };

  const [totalhourswidth, setTotalhourswidth] = useState(null);
  const [widthApproved, setWidthApproved] = useState(null);
  const [widthNotApproved, setWidthNotApproved] = useState(null);
  const totalhoursRef = useRef(null);

  useEffect(() => {
    const totalhours = totalhoursRef.current;
    if (totalhours) {
      const totalhourswidth = totalhours.getBoundingClientRect().width;
      setTotalhourswidth(totalhourswidth);
      setWidthApproved((Timeline.ApprovedHours / Timeline.TotalHours) * totalhourswidth);
      setWidthNotApproved((Timeline.NotApprovedHours / Timeline.TotalHours) * totalhourswidth);
    }
  }, []);

  return (
    <>
      <div className="flex gap-1 items-center  pb-3">
        <div className="totalhours bg-[#152898] text-white text-[11px] font-medium leading-[20px] py-1 pl-[9px] h-[28px] flex-grow rounded" ref={totalhoursRef}>
          {Timeline.HoursConsumed} / {Timeline.TotalHours}
        </div>
        {Timeline.ApprovedHours && (
          <div className="appoved-hr bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px]  rounded" style={{ width: widthApproved }}>
            +{Timeline.ApprovedHours}
          </div>
        )}
        {Timeline.NotApprovedHours && (
          <div className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] rounded" style={{ width: widthNotApproved }}>
            +{Timeline.NotApprovedHours}
          </div>
        )}
      </div>
      {Timeline.Departments.map((data, index) => {
        const deptHour = (totalhourswidth * parseFloat(data.progress)) / 100;
        const deptHrConsumed = deptHour * (data.HoursConsumed / data.TotalHours);
        const overtime = (deptHour * ((data.NotApprovedHours / data.TotalHours) * 100)) / 100;
        const extratime = (deptHour * ((data.ApprovedHours / data.TotalHours) * 100)) / 100;
        const exceedTime = (deptHour * ((data.exceed / data.TotalHours) * 100)) / 100;
        return (
          <div key={index} className="flex gap-1 pb-4">
            <div className="bg-[#F6F6F6] group h-[28px]" style={{ width: deptHour }}>
              <div className="relative bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px]  rounded h-[28px]" style={{ width: deptHrConsumed }}>
                <span className="absolute top-1/2 -translate-y-1/2 left-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                  {data.HoursConsumed} / {data.TotalHours}
                </span>
              </div>
            </div>
            <div className="flex [&>*:first-child]:rounded-s [&>*:last-child]:rounded-e" >
              {data.ApprovedHours && (
                <div className="appoved-hr relative group bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px] h-[28px]" style={{ width: extratime }}>
                  <span className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    +{data.ApprovedHours}
                  </span>
                </div>
              )}
              {data.NotApprovedHours && (
                <div className="not-approved-hrs group relative  bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] h-[28px]" style={{ width: overtime }}>
                  <span className="absolute top-1/2  -translate-y-1/2 left-[100%] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 bg-[#F6F6F6] rounded px-[2px]">
                    +{data.NotApprovedHours}
                  </span>
                </div>
              )}
              {data.exceed && (
                <div className="bg-[#D6D6D6] relative group text-[#515151] text-[11px] font-medium leading-[20px] py-1 pl-[6px] rounded" style={{ width: exceedTime }}>
                  <span className="absolute top-1/2 -translate-y-1/2 left-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    +{data.exceed}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Timeline;

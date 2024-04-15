import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Timeline() {
  const Timeline = {
    TotalHours: "5000",
    HoursConsumed: "3300",
    ApprovedHours: "400",
    NotApprovedHours: "300",
    Departments: [
      {
        id: "1",
        dept: "design",
        progress: "40%",
        TotalHours: "2000",
        HoursConsumed: "1200",
        // ApprovedHours: "0",
        // NotApprovedHours: "0",
      },
      {
        id: "2",
        dept: "Strapi",
        progress: "6%",
        TotalHours: "300",
        HoursConsumed: "212",
        ApprovedHours: "40",
        NotApprovedHours: "10",
      },
      {
        id: "3",
        dept: "Python",
        progress: "24%",
        TotalHours: "1200",
        HoursConsumed: "500",
        // ApprovedHours: "0",
        NotApprovedHours: "20",
      },
      {
        id: "4",
        dept: "Node",
        progress: "15%",
        TotalHours: "750",
        HoursConsumed: "330",
        // ApprovedHours: "0",
        // NotApprovedHours: "0",
        exceed: "40",
      },
      {
        id: "5",
        dept: "Testing",
        progress: "15%",
        TotalHours: "750",
        HoursConsumed: "230",
        // ApprovedHours: "0",
        // NotApprovedHours: "0",
      },
    ],
  };
  // let totalhourswidth;
  // let widthApproved;
  // let widthNotApproved;

  const [totalhourswidth, setTotalhourswidth] = useState(null);
  const [widthApproved, setWidthApproved] = useState(null);
  const [widthNotApproved, setWidthNotApproved] = useState(null);

  const totalhoursRef = useRef(null);

  useEffect(() => {
    // const totalhours = document.querySelector(".totalhours");
    const totalhours = totalhoursRef.current;
    if (totalhours) {
      const totalhourswidth = totalhours.getBoundingClientRect().width;
      setTotalhourswidth(totalhourswidth);
      // console.log(totalhourswidth);

      const widthApproved =
        (Timeline.ApprovedHours / Timeline.TotalHours) * totalhourswidth;
      setWidthApproved(widthApproved);
      // console.log(widthApproved,'approved');

      const widthNotApproved =
        (Timeline.NotApprovedHours / Timeline.TotalHours) * totalhourswidth;
      setWidthNotApproved(widthNotApproved);
      // console.log(widthNotApproved ,"not approved");
    }
  }, []);

  return (
    <>
      <div className="flex gap-1 items-center  pb-3">
        <div
          className="totalhours bg-[#152898] text-white text-[11px] font-medium leading-[20px] py-1 pl-[9px] flex-grow rounded "
          ref={totalhoursRef}
        >
          {Timeline.HoursConsumed} / {Timeline.TotalHours}
        </div>
        {Timeline.ApprovedHours && (
          <div
            className="appoved-hr bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px]  rounded"
            style={{ width: widthApproved }}
          >
            {Timeline.ApprovedHours}
          </div>
        )}
        {Timeline.NotApprovedHours && (
          <div
            className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] rounded "
            style={{ width: widthNotApproved }}
          >
            {Timeline.NotApprovedHours}
          </div>
        )}
      </div>

      {Timeline.Departments.map((data, index) => {
        const deptHour = (totalhourswidth * parseFloat(data.progress)) / 100;
        const deptHrConsumed =
          deptHour * (data.HoursConsumed / data.TotalHours);
        // const deptapprovedHr = deptHour

        return (
          <div key={index} className="flex gap-1 pb-4">
            <div
              className="dept-total bg-[#F6F6F6]"
              style={{ width: deptHour }}
            >
              <div
                className="dept-consumed bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] rounded"
                style={{ width: deptHrConsumed }}
              >
                {data.HoursConsumed} / {data.TotalHours}
              </div>
            </div>
            {data.ApprovedHours && (
              <div
                className="appoved-hr bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px]  rounded"
                style={{ width: widthApproved }}
              >
                +{data.ApprovedHours}
              </div>
            )}
            {data.NotApprovedHours && (
              <div
                className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] rounded "
                style={{ width: widthNotApproved }}
              >
                +{data.NotApprovedHours}
              </div>
            )}
            {data.exceed && (
              <div
                className="bg-[#D6D6D6] text-[#515151] text-[11px] font-medium leading-[20px] py-1 pl-[6px] rounded "
                style={{ width: widthNotApproved }}
              >
                +{data.exceed}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Timeline;

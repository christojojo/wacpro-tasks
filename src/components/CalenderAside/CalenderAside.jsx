
import React, { useState } from "react";

function CalenderAside() {
  const [openSections, setOpenSections] = useState({});

  const toggleList = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific section
    }));
  };

  const LeaveSections = [
    {
      title: "Casual Leave",
      data: [
        { label: "Approved", value: 6 },
        { label: "Pending", value: 0 },
        { label: "Remaining", value: -6 },
      ],
    },
    {
      title: "Sick Leave",
      data: [
        { label: "Approved", value: 2 },
        { label: "Pending", value: 0 },
        { label: "Remaining", value: 10 },
      ],
    },
    {
      title: "Comp-Off",
      data: [
        { label: "Approved", value: 0 },
        { label: "Pending", value: 0 },
        { label: "Remaining", value: 0 },
      ],
    },
    {
      title: "Loss Of Pay",
      data: [
        { label: "Approved", value: 0 },
        { label: "Pending", value: 1 },
        { label: "Remaining", value: 1 },
      ],
    },
    {
      title: "Probation Leave",
      data: [
        { label: "Approved", value: 0 },
        { label: "Pending", value: 0 },
        { label: "Remaining", value: 0 },
      ],
    },
    {
      title: "Parental Leave",
      data: [
        { label: "Approved", value: 0 },
        { label: "Pending", value: 0 },
        { label: "Remaining", value: 0 },
      ],
    },
  ];

  return (
    <div className=" w-full border h-dvh border-l-0">
      <div className="p-3 h-full wrap">
        {LeaveSections.map((section, index) => (
          <div
            key={index}
            className={`mb-3 border border-[#E1E6EA] rounded-md transition-all duration-300 cursor-pointer ${openSections[index] ? 'h-[78px]' : 'h-[49px]' }`}
            onClick={() => toggleList(index)}>
            <div
              className="flex justify-between px-4 py-3  transition duration-300 ease-in-out"              >
              <div className="flex items-center font-medium text-[14px] leading-[16.94px] text-[#2A2A2F]">
                {section.title}
              </div>
              <div>
                <span
                  className={`material-symbols-outlined flex items-center transition-all ${
                    openSections[index] ? "rotate-180" : ""
                  }`}>
                  expand_more
                </span>
              </div>
            </div>
            <ul
              className={`flex gap-5 py-3 px-4 pt-0 transition-all  ${
                openSections[index] ? "opacity-100 " : "opacity-0 pointer-events-none"
              }`}>
              {section.data.map((item, ind) => (
                <li key={ind} className="flex gap-2">
                  <div className="font-medium text-[12px] leading-[16.8px] text-[#344054]">
                    {item.label}
                  </div>
                  <div
                    className="flex justify-center items-center font-bold text-[12px] leading-4 px-2 bg-[#ECECEF] rounded-xl">
                    {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalenderAside;









// import React, { useEffect, useState } from "react";
// import { useRef } from "react";

// function CalenderAside() {
//   const [isListOpen, setIsListOpen] = useState(false);

//   const toggleList = () => {
//     setIsListOpen(!isListOpen);
//   };

//   const LeaveSections = [
//     {
//       title: "Casual Leave",
//       data: [
//         { label: "Approved", value: 6 },
//         { label: "Pending", value: 0 },
//         { label: "Remaining", value: -6 },
//       ],
//     },
//     {
//       title: "Sick Leave",
//       data: [
//         { label: "Approved", value: 2 },
//         { label: "Pending", value: 0 },
//         { label: "Remaining", value: 10 },
//       ],
//     },
//     {
//       title: "Comp-Off",
//       data: [
//         { label: "Approved", value: 0 },
//         { label: "Pending", value: 0 },
//         { label: "Remaining", value: 0 },
//       ],
//     },
//     {
//       title: "Loss Of Pay",
//       data: [
//         { label: "Approved", value: 0 },
//         { label: "Pending", value: 1 },
//         { label: "Remaining", value: 1 },
//       ],
//     },
//     {
//       title: "Probation Leave",
//       data: [
//         { label: "Approved", value: 0 },
//         { label: "Pending", value: 0 },
//         { label: "Remaining", value: 0 },
//       ],
//     },
//     {
//       title: "Parential Leave",
//       data: [
//         { label: "Approved", value: 0 },
//         { label: "Pending", value: 0 },
//         { label: "Remaining", value: 0 },
//       ],
//     },
//   ];
//   useEffect(() => {
//     console.log(leaveRef.current);
//   }, []);

//   const leaveRef = useRef();
//   return (
//     <div className="max-w-[420px] w-full border h-dvh border-l-0">
//       <div className="p-3 h-full wrap" ref={leaveRef}>
//         {LeaveSections.map((section, index) => {
//           return (
//             <div
//               key={index}
//               onClick={toggleList}
//               className=" mb-3 border border-[#E1E6EA] rounded-md"
//             >
//               <div className="flex justify-between px-4 py-3 cursor-pointer transition duration-300 ease-in-out">
//                 <div className="flex items-center font-medium text-[14px] leading-[16.94px] text-[#2A2A2F]">
//                   {section.title}
//                 </div>
//                 <div>
//                   <span
//                     className={`material-symbols-outlined flex items-center transition-all  ${
//                       isListOpen ? "rotate-180 " : ""
//                     }`}
//                   >
//                     expand_more
//                   </span>
//                 </div>
//               </div>
//               <ul
//                 className={`flex gap-5 py-3 px-4 pt-0 transition-all duration-300 ${
//                   isListOpen ? "block" : "hidden"
//                 }`}
//               >
//                 {section.data.map((item, ind) => {
//                   return (
//                     <li key={ind} className="flex gap-2 ">
//                       <div className="font-medium text-[12px] leading-[16.8px] text-[#344054]">
//                         {item.label}
//                       </div>
//                       <div className="flex justify-center items-center font-bold text-[12px] leading-4 px-2 bg-[#ECECEF] rounded-xl">
//                         {item.value}
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CalenderAside;



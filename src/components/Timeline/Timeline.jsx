import React from "react";
import "./style.css";

function Timeline() {
  const Timeline = [
    {
      TotalHours: "5000",HoursConsumed: "3300",ApprovedHours: "40",NotApprovedHours: "30",
      Departments: [
        {
          dept: "design",
          progress: "12%",
          TotalHours: "300",
          HoursConsumed: "120",
          ApprovedHours: "0",
          NotApprovedHours: "0",
        },
        {
          dept: "Strapi",
          progress: "27%",
          TotalHours: "200",
          HoursConsumed: "200",
          ApprovedHours: "40",
          NotApprovedHours: "10",
        },
        {
          dept: "Python",
          progress: "34%",
          TotalHours: "30",
          HoursConsumed: "30",
          ApprovedHours: "0",
          NotApprovedHours: "20",
        },
        {
          dept: "Node",
          progress: "64%",
          TotalHours: "700",
          HoursConsumed: "300",
          ApprovedHours: "0",
          NotApprovedHours: "40",
        },
        {
          dept: "Testing",
          progress: "23%",
          TotalHours: "200",
          HoursConsumed: "200",
          ApprovedHours: "0",
          NotApprovedHours: "0",
        },
      ],
    },
  ];   

return(
  <div>
    {Timeline.map((item,index)=>{
      return(
        <div>
        <div key={index} className="flex gap-1 pb-3">
     <div className="bg-[#152898] text-white text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[891px] rounded ">
       {item.HoursConsumed} / {item.TotalHours}
     </div>
     <div className="bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[63px] rounded">
       {item.ApprovedHours}
     </div>
     <div className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[56px] rounded">
       {item.NotApprovedHours}
     </div>
   </div>
    <div key={index}>{item.Departments.map((data,ind)=>{
          return(
           <div>
               <div className="pb-3">
                <div className="w-[364px] bg-[#E6E6E6] ">
              <div className="bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[244px] rounded ">
                {data.HoursConsumed} / {data.TotalHours}
               </div>
              </div>
           </div>
           </div>
          )
        })}</div>
   </div>
      
      )
  })}
    
  </div>
)
 
}

export default Timeline;


// import React from "react";
// import "./style.css";

// function Timeline() {
//   const Timeline = [
//     {
//       TotalHours: "5000",HoursConsumed: "3300",ApprovedHours: "40",NotApprovedHours: "30",
//       Departments: [
//         {
//           dept: "design",
//           progress: "12%",
//           TotalHours: "300",
//           HoursConsumed: "120",
//           ApprovedHours: "0",
//           NotApprovedHours: "0",
//         },
//         {
//           dept: "Strapi",
//           progress: "27%",
//           TotalHours: "200",
//           HoursConsumed: "200",
//           ApprovedHours: "40",
//           NotApprovedHours: "10",
//         },
//         {
//           dept: "Python",
//           progress: "34%",
//           TotalHours: "30",
//           HoursConsumed: "30",
//           ApprovedHours: "0",
//           NotApprovedHours: "20",
//         },
//         {
//           dept: "Node",
//           progress: "64%",
//           TotalHours: "700",
//           HoursConsumed: "300",
//           ApprovedHours: "0",
//           NotApprovedHours: "40",
//         },
//         {
//           dept: "Testing",
//           progress: "23%",
//           TotalHours: "200",
//           HoursConsumed: "200",
//           ApprovedHours: "0",
//           NotApprovedHours: "0",
//         },
//       ],
//     },
//   ];
   

//   Timeline[0].Departments.forEach((department) => {
//     console.log(`Department: ${department.dept}`);
//     console.log(`  Progress: ${department.progress}`);
//     console.log(`  Total Hours: ${department.TotalHours}`);
//     console.log(`  Hours Consumed: ${department.HoursConsumed}`);
//     console.log(`  Approved Hours: ${department.ApprovedHours}`);
//     console.log(`  Not Approved Hours: ${department.NotApprovedHours}`);
//     console.log("---"); // Separator for each department
//   });

//   return (
    
//     <div className="w-fit">
//       { Timeline.Departments.map((item,index) => {

        

        //   <div>
        //      <div key={index} className="flex gap-1 pb-3">
        //   <div className="bg-[#152898] text-white text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[891px] rounded ">
        //     {item.HoursConsumed} / {item.TotalHours}
        //   </div>
        //   <div className="bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[63px] rounded">
        //     {item.ApprovedHours}
        //   </div>
        //   <div className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[56px] rounded">
        //     {item.NotApprovedHours}
        //   </div>
        // </div>

        // <div className="pb-3">
        //    <div className="w-[364px] bg-[#E6E6E6] ">
        //       <div className="bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[244px] rounded ">
        //         120 / 300
        //        </div>
        //       </div>
        //    </div>


        //   </div> 
          

        
        
        
//       })}
//       <div className="flex gap-1 pb-3">
//         <div className="bg-[#152898] text-white text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[891px] rounded ">
//           3300 / 5000
//         </div>
//         <div className="bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[63px] rounded">
//           +40
//         </div>
//         <div className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[56px] rounded">
//           +30
//         </div>
//       </div>

//       <div className="pb-3">
//         <div className="w-[364px] bg-[#E6E6E6] ">
//           <div className="bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[244px] rounded ">
//             120 / 300
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-1 pb-3">
//         <div className="bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[365px] rounded ">
//           200 / 200
//         </div>
//         <div className="flex ">
//           <div className="bg-[#A5DFAB] text-[#096E13] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[63px] rounded-l">
//             +40
//           </div>
//           <div className="not-approved-hrs bg-[#EA9354] text-[#760000] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[56px] rounded-r">
//             +10
//           </div>
//         </div>
//       </div>

//      <div className="flex gap-1 pb-3">
//      <div className="w-[511px] bg-[#E6E6E6] ">
//           <div className="bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[391px] rounded ">
//             120 / 300
//           </div>
//         </div>
//         <div className="bg-[#D6D6D6] text-[#515151] text-[11px] font-medium leading-[20px] py-1 pl-[6px] w-[95px] rounded">
//             +40
//           </div>
//      </div>

//      <div className="bg-[#B3D4FF] text-[#003376] text-[11px] font-medium leading-[20px] py-1 pl-[9px] w-[351px] rounded ">
//             200hr
//           </div>

//     </div>
//   );
// }

// export default Timeline;

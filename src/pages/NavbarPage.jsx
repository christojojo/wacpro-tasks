
// import React, { useEffect, useState } from "react";

// function NavbarPage() {
//   const navbars = [
//     { title: "Overview" },
//     { title: "Profiles" },
//     { title: "Settings" },
//     { title: "Contacts" },
//     { title: "Proposals" },
//     { title: "Project" },
//     { title: "Billing items" },
//     { title: "Invoices" },
//     { title: "Transactions" },
//     { title: "Emails" },
//     { title: "Notes" },
//     { title: "Log" },
//   ];

//   const [activeItem, setActiveItem] = useState(0);
//   const [afterStyles, setAfterStyles] = useState({});

//   const handleClick = (index, e) => {
//     setActiveItem(index);
//     const { clientWidth, offsetLeft } = e.target;
//     setAfterStyles({
//       width: `${clientWidth}px`,
//       left: `${offsetLeft}px`,
//     });
//   };
//   return (
//     <div className="navbar pt-20">
//       <ul
//         className={`navbar-items flex gap-6 border-b border-grey relative *:text-[14px] *:font-medium *:leading-[20px] *:py-2`}
//       >
//         {navbars.map((data, index) => {
//           return (
//             <li
//               key={index}
//               className={`cursor-pointer elements`}
//               onClick={(e) => handleClick(index, e)}
//             >
//               {data.title}
//             </li>
//           );
//         })}
//         <li
//           className="floater"
//           style={{
//             "--nav-floater-width": afterStyles.width,
//             "--nav-floater-left": afterStyles.left,
//           }}
//         ></li>
//       </ul>
//     </div>
//   );
// }

// export default NavbarPage;


import React, { useState } from "react";

  const navbars = [
    { title: "Overview" },
    { title: "Profiles" },
    { title: "Settings" },
    { title: "Contacts" },
    { title: "Proposals" },
    { title: "Project" },
    { title: "Billing items" },
    { title: "Invoices" },
    { title: "Transactions" },
    { title: "Emails" },
    { title: "Notes" },
    { title: "Log" },
  ];

function NavbarPage(){
    const [ activeItem,setActiveItem]=useState(0)
    const [afterStyles,setAfterStyles]=useState([])

    const handleClick=(index,e)=>{
        setActiveItem(index)
        console.log(e.target.clientWidth,"width",e.target.offsetLeft,"left value");
    const { clientWidth, offsetLeft } = e.target;
        setAfterStyles({
            width:`${clientWidth}px`,
            left:`${offsetLeft}px`
        })
        }

    return(
        <div className="pt-24">
            <ul className="flex gap-6 border-b border-grey relative *:text-[14px] *:font-medium *:leading-[20px] *:py-2 ">
          {navbars.map((item,index)=> {
            return(
                <li key={index}
                    className={`cursor-pointer `}
                    onClick={(e)=>{handleClick(index,e)}}>
                    {item.title}
                </li>
            )
          })}
          <li className="floater" style={{'--nav-floater-width':afterStyles.width,'--nav-floater-left':afterStyles.left}}></li>
          </ul>
        </div>
    )
}
export default NavbarPage

import React, { useEffect, useRef, useState } from "react";
function NavbarPage(){
    const [ activeItem,setActiveItem]=useState(0);
    const [afterStyles,setAfterStyles]=useState({});

    const list = useRef([]);

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

      useEffect(() => {
        const firstItem = list?.current[0]; 
        setAfterStyles({
            width:`${firstItem?.clientWidth}px`,
            left:`${firstItem?.offsetLeft}px`
        })
      }, [])

    const handleClick=(index,e)=>{

        setActiveItem(index);

        const { clientWidth, offsetLeft } = e.target;

        setAfterStyles({
            width:`${clientWidth}px`,
            left:`${offsetLeft}px`
        })
    }

    return(
        <div className="pt-24" >
            <ul className="flex gap-6 border-b border-grey relative *:text-[14px] *:font-medium *:leading-[20px] *:py-2 " >
          {navbars.map((item,index)=> {
            return(
                <li key={index}
                    className={`cursor-pointer `}    
                    onClick={(e)=>{handleClick(index,e)}}
                    ref={rr=>list.current.push(rr)}>
                    {item.title}
                </li>
            )
          })}
          <span className="floater" style={{'--nav-floater-width':afterStyles.width,'--nav-floater-left':afterStyles.left}} ></span>
          </ul>
          
        </div>
    )
}
export default NavbarPage
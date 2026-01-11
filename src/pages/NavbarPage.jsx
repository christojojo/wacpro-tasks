import React, { useEffect, useRef, useState } from "react";

function NavbarPage() {

  const [activeItem, setActiveItem] = useState(0);
  const [activeDes,setActiveDes] = useState(0);
  const [afterStyles, setAfterStyles] = useState({});

  const list = useRef([]);

  // console.log(list, "list");

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

  const descriptions= [ 
    { des: 'description one'},
    { des: 'description Two'},
    { des: 'description three'},
    { des: 'description Four'},
    { des: 'description Five'},
    { des: 'description Six'},
    { des: 'description Seven'},
    { des: 'description Eight'},
    { des: 'description Nine'},
    { des: 'description Ten'},
    { des: 'description Eleven'},
    { des: 'description Twelve lorem ipsum '}    
  ]

  useEffect(() => {
    const firstItem = list?.current[0];
    setAfterStyles({
      width: `${firstItem?.clientWidth}px`,
      left: `${firstItem?.offsetLeft}px`,
    });
  }, []);

  const handleClick = (index, e) => {

    setActiveItem(index);

    const { clientWidth, offsetLeft } = e.target;

    setAfterStyles({
      width: `${clientWidth}px`,
      left: `${offsetLeft}px`,
    });
  };
  return (
    <div className="pt-24">
      <ul className="flex gap-6 border-b border-grey relative *:text-[14px] *:font-medium *:leading-[20px] *:py-2 ">
        {navbars.map((item, index) => {
          return (
            <li
              key={index}
              className={`cursor-pointer `}
              onClick={(e) => {handleClick(index, e);}}
              ref={(el) => list.current.push(el)}
            >
              {item.title}
            </li>
          );
        })}
        <span
          className="floater"
          style={{
            "--nav-floater-width": afterStyles.width,
            "--nav-floater-left": afterStyles.left,
          }}
        ></span>
      </ul>
      <div className="max-w-[400px] py-10">
          
            {descriptions.map((item,index)=>{
              console.log(item.des,index);
                return(
                  <div>
                    <div key={index}
                         className={ activeItem===index ? "block" : "hidden"}
                    >
                    {item.des}
                    </div> 
                  </div>
                )
            })}

          </div>
    </div>
  );
}
export default NavbarPage;


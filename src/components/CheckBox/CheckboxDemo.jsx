import React, { useState } from "react";

function CheckboxDemo({ id, label, labelR, isToggle, size, ...props }) {
  const isSm = size === "sm";
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center">
      {label && <label htmlFor={id} className="text-md pr-4 cursor-pointer">{label}</label>}
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className={`appearance-none border-2 align-middle rounded-[3px] border-[#E2E6E9] cursor-pointer checked:bg-primary checked:border-primary
          ${isToggle ? 
            (isSm ? "w-[34px] h-[18px] rounded-[50px] bg-[#E2E8F0] bg-none relative" : "w-[44px] h-[24px] rounded-[50px] bg-[#E2E8F0] bg-none relative") : (isSm ? "w-4 h-4" : "w-5 h-5")}`}                    
          onClick={handleClick}
        />
        {!isToggle && <span className={`material-symbols-outlined text-white absolute text-lg pointer-events-none ${isSm ? "left-[-1px] top-[3px]" : "top-[3px] left-[1px]"}`}>check</span>}
        {isToggle && (
          <span
            className={`${isSm ? "w-[14px] h-[14px] bg-white rounded-full absolute top-[4px] left-[3px] pointer-events-none transition-all duration-300 ease-in-out" : "w-5 h-5 bg-white rounded-full absolute top-[2px] left-[3px] pointer-events-none transition-all duration-300 ease-in-out"}
             ${checked ? (isSm ? 'translate-x-[14px]' : 'translate-x-[18px]') : "translate-x-[0px]"}`}
          ></span>
        )}
      </div>
      {labelR && <label htmlFor={id} className="text-md pl-4 cursor-pointer">{labelR} </label>}
    </div>
  );
}

export default CheckboxDemo;

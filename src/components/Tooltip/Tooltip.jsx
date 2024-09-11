import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef(null);

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY - tooltipRef.current.offsetHeight - 8,
      left: rect.left + window.scrollX + rect.width / 2 - tooltipRef.current.offsetWidth / 2,
    });
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {children}
      {visible &&
        createPortal(
          <div
            ref={tooltipRef}
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
            className="absolute z-50 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md"
          >
            {text}
            <div className="absolute w-3 h-3 bg-black rotate-45" style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}></div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;

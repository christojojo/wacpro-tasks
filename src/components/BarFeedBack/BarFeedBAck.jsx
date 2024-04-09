import React from "react";

function BarFeedBAck({ icon }) {
  const satisfaction = [
    { id: 1, name: "recharge", color: "#C4314B" },
    { id: 2, name: "maintain", level: "bad", color: "#FFC13C" },
    { id: 3, name: "thrive", color: "#49AB0A" },
  ];

  return (
    <div>
      <ul className="flex gap-1 py-2 overflow-hidden">
        {satisfaction.map((item, index) => {
          return (
            <li
              key={index}
              className={`grow py-1 h-[11px] relative first:rounded-l-[10px] last:rounded-r-[10px]`}
              style={{ background: item.color }}>
              {item.level && (
                <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  {icon}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BarFeedBAck;

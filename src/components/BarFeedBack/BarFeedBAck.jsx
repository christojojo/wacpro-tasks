  import React from "react";
  import Assets from "../../Common/Asset";

  function BarFeedBAck() {
    const customerRating = { id: "1", Name: "christo", Rating: "0" };
    const totalRating = "10";
    const feedbBackValue = customerRating.Rating;
    console.log(feedbBackValue);
    const valuePosition = Math.min(feedbBackValue / totalRating * 100, 85);
    console.log(valuePosition, "percentage");
    const leftPosition = `${valuePosition}%`;

    return (
      <div className="relative w-fit">
        <ul className="flex gap-1 max-w-[178px] w-full *:h-[11px] relative">
          <li className="bg-[red] w-[65px] rounded-l-full"></li>
          <li className="bg-[yellow] w-[48px]"></li>
          <li className="bg-[green] w-[65px] rounded-r-full"></li>
        </ul>
        <div className='absolute top-1/2 -translate-y-1/2 ' style={{ left: leftPosition}}>
          <img src={Assets.emoji} alt="" />
        </div>
      </div>
    );
  }

  export default BarFeedBAck;

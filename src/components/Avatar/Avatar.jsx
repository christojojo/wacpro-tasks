import React from "react";
import Assets from "../../Common/Asset";

function Avatar() {
  // const items = [...Array(10)];
  const items = [
    {
      name: "Messi",
      img: "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*",
    },
    {
      name: "ronaldo",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800"
    },
    {
      name: "neymar",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800"
    },
    {
      name: "Messi",
      img: "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*",
    },
    {
      name: "ronaldo",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800"
    },
    {
      name: "neymar",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800"
    },
    {
      name: "Messi",
      img: "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*",
    },
    {
      name: "ronaldo",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800"
    },
    {
      name: "neymar",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800"
    },
  ]

  return (
    <div>
      <div className="avatar-single pb-10">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>

      <div className="avatar-group flex pb-10">
      <div className="avatar-single z-[10]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="avatar-single -translate-x-3 z-[9]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="avatar-single -translate-x-6 z-[7]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="avatar-single -translate-x-9 z-[6]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      </div>

      <div className="avatar-group flex pb-10">
      <div className="avatar-single z-[10]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="avatar-single -translate-x-3 z-[9]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="avatar-single -translate-x-6 z-[7]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="avatar-single -translate-x-9 z-[6]">
        <img src={Assets.angryEmoji} alt="img" width={30} height={30} />
      </div>
      <div className="remaining">
        <span className="flex items-center justify-center bg-[lightgrey] h-[30px] w-[30px]  -translate-x-11 rounded-full">
          +2
        </span>
      </div>
      </div>

      <div className="remaining pb-10">
        <span className="flex items-center justify-center bg-[lightgrey] h-[50px] w-[50px] rounded-full ">
          +{items.length - 5}
        </span>
      </div>

      <div className=" flex ">
        {items.slice(0,5).map((d, i) => (
          <div
            key={i}
            className={`translate-x-[0px] flex justify-center items-center`}
            data-key={i}
            style={{
              zIndex: (i - items.length) * -1,
              transform: `translateX(${i * -10}px)`,
            }}
          >
            <img src={d.img} alt="img" height={50} width={50} className="rounded-full border-[3px] border-[white]"/>
          </div>
        ))}
        {items ?.length > 5 && (
          <div className="translate-x-[-50px] z-[0] group transition-all ease-in-out duration-500 cursor-pointer">
            <span className="flex justify-center items-center bg-[lightgrey] rounded-full h-[50px] w-[50px]">
              +{items.length - 5}
            </span>
            
            <div div className="tooltip absolute w-[60px] m-1 py-1 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 border">
              {items.slice(5).map((d, i) => (
                <img
                  key={i}
                  src={d.img}
                  alt="img"
                  height={50}
                  width={50}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Avatar;

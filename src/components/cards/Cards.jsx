import React from "react";
import Assets from "../../Common/Asset";
import LineBarGraph from "../LineBarGraph/LineBarGraph";

function Cards() {
  return (
    <div className="wrap pt-20  3xl:px-4 2xl:px-3 mx-auto flex 3xl:gap-4 2xl:gap-3 max-w-[1824px] w-full">
      <div className="card shadow-cardShadow 3xl:max-w-[241px] 2xl:max-w-[200px] w-full rounded-[6px] ">
        <div className="3xl:pt-[25px] 2xl:pt-[20px] 3xl:pr-[12px] 2xl:pr-[10px] 3xl:pl-[24px] 2xl:pl-[20px] 3xl:pb-4 2xl:pb-3">
          <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111] pb-2">
          Consumed hours
          </div>
          <h2 className="3xl:text-[34px] 2xl:text-[24px] 3xl:leading-[41.15px] 2xl:leading-[31.15px] 3xl:pb-2 2xl:pb-1 font-bold  text-[#006CA8]">
          250 hr
          </h2>
          <div className="flex justify-between pb-2 border-b-[#ECECEC] border-b">
            <div>
              <div className="3xl:text-[14px] 2xl:text-[12px] font-medium 3xl:leading-[16.94px] 2xl:leading-[14.94px] text-[#0F8D1B]">
              $14.66/hr
              </div>
              <span className="3xl:text-[12px] 2xl:text-[10px] font-medium leading-[14.52px] text-[#687489]">
                +40%
              </span>
            </div>
            <div>
              <div className="3xl:text-[14px] 2xl:text-[12px] font-medium 3xl:leading-[16.94px] 2xl:leading-[14.94px] text-[#0F8D1B]">
                104 hr Left
              </div>
              <span className="3xl:text-[12px] 2xl:text-[10px] font-medium leading-[14.52px] text-[#687489]">-30%</span>
            </div>
          </div>
        </div>
        <div>
          <div className="3xl:pt-4 3xl:pl-6 3xl:pr-6 3xl:pb-[22px] 2xl:pt-3 2xl:pl-4 2xl:pr-4 2xl:pb-[18px]">
            <figure className="2xl:max-w-[160px] w-full">
              <img src={Assets.img1} alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="card shadow-cardShadow 3xl:max-w-[241px] 2xl:max-w-[200px] w-full rounded-[6px] ">
        <div className="3xl:pt-[25px] 2xl:pt-[20px] 3xl:pr-[12px] 2xl:pr-[10px] 3xl:pl-[24px] 2xl:pl-[20px] 3xl:pb-4 2xl:pb-3">
          <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111] pb-2">
          Consumed hours
          </div>
          <h2 className="3xl:text-[34px] 2xl:text-[24px] 3xl:leading-[41.15px] 2xl:leading-[31.15px] 3xl:pb-2 2xl:pb-1 font-bold  text-[#006CA8]">
          250 hr
          </h2>
          <div className="flex justify-between pb-2 border-b-[#ECECEC] border-b">
            <div>
              <div className="3xl:text-[14px] 2xl:text-[12px] font-medium 3xl:leading-[16.94px] 2xl:leading-[14.94px] text-[#0F8D1B]">
              $14.66/hr
              </div>
              <span className="3xl:text-[12px] 2xl:text-[10px] font-medium leading-[14.52px] text-[#687489]">
                +40%
              </span>
            </div>
            <div>
              <div className="3xl:text-[14px] 2xl:text-[12px] font-medium 3xl:leading-[16.94px] 2xl:leading-[14.94px] text-[#0F8D1B]">
                104 hr Left
              </div>
              <span className="3xl:text-[12px] 2xl:text-[10px] font-medium leading-[14.52px] text-[#687489]"></span>
            </div>
          </div>
        </div>
        <div>
          <div className="3xl:pt-4 3xl:pl-6 3xl:pr-6 3xl:pb-[22px] 2xl:pt-3 2xl:pl-4 2xl:pr-4 2xl:pb-[18px]">
            <figure className="2xl:max-w-[160px] w-full">
              <img src={Assets.img1} alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col 3xl:gap-4 2xl:gap-3">
        <div className="flex 3xl:gap-4 2xl:gap-3">
          <div className="w-full shadow-cardShadow rounded-[6px]">
            <div className="flex justify-between w-full 3xl:px-6 2xl:px-4 pt-[11px]">
                <div className="flex flex-grow 2xl:justify-center 3xl:justify-start 3xl:gap-[22px] 2xl:gap-[12px] 3xl:pb-[18px] 2xl:pb-[12px] relative after:content-[''] after:absolute after:right-0 after:top-[50%] after:-translate-y-1/2 after:border-r after:h-[54px] ">
                    <div className="flex items-center 2xl:max-w-[40px] 3xl:max-w-[60px]">
                    <figure>
                        <img src={Assets.pie} alt="" />
                    </figure>
                    </div>
                    <div className="
                    ">
                       <div className='3xl:text-[14px] 2xl:text-[12px] whitespace-nowrap font-medium leading-[16.94px] text-[#111111] pb-2'>Actual Estimated</div>
                       <h3 className='3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] pb-[2px]'>300 hr</h3>
                       <span className='text-[12px] font-medium leading-[14.52px] text-[#727272]'>$6.66/hr <span className='text-[#A33C02] text-[12px] font-medium leading-[14.52px]'>-36%</span></span>
                    </div>
                    <div className="absolute 3xl:right-[21%] 2xl:right-[8%] 2xl:bottom-[38%] 3xl:bottom-[12%]">
                        <button className="2xl:max-w-[18px] 3xl:max-w-full">
                        <img src={Assets.plusBtn} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-grow  3xl:justify-center 2xl:justify-center 3xl:gap-[22px] 2xl:gap-[12px] 3xl:pb-[18px] 2xl:pb-[12px] relative after:content-[''] after:absolute after:right-0 after:top-[50%] after:-translate-y-1/2 after:border-r after:h-[54px] ">
                    <div className="flex items-center 2xl:max-w-[40px] 3xl:max-w-[60px]">
                    <figure>
                        <img src={Assets.pie} alt="" />
                    </figure>
                    </div>
                    <div className="
                    ">
                       <div className='3xl:text-[14px] 2xl:text-[12px] whitespace-nowrap font-medium leading-[16.94px] text-[#111111] pb-2'>Actual Estimated</div>
                       <h3 className='3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] pb-[2px]'>300 hr</h3>
                       <span className='text-[12px] font-medium leading-[14.52px] text-[#727272]'>$6.66/hr <span className='text-[#A33C02] text-[12px] font-medium leading-[14.52px]'>-36%</span></span>
                    </div>
                    <div className="absolute 3xl:right-[10%] 2xl:right-[8%] 2xl:bottom-[38%] 3xl:bottom-[12%]">
                        <button className="2xl:max-w-[18px] 3xl:max-w-full">
                        <img src={Assets.plusBtn} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-grow 2xl:justify-center 3xl:justify-center 3xl:gap-[22px] 2xl:gap-[12px] 3xl:pb-[18px] 2xl:pb-[12px] relative  ">
                    <div className="flex items-center 2xl:max-w-[40px] 3xl:max-w-[60px]">
                    <figure>
                        <img src={Assets.pie} alt="" />
                    </figure>
                    </div>
                    <div className="">
                       <div className='3xl:text-[14px] 2xl:text-[12px] whitespace-nowrap font-medium leading-[16.94px] text-[#111111] pb-2'>Actual Estimated</div>
                       <h3 className='3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] pb-[2px]'>300 hr</h3>
                       <span className='text-[12px] font-medium leading-[14.52px] text-[#727272]'>$6.66/hr <span className='text-[#A33C02] text-[12px] font-medium leading-[14.52px]'>-36%</span></span>
                    </div>
                    <div className="absolute 3xl:right-[10%] 2xl:right-[8%] 2xl:bottom-[38%] 3xl:bottom-[12%]">
                        <button className="2xl:max-w-[18px] 3xl:max-w-full">
                        <img src={Assets.plusBtn} alt="" />
                        </button>
                    </div>
                </div>
                
                <div></div>
                <div></div>
            </div>
            <div className="px-6 pb-[11px]">
              <div className="flex justify-between border-t pt-[9px] ">
                <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111]">
                  Expected billing rate{" "}
                  <span className="font-semibold">$10.00/hr</span>
                </div>
                <div className="flex 3xl:gap-4 2xl:gap-3">
                  <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px]">
                    Total non-billing hours{" "}
                    <span className="3xl:text-[14px] 2xl:text-[12px] font-bold leading-[16.94px] text-[#EF8383]">
                      60
                    </span>
                  </div>
                  <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px]">
                    Total Billing hours{" "}
                    <span className="3xl:text-[14px] 2xl:text-[12px] font-bold leading-[16.94px] text-[#4198E0]">
                      104
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-cardShadow 3xl:px-6 2xl:px-4 3xl:pt-[21px] 2xl:pt-[18px] 3xl:pb-[10px] 2xl:pb-2 rounded-[6px] 3xl:max-w-[193px] 2xl:max-w-[175px] w-full">
            <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] pb-2">
              Project Completion
            </div>
            <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold leading-[33.89px] 3xl:pb-[33px] 2xl:pb-[19px]">
              85%
            </h2>
            <p className="text-[14px] font-normal leading-[16.94px] pt-[9px] border-t border-t-[#ECECEC]">
              <span className="text-[14px] font-bold leading-[16.94px]">
                46/80{" "}
              </span>
              Task complete
            </p>
          </div>
        </div>
        <div className="flex 3xl:gap-4 2xl:gap-3 ">
          <div className="shadow-cardShadow 3xl:py-[21px] 2xl:py-[18px] 3xl:px-[24px] 2xl:px-4 rounded-[6px] max-w-[192px] w-full ">
            <p className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] 3xl:pb-[10px] 2xl:pb-2">
              Days left of (109)
            </p>
            <h3 className="3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] text-[#111111] pb-[2px]">
              44
            </h3>
            <p className="text-[12px] font-medium leading-[14.52px] text-[#727272] 2xl:mt-[6px]">
              Jan 12 - June 2
            </p>
          </div>

          <div className="shadow-cardShadow 3xl:py-[19px] 2xl:py-[18px] 3xl:px-6 2xl:px-4 rounded-[6px] max-w-[192px] w-full">
            <p className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] 3xl:pb-[10px] 2xl:pb-2">
              Project Status
            </p>
            <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] text-[#0F8D1B] 3xl:pb-[10px] 2xl:pb-2">
              Good
            </h2>
            <p className="text-[12px] font-medium leading-[14.52px] text-[#727272]">
              as of Jan 12
            </p>
          </div>
          <div className="w-full shadow-cardShadow 3xl:max-w-[582px] rounded-[6px]">
            <div className="flex 3xl:gap-4 2xl:gap-3 w-full  3xl:pt-4 2xl:pt-3 3xl:px-6 2xl:px-4">
              <div className="p-2 shadow-cardShadow rounded-[6px] 3xl:max-w-[167px] w-full">
                <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] pb-1">
                  5
                </h2>
                <p className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111]">
                  Departments
                </p>
              </div>
              <div className="p-2 shadow-cardShadow rounded-[6px] 3xl:max-w-[167px] w-full">
              <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] pb-1">
                  12
                </h2>
                <p className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111]">
                  Resources
                </p>
              </div>
              <div className="p-2 shadow-cardShadow rounded-[6px] 3xl:max-w-[167px] w-full">
              <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] pb-1">
                  4.2
                </h2>
                <p className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111]">
                Avg. Expereince
                </p>
              </div>
            </div>
            <div className="max-w-[537px] w-full pl-6 pt-3 pb-4 pr-[21px]">
              <LineBarGraph></LineBarGraph>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-cardShadow 3xl:max-w-[293px] 2xl:max-w-[230px] w-full rounded-[6px]">
        <div className="3xl:pt-[25px] 2xl:pt-[20px] 3xl:px-6 2xl:px-4 3xl:pb-6 2xl:pb-4">
          <div className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111] pb-2">
            Budget
          </div>
          <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold 3xl:leading-[33.89px] 2xl:leading-[23.89px] text-[#111111] 3xl:pb-[18px] 2xl:pb-2">
            $20,000
          </h2>
          <div className="flex border border-l-0 border-r-0 border-t-[#ECECEC] border-b-[#ECECEC] 3xl:py-[14px] 2xl:py-[10px] 3xl:mb-[18px] 2xl:mb-[12px]">
            <span className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] whitespace-nowrap">
              $7,000 (2)
              <span className="text-[#A33C02] text-[12px] font-medium leading-[14.52px]">
                {" "}
                36%
              </span>
              / $14,000 (3)
              <span className="text-[#A33C02] text-[12px] font-medium leading-[14.52px]">
                {" "}
                60%
              </span>
            </span>
          </div>
          <p className="3xl:text-[14px] 2xl:text-[12px] font-medium leading-[16.94px] text-[#111111] pb-1">
            Paid VS Progress Ratio
          </p>
          <h2 className="3xl:text-[28px] 2xl:text-[20px] font-semibold leading-[33.89px] pb-[10px]">
            7:10
          </h2>
          <div>
            <figure>
              <img src={Assets.line_graph} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react'

export default function ScreenMain() {
  return (
    <div className="w-full ">
      {/* <div className="w-[86px] h-[43.17px]   top-[133.62px] bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
        <div className="w-[35.75px] h-[20.80px]   top-[10.29px] text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
          Stop
        </div>
      </div> */}
      <div className="w-full  ">
        <div className="w-14 h-[30.80px] bg-white rounded-lg shadow-inner border border-zinc-300">
          <div className="w-[44.81px] h-[19.59px]     ">
            <div className="w-[27.45px] h-[19.60px]     text-center text-zinc-800 text-[13.02px] font-normal font-['Inter'] leading-tight">
              0.00
            </div>
          </div>
        </div>
        <div className="w-full h-[181.80px]  ">
          <img
            className="w-full h-[156px]    "
            src="https://via.placeholder.com/1264x156"
          />
          <div className="w-full h-[18px]    bg-neutral-50 rounded shadow shadow-inner border border-neutral-300">
            <div className="w-[34px] h-7   bg-white rounded-[3px] shadow shadow-inner border border-zinc-300">
              <div className="w-px h-3.5  bg-stone-200" />
            </div>
            <div className="w-full h-4    bg-amber-500 shadow-inner" />
            <div className="w-[34px] h-7     bg-white rounded-[3px] shadow shadow-inner border border-zinc-300">
              <div className="w-px h-3.5   bg-stone-200" />
            </div>
          </div>
        </div>
        {/* <div className="w-14 h-[30.80px]   top-[160.75px] bg-white rounded-lg shadow-inner border border-zinc-300">
      <div className="w-[44.81px] h-[19.59px]   top-[5.59px] ">
        <div className="w-[27.45px] h-[19.60px]   top-[-0.80px] text-center text-zinc-800 text-[12.91px] font-normal font-['Inter'] leading-tight">
          4.99
        </div>
      </div>
    </div> */}
      </div>
    </div>
  )
}

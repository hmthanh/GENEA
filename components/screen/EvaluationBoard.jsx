import React from 'react'

export default function EvaluationBoard() {
  return (
    // <div id="tr_ConditionRatings">
    //   <div id="refCanvas"></div>
    //   <div id="spaceForScale"></div>
    //   <div className="spaceForSlider">
    //     <span>
    //       <div className="ui-slider" style={{ marginBottom: '280px' }}>
    //         <div
    //           role="application"
    //           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
    //           style={{
    //             width: '20px !important',
    //             margin: '0px auto 20px !important',
    //             height: '250px !important',
    //             zIndex: 1,
    //           }}
    //           aria-disabled="true"
    //         >
    //           <div
    //             className="ui-slider-bg ui-btn-active"
    //             style={{ marginTop: '0px', height: '250px' }}
    //           ></div>
    //           <a
    //             href="#"
    //             className="ui-slider-handle ui-btn ui-shadow"
    //             role="slider"
    //             aria-valuemin="-100"
    //             aria-valuemax="0"
    //             aria-valuenow="100"
    //             aria-valuetext="100"
    //             title="100"
    //             aria-labelledby="undefined-label"
    //             style={{ top: '0%', marginLeft: '-5px' }}
    //           ></a>
    //         </div>
    //         <input
    //           type="number"
    //           data-type="range"
    //           name="reference"
    //           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
    //           value="100"
    //           min="0"
    //           max="100"
    //           data-vertical="true"
    //           data-highlight="true"
    //           styles={{ display: 'inline-block', float: 'none' }}
    //           disabled=""
    //         />
    //       </div>
    //     </span>
    //   </div>
    //   <div className="spaceForSlider">
    //     <span>
    //       <div className="ui-slider" styles={{ marginBottom: '280px' }}>
    //         <div
    //           role="application"
    //           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
    //           styles={{
    //             width: '20px !important',
    //             margin: '0px auto 20px !important',
    //             height: '250px !important',
    //             zIndex: 1,
    //           }}
    //           aria-disabled="true"
    //         >
    //           <div
    //             className="ui-slider-bg ui-btn-active"
    //             styles={{ marginTop: '0px', height: '250px' }}
    //           ></div>
    //           <a
    //             href="#"
    //             className="ui-slider-handle ui-btn ui-shadow"
    //             role="slider"
    //             aria-valuemin="-100"
    //             aria-valuemax="0"
    //             aria-valuenow="100"
    //             aria-valuetext="100"
    //             title="100"
    //             aria-labelledby="undefined-label"
    //             styles={{ top: '0%', marginLeft: '-5px' }}
    //           ></a>
    //         </div>
    //         <input
    //           type="number"
    //           data-type="range"
    //           name="C1"
    //           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
    //           value="100"
    //           min="0"
    //           max="100"
    //           data-vertical="true"
    //           data-highlight="true"
    //           styles={{ display: 'inline-block', float: 'none' }}
    //           disabled=""
    //         />
    //       </div>
    //     </span>
    //   </div>
    //   <div className="spaceForSlider">
    //     <span>
    //       <div className="ui-slider" styles={{ marginBottom: '280px' }}>
    //         <div
    //           role="application"
    //           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
    //           styles={{
    //             width: '20px !important',
    //             margin: '0px auto 20px !important',
    //             height: '250px !important',
    //             zIndex: 1,
    //           }}
    //           aria-disabled="true"
    //         >
    //           <div
    //             className="ui-slider-bg ui-btn-active"
    //             styles={{ marginTop: '0px', height: '250px' }}
    //           ></div>
    //           <a
    //             href="#"
    //             className="ui-slider-handle ui-btn ui-shadow"
    //             role="slider"
    //             aria-valuemin="-100"
    //             aria-valuemax="0"
    //             aria-valuenow="100"
    //             aria-valuetext="100"
    //             title="100"
    //             aria-labelledby="undefined-label"
    //             styles={{ top: '0%', marginLeft: '-5px' }}
    //           ></a>
    //         </div>
    //         <input
    //           type="number"
    //           data-type="range"
    //           name="C2"
    //           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
    //           value="100"
    //           min="0"
    //           max="100"
    //           data-vertical="true"
    //           data-highlight="true"
    //           styles={{ display: 'inline-block', float: 'none' }}
    //           disabled=""
    //         />
    //       </div>
    //     </span>
    //   </div>
    //   <div className="spaceForSlider">
    //     <span>
    //       <div className="ui-slider" styles={{ marginBottom: '280px' }}>
    //         <div
    //           role="application"
    //           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
    //           styles={{
    //             width: '20px !important',
    //             margin: '0px auto 20px !important',
    //             height: '250px !important',
    //             zIndex: 1,
    //           }}
    //           aria-disabled="true"
    //         >
    //           <div
    //             className="ui-slider-bg ui-btn-active"
    //             styles={{ marginTop: '0px', height: '250px' }}
    //           ></div>
    //           <a
    //             href="#"
    //             className="ui-slider-handle ui-btn ui-shadow"
    //             role="slider"
    //             aria-valuemin="-100"
    //             aria-valuemax="0"
    //             aria-valuenow="100"
    //             aria-valuetext="100"
    //             title="100"
    //             aria-labelledby="undefined-label"
    //             styles={{ top: '0%', marginLeft: '-5px' }}
    //           ></a>
    //         </div>
    //         <input
    //           type="number"
    //           data-type="range"
    //           name="C3"
    //           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
    //           value="100"
    //           min="0"
    //           max="100"
    //           data-vertical="true"
    //           data-highlight="true"
    //           styles={{ display: 'inline-block', float: 'none' }}
    //           disabled=""
    //         />
    //       </div>
    //     </span>
    //   </div>
    // </div>

    <div className="p-1.5 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-[859.61px] h-[47.17px] flex flex-row relative">
        <div className="w-[86px] h-[43.17px]   bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]   text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
        <div className="w-[86px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]   text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
        <div className="w-[86px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]   text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
        <div className="w-[86px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]   text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
        <div className="w-[86px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]   text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
        <div className="w-[86px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]  text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
        <div className="w-[86px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
          <div className="w-[33.12px] h-[20.80px]   text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
            Play
          </div>
        </div>
      </div>
    </div>
  )
}

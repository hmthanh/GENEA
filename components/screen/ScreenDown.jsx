import React from "react"

export default function ScreenDown() {
  return (
    <div id="mainDown" align="center">
      <div>
        <div>
          <div id="div_Mushra" colSpan="2">
            <div id="mushra_items">
              <div>
                <div>
                  <div>Reference</div>
                  <div id="conditionNameScale"></div>
                  <div>Cond.1</div>
                  <div>Cond.2</div>
                  <div>Cond.3</div>
                  <div>Cond.4</div>
                </div>
                <div>
                  <div>
                    <button
                      data-theme="a"
                      id="buttonReference"
                      data-role="button"
                      className="audioControlElement ui-btn ui-btn-a ui-shadow ui-corner-all"
                      onclick="pageManager.pages[1].btnCallbackReference()"
                      styles={{ margin: "0 auto" }}
                    >
                      Play
                    </button>
                  </div>
                  <div></div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick="pageManager.pages[1].btnCallbackCondition(0);"
                      id="buttonConditions0"
                    >
                      Play
                    </button>
                  </div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick="pageManager.pages[1].btnCallbackCondition(1);"
                      id="buttonConditions1"
                    >
                      Play
                    </button>
                  </div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick="pageManager.pages[1].btnCallbackCondition(2);"
                      id="buttonConditions2"
                    >
                      Play
                    </button>
                  </div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick="pageManager.pages[1].btnCallbackCondition(3);"
                      id="buttonConditions3"
                    >
                      Play
                    </button>
                  </div>
                </div>
                <div id="tr_ConditionRatings">
                  <div id="refCanvas"></div>
                  <div id="spaceForScale"></div>
                  <div className="spaceForSlider">
                    <span>
                      <div className="ui-slider" style={{ marginBottom: "280px" }}>
                        <div
                          role="application"
                          className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
                          style={{
                            width: "20px !important",
                            margin: "0px auto 20px !important",
                            height: "250px !important",
                            zIndex: 1,
                          }}
                          aria-disabled="true"
                        >
                          <div
                            className="ui-slider-bg ui-btn-active"
                            style={{ marginTop: "0px", height: "250px" }}
                          ></div>
                          <a
                            href="#"
                            className="ui-slider-handle ui-btn ui-shadow"
                            role="slider"
                            aria-valuemin="-100"
                            aria-valuemax="0"
                            aria-valuenow="100"
                            aria-valuetext="100"
                            title="100"
                            aria-labelledby="undefined-label"
                            style={{ top: "0%", marginLeft: "-5px" }}
                          ></a>
                        </div>
                        <input
                          type="number"
                          data-type="range"
                          name="reference"
                          className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
                          value="100"
                          min="0"
                          max="100"
                          data-vertical="true"
                          data-highlight="true"
                          styles={{ display: "inline-block", float: "none" }}
                          disabled=""
                        />
                      </div>
                    </span>
                  </div>
                  <div className="spaceForSlider">
                    <span>
                      <div className="ui-slider" styles={{ marginBottom: "280px" }}>
                        <div
                          role="application"
                          className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
                          styles={{
                            width: "20px !important",
                            margin: "0px auto 20px !important",
                            height: "250px !important",
                            zIndex: 1,
                          }}
                          aria-disabled="true"
                        >
                          <div
                            className="ui-slider-bg ui-btn-active"
                            styles={{ marginTop: "0px", height: "250px" }}
                          ></div>
                          <a
                            href="#"
                            className="ui-slider-handle ui-btn ui-shadow"
                            role="slider"
                            aria-valuemin="-100"
                            aria-valuemax="0"
                            aria-valuenow="100"
                            aria-valuetext="100"
                            title="100"
                            aria-labelledby="undefined-label"
                            styles={{ top: "0%", marginLeft: "-5px" }}
                          ></a>
                        </div>
                        <input
                          type="number"
                          data-type="range"
                          name="C1"
                          className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
                          value="100"
                          min="0"
                          max="100"
                          data-vertical="true"
                          data-highlight="true"
                          styles={{ display: "inline-block", float: "none" }}
                          disabled=""
                        />
                      </div>
                    </span>
                  </div>
                  <div className="spaceForSlider">
                    <span>
                      <div className="ui-slider" styles={{ marginBottom: "280px" }}>
                        <div
                          role="application"
                          className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
                          styles={{
                            width: "20px !important",
                            margin: "0px auto 20px !important",
                            height: "250px !important",
                            zIndex: 1,
                          }}
                          aria-disabled="true"
                        >
                          <div
                            className="ui-slider-bg ui-btn-active"
                            styles={{ marginTop: "0px", height: "250px" }}
                          ></div>
                          <a
                            href="#"
                            className="ui-slider-handle ui-btn ui-shadow"
                            role="slider"
                            aria-valuemin="-100"
                            aria-valuemax="0"
                            aria-valuenow="100"
                            aria-valuetext="100"
                            title="100"
                            aria-labelledby="undefined-label"
                            styles={{ top: "0%", marginLeft: "-5px" }}
                          ></a>
                        </div>
                        <input
                          type="number"
                          data-type="range"
                          name="C2"
                          className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
                          value="100"
                          min="0"
                          max="100"
                          data-vertical="true"
                          data-highlight="true"
                          styles={{ display: "inline-block", float: "none" }}
                          disabled=""
                        />
                      </div>
                    </span>
                  </div>
                  <div className="spaceForSlider">
                    <span>
                      <div className="ui-slider" styles={{ marginBottom: "280px" }}>
                        <div
                          role="application"
                          className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
                          styles={{
                            width: "20px !important",
                            margin: "0px auto 20px !important",
                            height: "250px !important",
                            zIndex: 1,
                          }}
                          aria-disabled="true"
                        >
                          <div
                            className="ui-slider-bg ui-btn-active"
                            styles={{ marginTop: "0px", height: "250px" }}
                          ></div>
                          <a
                            href="#"
                            className="ui-slider-handle ui-btn ui-shadow"
                            role="slider"
                            aria-valuemin="-100"
                            aria-valuemax="0"
                            aria-valuenow="100"
                            aria-valuetext="100"
                            title="100"
                            aria-labelledby="undefined-label"
                            styles={{ top: "0%", marginLeft: "-5px" }}
                          ></a>
                        </div>
                        <input
                          type="number"
                          data-type="range"
                          name="C3"
                          className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
                          value="100"
                          min="0"
                          max="100"
                          data-vertical="true"
                          data-highlight="true"
                          styles={{ display: "inline-block", float: "none" }}
                          disabled=""
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <canvas
                id="mushra_canvas"
                height="320"
                styles={{ position: "absolute", left: "6px", top: "87.9844px", zIndex: 0 }}
                width="680"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

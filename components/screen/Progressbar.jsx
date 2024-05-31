import React from 'react'

export default function Progressbar() {
    return (
        <div
            id="page_progressbar"
            className="ui-tolito-progressbar ui-tolito-progressbar-outer-a ui-tolito-progressbar-corner-all ui-tolito-progressbar-mini"
            role="progressbar"
            style={{ minValue: 0, maxValue: 100, contentValue: "33.33333333333333" }}
        >
            <div
                className="ui-tolito-progressbar-bg ui-tolito-progressbar-active-b ui-tolito-progressbar-corner-all"
                style={{ width: "33.3333%" }}
            ></div>
        </div>
    )
}

import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

export default function Navigation() {
    return (
        <div className="ui-body ui-body-a ui-corner-all" id="page_navigation">
            <PreviousButton />
            <NextButton />
        </div>
    )
}

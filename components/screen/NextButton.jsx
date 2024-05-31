"use client"

import React from 'react'

export default function NextButton() {

  const handleNextPage = () => {

  }

  return (
    <button data-role="button" data-inline="true" onClick={handleNextPage} className="ui-btn ui-btn-inline ui-shadow ui-corner-all" style={{ display: 'inline-block', boxShadow: 'ui-shadow', borderRadius: 'all' }}>Next</button>
  )
}

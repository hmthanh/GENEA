"use client"

import React from 'react'

export default function PreviousButton() {

  const handlePreviousPage = () => {

  }

  return (
    <button data-role="button" data-inline="true" onClick={handlePreviousPage} className="ui-btn ui-btn-inline ui-shadow ui-corner-all" style={{ display: 'inline-block', boxShadow: 'ui-shadow', borderRadius: 'all' }}>Previous</button>
  )
}

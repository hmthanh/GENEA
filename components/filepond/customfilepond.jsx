"use client"

import React, { useEffect, useRef, useCallback } from "react"
import { create, supported, registerPlugin, FileStatus } from "filepond"

export { registerPlugin, FileStatus }

const isSupported = supported()

const filteredMethods = [
  "setOptions",
  "on",
  "off",
  "onOnce",
  "appendTo",
  "insertAfter",
  "insertBefore",
  "isAttachedTo",
  "replaceElement",
  "restoreElement",
  "destroy",
]

const FilePond = (props) => {
  const pondRef = useRef(null)
  const elementRef = useRef(null)
  const inputRef = useRef(null)
  const inputCloneRef = useRef(null)
  const allowFilesSync = useRef(true)

  useEffect(() => {
    if (!isSupported) return

    const inputElement = elementRef.current.querySelector('input[type="file"]')
    inputRef.current = inputElement
    inputCloneRef.current = inputElement.cloneNode()

    const options = { ...props }

    if (options.onupdatefiles) {
      const cb = options.onupdatefiles
      options.onupdatefiles = (items) => {
        allowFilesSync.current = false
        cb(items)
      }
    }

    const pondInstance = create(inputElement, options)
    pondRef.current = pondInstance

    Object.keys(pondInstance)
      .filter((key) => !filteredMethods.includes(key))
      .forEach((key) => {
        pondRef.current[key] = pondInstance[key]
      })

    return () => {
      if (pondInstance) {
        const bin = document.createElement("div")
        bin.append(pondInstance.element)
        bin.id = "foo"

        pondInstance.destroy()
        pondRef.current = null

        elementRef.current.append(inputCloneRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (pondRef.current) {
      const options = { ...props }
      delete options.onupdatefiles
      pondRef.current.setOptions(options)
    }
  })

  const shouldComponentUpdate = useCallback(() => {
    if (!allowFilesSync.current) {
      allowFilesSync.current = true
      return false
    }
    return true
  }, [])

  if (!shouldComponentUpdate()) {
    return null
  }

  const {
    id,
    name,
    className,
    allowMultiple,
    required,
    captureMethod,
    acceptedFileTypes,
  } = props

  return (
    <div className="filepond--wrapper" ref={elementRef}>
      <input
        type="file"
        name={name}
        id={id}
        accept={acceptedFileTypes}
        multiple={allowMultiple}
        required={required}
        className={className}
        capture={captureMethod}
      />
    </div>
  )
}

export default FilePond

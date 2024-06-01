import React from 'react'

export default function ThemeSwitch() {
  return (
    <button
      title="Change theme"
      className="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
      id="headlessui-listbox-button-:Rkt6:"
      type="button"
      aria-haspopup="listbox"
      aria-expanded="false"
      data-headlessui-state=""
    >
      <div className="flex items-center gap-2 capitalize">
        <svg
          fill="none"
          viewBox="2 2 20 20"
          width="12"
          height="12"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            fill="currentColor"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
        <span className="">Dark</span>
      </div>
    </button>
  )
}

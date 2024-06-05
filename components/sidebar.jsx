import React from "react"

// Advanced

export default function Sidebar() {
  return (
    <aside className="nextra-sidebar-container flex flex-col md:top-16 md:shrink-0 motion-reduce:transform-none transform-gpu transition-all ease-in-out print:hidden md:w-64 md:sticky md:self-start max-md:[transform:translate3d(0,-100%,0)]">
      <div className="overflow-y-auto overflow-x-hidden p-4 grow md:h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar">
        <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none">
          <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100">
            <ul className="flex flex-col gap-1 nextra-menu-desktop max-md:hidden">
              <li className="flex flex-col gap-1 active">
                <a
                  className="flex rounded px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600 contrast-more:border-primary-500 contrast-more:dark:border-primary-500"
                  href="/getting-started"
                >
                  Getting&nbsp;Started
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <a
                  className="flex rounded px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                  href="/process"
                >
                  Process
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <a
                  className="flex rounded px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                  href="/question"
                >
                  Question
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <a
                  className="flex rounded px-2 py-1.5 text-sm transition-colors cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
                  href="/about"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}

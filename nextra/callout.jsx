"use client"

import React from 'react'

export function Callout() {
    return (
        <div className="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300">
            <div className="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2" >💡</div>
            <div className="w-full min-w-0 leading-7">
                <p className="mt-6 leading-7 first:mt-0">If you want to use GraphQL API or libs like Axios, you can create your own
                    fetcher function. Check <a className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/docs/data-fetching">here</a> for more examples.</p>
            </div>
        </div>
    )
}

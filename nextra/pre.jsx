"use client"

import cn from 'clsx'
import { useCallback, useRef } from 'react'
import { Button, classes } from './button'
import { CopyToClipboard } from './copy-to-clipboard'
import { WordWrapIcon } from './icons/wordwrap.jsx'

export function Pre({
    children,
    className,
    'data-filename': filename,
    'data-copy': copy,
    'data-language': language,
    icon: Icon,
    ...props
}) {
    const preRef = useRef(true)

    const toggleWordWrap = useCallback(() => {
        const htmlDataset = document.documentElement.dataset
        const hasWordWrap = 'nextraWordWrap' in htmlDataset
        if (hasWordWrap) {
            delete htmlDataset.nextraWordWrap
        } else {
            htmlDataset.nextraWordWrap = ''
        }
    }, [])

    const copyButton = copy === '' && (
        <CopyToClipboard
            className={filename ? 'ml-auto' : ''}
            getValue={() => preRef.current?.querySelector('code')?.textContent || ''}
        />
    )

    return (
        <div className="nextra-code relative mt-6 first:mt-0">
            {filename && (
                <div
                    className={cn(
                        'px-4 text-xs text-gray-700 dark:text-gray-200',
                        'bg-gray-100 dark:bg-neutral-900',
                        'flex items-center h-12 gap-2 rounded-t-md',
                        classes.border,
                        'border-b-0'
                    )}
                >
                    {Icon && <Icon className="h-3.5 w-auto shrink-0" />}
                    <span className="truncate">{filename}</span>
                    {copyButton}
                </div>
            )}
            <pre
                className={cn(
                    'overflow-x-auto subpixel-antialiased text-[.9em]',
                    'dark:bg-black py-4',
                    'ring-1 ring-inset ring-gray-300 dark:ring-neutral-700',
                    'contrast-more:ring-gray-900 contrast-more:dark:ring-gray-50',
                    'contrast-more:contrast-150',
                    filename ? 'rounded-b-md' : 'rounded-md',
                    className
                )}
                ref={preRef}
                {...props}
            >
                {children}
            </pre>
            <div
                className={cn(
                    'opacity-0 transition [div:hover>&]:opacity-100 focus-within:opacity-100',
                    'flex gap-1 absolute right-4',
                    filename ? 'top-14' : 'top-2'
                )}
            >
                <Button
                    onClick={toggleWordWrap}
                    className="md:hidden"
                    title="Toggle word wrap"
                >
                    <WordWrapIcon className="h-4 w-auto" />
                </Button>
                {!filename && copyButton}
            </div>
        </div>
    )
}
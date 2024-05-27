import { Anchor } from "@/nextra/anchor"
import { Tr, Th, Td,Pre,Code } from "@/nextra"
import cn from 'clsx'

const EXTERNALHREFREGEX = /https?:\/\//

export const Link = ({ href = '', className, ...props }) => (
    <Anchor
        href={href}
        newWindow={EXTERNALHREFREGEX.test(href)}
        className={cn(
            'text-primary-600 underline decoration-from-font [text-underline-position:from-font]',
            className
        )}
        {...props}
    />
)

const A = ({ href = '', ...props }) => (
    <Anchor href={href} newWindow={EXTERNALHREFREGEX.test(href)} {...props} />
)

export function useMDXComponents(components) {
    return {
        h1: props => (
            <h1
                className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
                {...props}
            />
        ),
        ul: ({ children }) => (
            <ul
                className="mt-6 list-disc first:mt-0 ltr:ml-6 rtl:mr-6"
            >
                {children}
            </ul>
        ),
        ol: props => (
            <ol
                className="mt-6 list-decimal first:mt-0 ltr:ml-6 rtl:mr-6"
                {...props}
            />
        ),
        li: props => <li className="my-2" {...props} />,
        blockquote: props => (
            <blockquote
                className={cn(
                    'mt-6 border-gray-300 italic text-gray-700 dark:border-gray-700 dark:text-gray-400',
                    'first:mt-0 ltr:border-l-2 ltr:pl-6 rtl:border-r-2 rtl:pr-6'
                )}
                {...props}
            />
        ),
        hr: props => (
            <hr
                className="my-8 border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400"
                {...props}
            />
        ),
        a: Link,
        // table: props => (
        //     <Table className="nextra-scrollbar mt-6 p-0 first:mt-0" {...props} />
        // ),
        p: props => <p className="mt-6 leading-7 first:mt-0" {...props} />,
        tr: Tr,
        th: Th,
        td: Td,
        // details: Details,
        // summary: Summary,
        pre: Pre,
        code: Code,
        ...components,
    }
}
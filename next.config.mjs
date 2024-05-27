// // import withMDX from "@next/mdx"

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
// };

// const nextraConfig = withMDX(nextConfig)

// export default nextraConfig;
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { remarkMermaid } from '@theguild/remark-mermaid'
import rehypeShiki from '@shikijs/rehype'
import remarkMdxDisableExplicitJsx from "./plugins/remark-mdx-disable-explicit-jsx.mjs"
import { remarkCustomHeadingId } from './plugins/remark-custom-heading-id.mjs'
import { remarkHeadings } from './plugins/remark-headings.mjs'
import { remarkLinkRewrite } from './plugins/remark-link-rewrite.mjs'


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  baseUrl: "./",
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkParse,
      remarkRehype,
      remarkMath,
      remarkMermaid,
      remarkMdxDisableExplicitJsx,
      remarkCustomHeadingId,
      [remarkHeadings, { exportName: "useTOC" }],
      [remarkLinkRewrite, {
        pattern: /\.mdx?(?:(?=[#?])|$)/,
        replace: '',
        excludeExternalLinks: true
      }]],
    rehypePlugins: [rehypeStringify, rehypeKatex, [rehypeShiki, {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }]
    ],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
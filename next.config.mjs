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
import rehypePrettyCode from 'rehype-pretty-code'
import { remarkMermaid } from '@theguild/remark-mermaid'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkParse, remarkRehype,remarkMath, remarkMermaid],
    rehypePlugins: [rehypeStringify, rehypeKatex,rehypePrettyCode],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
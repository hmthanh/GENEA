import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkEmbedImages from "remark-embed-images"
import { remarkMermaid } from '@theguild/remark-mermaid'
import rehypeShiki from '@shikijs/rehype'
import remarkMdxDisableExplicitJsx from "./plugins/remark-mdx-disable-explicit-jsx.mjs"
import { remarkCustomHeadingId } from './plugins/remark-custom-heading-id.mjs'
import { remarkHeadings } from './plugins/remark-headings.mjs'
import { remarkLinkRewrite } from './plugins/remark-link-rewrite.mjs'
import { remarkMdxFrontMatter } from './plugins/remark-mdx-frontmatter.mjs'
import { remarkMdxTitle } from './plugins/remark-mdx-title.mjs'
import { remarkStaticImage } from './plugins/remark-static-image.mjs'



const withMDX = nextMDX({
  extension: /\.mdx?$/,
  baseUrl: "./",
  options: {
    remarkPlugins: [
      remarkMdxFrontMatter,
      remarkGfm,
      remarkParse,
      remarkRehype,
      remarkMath,
      remarkMermaid,
      remarkMdxDisableExplicitJsx,
      remarkCustomHeadingId,
      // remarkMdxTitle,
      [remarkHeadings, { exportName: "useTOC" }],
      [remarkLinkRewrite, {
        pattern: /\.mdx?(?:(?=[#?])|$)/,
        replace: '',
        excludeExternalLinks: true
      }],
      remarkStaticImage,
    ],

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
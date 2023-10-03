import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
export default function ReadmeTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, rawMarkdownBody } = markdownRemark

  return (
    <div className="text-white">
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{rawMarkdownBody}</ReactMarkdown>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

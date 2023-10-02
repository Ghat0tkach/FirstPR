import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const BlogPost = ({ data, children }) => {
  return (
  
      <div className="bg-gray-100 p-4">
        <div className="max-w-xl mx-auto h-full">
          <article className="bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {data.mdx.frontmatter.title}
            </h1>
            <p className="text-sm text-gray-600">Posted: {data.mdx.frontmatter.date}</p>
            <p className="text-sm text-gray-600">Author: {data.mdx.frontmatter.author}</p>
            <div className="prose mt-4">
              {children}
            </div>
          </article>
        </div>
      </div>
    
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
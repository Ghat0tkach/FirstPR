import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className="bg-gray-100 p-4">
        <div className="max-w-xl mx-auto">
          {data.allMdx.nodes.map(node => (
            <article key={node.id} className="bg-white shadow-md p-4 rounded-lg mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                <Link to={`/blog/${node.frontmatter.slug}`} className="text-blue-600 hover:underline">
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600">Posted: {node.frontmatter.date}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
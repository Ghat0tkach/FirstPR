import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import BlogHeader from '../../components/blog/blogHeader'
import "../../styles/global.css"
import { AnimatePresence, motion } from "framer-motion";


const BlogIndex = ({ data }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap gap-4">

        {data.allMdx.nodes.map(node => (
           <Link to={`/blog/${node.frontmatter.slug}`} className="inline-flex items-center text-sm font-medium text-center text-white rainbow">
          
          <div key={node.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/docs/images/blog/1.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {node.frontmatter.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {node.frontmatter.description}
              </p>
              <Link to={`/blog/${node.frontmatter.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};




const BlogPage = ({ data }) => {
  return (<>
  
     <BlogHeader/>
     <BlogIndex data={data}/>
    
    </>
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

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage
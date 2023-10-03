import React from "react"
import { graphql, Link } from "gatsby"
import ReadmeHeader from '../../components/blog/readmeHeader'
import ScrollVelocity from "../../components/ScrollAnimations/ScrollVelocity";

const ReadmeIndex = ({ data }) => {
  // Extract subdirectories within the "readme" folder
  const subdirectories = [...new Set(data.allMarkdownRemark.nodes.map(node => {
    const pathParts = node.fileAbsolutePath.split("/");
    const readmeIndex = pathParts.indexOf("readme");
    if (readmeIndex !== -1 && readmeIndex + 1 < pathParts.length) {
      return pathParts[readmeIndex + 1];
    }
    return null;
  }))].filter(Boolean);

  return (
    <>
      <ReadmeHeader />
      <div className="flex justify-center items-center mt-24">
      <div className="flex flex-wrap gap-4">
        {subdirectories.map(subdirectory => (
          <div
           
            className="inline-flex items-center text-sm font-medium text-center text-white rainbow"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {subdirectory}
                  </h5>
                </a>
                  <Link
                   to={`/readme/${subdirectory}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View on Github.
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
                  
                
                </div>
              
               
              </div>
            </div>
          
        ))}
      </div>
    </div>
     <ScrollVelocity text1={`Github Readme//`} text2={`// Show Your Profiles `}/>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/readme/" } }) {
      nodes {
        id
        fileAbsolutePath
      }
    }
  }
`

export default ReadmeIndex

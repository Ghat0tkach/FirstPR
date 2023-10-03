import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'
import { Navbar } from '../../components/NavModule/Navbar';
import Footer from '../../components/footer';

const BlogPage = ({ data, children }) => {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h1 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text py-4 px-6 mb-4">
            {data.mdx.frontmatter.title}
          </h1>
          <div className="flex justify-between text-sm text-gray-600 px-6 mb-4">
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <p>Author: {data.mdx.frontmatter.author}</p>
          </div>
          <div className="prose max-w-none p-6 mt-64">{children}</div>
        </article>
      </div>
    </div>
  );
};

const BlogPost = ({ data, children }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Navbar component */}
     <Navbar/>

      <div className="flex-1 flex flex-col">
        {/* Main content area with blog post */}
        <main className="py-8 px-4 flex-grow">
          <BlogPage data={data}>{children}</BlogPage>
        </main>
        
        {/* Footer component */}
        <Footer/>
      </div>
    </div>
  );
};




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
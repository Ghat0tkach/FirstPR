import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <div>
    {/* Your layout content here */}
    {children}

    {/* Include TransitionPortal for transitions */}
    <TransitionPortal level="top">
      {/* Transitions will appear here */}
    </TransitionPortal>
  </div>


  )
}

export default Layout
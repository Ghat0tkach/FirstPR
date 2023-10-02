// src/components/ReadmeList.js

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function ReadmeList() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "readme" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  const readmeFiles = data.allFile.edges;

  return (
    <div>
      <h1 className='text-white'>Readme Files:</h1>
      <ul>
        {readmeFiles.map((file) => (
          <li key={file.node.name}>
            <a href={`/users/${file.node.name}`}>{file.node.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadmeList;

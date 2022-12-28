import React from 'react'
import type {
  HeadFC,
  PageProps,
} from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Blog: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          // @ts-ignore
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default Blog

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

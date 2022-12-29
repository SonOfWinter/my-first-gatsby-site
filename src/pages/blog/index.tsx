import React from 'react'
import type {
  HeadFC,
  PageProps,
} from 'gatsby'
import {
  graphql,
  Link,
} from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Index: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          // @ts-ignore
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
      </ul>
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
                excerpt
            }
        }
    }
`

export default Index

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

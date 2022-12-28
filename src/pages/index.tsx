import * as React from 'react'
import type {
  HeadFC,
  PageProps,
} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';
import Seo from '../components/seo';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A beautifully mountain"
        src="../images/mountain.webp"
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" />

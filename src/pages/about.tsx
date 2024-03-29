import React from 'react'
import type {
  HeadFC,
  PageProps,
} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo';

const about: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default about

export const Head: HeadFC = () => <Seo title="About me" />

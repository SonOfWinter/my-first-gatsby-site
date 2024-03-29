import React from 'react';
import {
  useStaticQuery,
  graphql,
} from 'gatsby'
import { siteTitle } from './header.module.css'

const Header = () => {

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
    <header className={siteTitle}>
      {data.site.siteMetadata.title}
    </header>
  );
}

export default Header;

import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> &middot;{' '}
      <a href="https://docs.imgix.com/libraries/gatsby">imgix</a> &middot;{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/daletom/gatsby-v4-imgix-demo">Source</a>
    </div>
  </Container>
)

export default Footer

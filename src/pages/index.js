import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.imgixImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          imgixImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 424
              height: 212
              sizes: "(min-width: 1280px) 362px, (min-width: 1032px) 30vw, (min-width: 704px) 40vw, 90vw"
            )
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          imgixImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 1180
              sizes: "(min-width: 1280px) 1088px, (min-width: 1024) 85vw, 100vw"
            )
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import styled from "styled-components"

const LinkButton = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: black;
    color: white;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      background: #FF2400;
      color: white;
    }
  }
`

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          bookCover={edge.node.localImage.publicURL}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
          key={edge.node.id}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>Join conversation</Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          summary
          title
          localImage{
            publicURL
          }
          id
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage

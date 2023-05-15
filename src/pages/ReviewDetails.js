import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const REVIEW = gql`
  query {
    reviews {
      data {
        id,
        attributes {
          title
          body
        }
      }
    }
  }
`

export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  console.log(data)

  return (
    <div className="review-card">
      <div className="rating">{data.review.rating}</div>
      <h2>{data.review.title}</h2>

      <small>console list</small>

      <p>{data.review.body}</p>
    </div>
  )
}
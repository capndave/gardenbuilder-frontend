import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import styled from "styled-components"
import { GET_USER_BEDS } from "queries"
import PropTypes from "prop-types"

const BedListWrapper = styled.ul`
  background-color: pink;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background: pink;
  margin: 0 auto;
`

function BedList({ gardenId }) {
  const { data, loading, error } = useQuery(GET_USER_BEDS, {
    variables: { id: parseInt(gardenId) },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <div className="error">{error.message}</div>

  const beds = data?.beds
  console.log(gardenId)
  console.log(beds)

  return (
    <BedListWrapper>
      {beds.map((bed) => (
        <React.Fragment key={bed.id}>
          <a href={`/bed?id=${bed.id}&name=${bed.name}`}>{bed.name}</a>
          <p>{bed.name}</p>
        </React.Fragment>
      ))}
    </BedListWrapper>
  )
}

BedList.propTypes = {
  gardenId: PropTypes.string,
}

export { BedList }

import React from 'react'

const Image = (props) => {
  return (
    <>
      <img src={require(props.path).default} alt="" />
    </>
  )
}

export default Image

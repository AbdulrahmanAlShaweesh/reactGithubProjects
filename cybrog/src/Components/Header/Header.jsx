import React from 'react'

const Header = (props) => {
  return (
    <>
        <h1 style={{color: props.color}}>{props.color}</h1>
    </>
  )
}

export default Header
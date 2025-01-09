import React from 'react'

function Header(props) {
  return (
    <div className='head'>
        <h1>{props.title}</h1>
      
    </div>
  )
}
Header.defaultProps={
  title:"TODO List"
}
export default Header

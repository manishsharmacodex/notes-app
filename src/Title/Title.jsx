import React from 'react'
import './Title.css'

const Title = ({title,subTitle}) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title

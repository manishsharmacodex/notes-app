import React, { useContext } from 'react'
import './Home.css'
import { ContextProvider } from '../../Context/ContextProvider'

const Home = () => {

  const {value} = ContextProvider;

  return (
    <div className='home'>
      <h1>Home</h1>
      <p>{value}</p>
    </div>
  )
}

export default Home

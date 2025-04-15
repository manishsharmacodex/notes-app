import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Title from '../../Title/Title'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Title title="Top Course" subTitle="Best Course in Alpha School" />
    </div>
  )
}

export default Home

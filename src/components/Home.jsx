import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <div>
  
        <Header/>
        This is the Home page
        <Outlet/>
    </div>
  )
}

export default Home
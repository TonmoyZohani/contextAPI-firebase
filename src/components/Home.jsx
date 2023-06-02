import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import Header from './Header'

const Home = () => {

  const user=useContext(AuthContext)

  return (
    <div>
        <Header/>
        <p>User Name:{user && user.displayName}</p>
        This is the Home page
        <Outlet/>
    </div>
  )
}

export default Home
import React from 'react'
import { Outlet } from 'react-router-dom'
import { BigSidebar, Navbar, SmallSidebar } from '../../components'
import Wrapper from "../../assets/wrappers/SharedLayout"

const SharedLayout = () => {
  return (
    <Wrapper >
    <main className='dashboard'>
      <SmallSidebar></SmallSidebar>
      <BigSidebar></BigSidebar>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </main>  
   </Wrapper>
  )
}

export default SharedLayout
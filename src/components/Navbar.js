import React , {useState} from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from "./Logo"
import {FaAlignLeft, FaUserCircle, FaCaretDown} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, clearStore } from '../features/user/userSlice'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const {user} = useSelector(store=>store.user)
  const dispatch = useDispatch()

  const toggle =()=>{
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper >
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div>
          <Logo></Logo>
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn ' onClick={()=>setShowLogout(!showLogout)}>
            <FaUserCircle></FaUserCircle>
            {user?.name}
            <FaCaretDown></FaCaretDown>
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown '} >
            <button type='button' className='dropdown-btn' onClick={()=>dispatch(clearStore("Logging out..."))}>
              Logout
            </button>
          </div>
        </div>
      </div>
       
    </Wrapper>
  )
}

export default Navbar
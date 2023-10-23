import React, {useState} from 'react'
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import {FormRow} from "../../components"
import { useSelector, useDispatch } from 'react-redux'
import {toast} from "react-toastify"
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const {isLoading, user} = useSelector(store=>store.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name:user?.name || "",
    email:user?.email || "",
    lastName:user?.lastName || "",
    location:user?.location || "",

  })

  const handleSubmit = (e) =>{
    const {name, email, lastName, location} = userData
    e.preventDefault()
    if(!name || !email || !lastName || !location ){
      toast.error("Please fill out all fields")
    }
    dispatch(updateUser(userData))
  }

  const handleChange = (e) =>{
    const name= e.target.name
    const value = e.target.value

    setUserData({...userData, [name]:value})
  }
  return (
    <Wrapper>
      <form  className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow type="text" name="name" value={userData.name} handleChange={handleChange}></FormRow>
          <FormRow type="text" labelText =" last name" name="lastName" value={userData.lastName} handleChange={handleChange}></FormRow>
          <FormRow type="email" name="email" value={userData.email} handleChange={handleChange}></FormRow>
          <FormRow type="text" name="location" value={userData.location} handleChange={handleChange}></FormRow>
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? "Please Wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
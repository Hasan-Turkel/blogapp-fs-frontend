import React from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {

  const {user} = useSelector((state)=>state.auth)
  // console.log(user);
  return (
    <div className='container text-left my-4 profile-div'>
    <h3>Username: {user?.username}</h3>
    <h3>Email: {user?.email}</h3>
    

    </div>
  )
}

export default Profile
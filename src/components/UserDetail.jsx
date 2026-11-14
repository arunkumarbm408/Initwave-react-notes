import React from 'react'

const UserDetail = ({user}) => {
  return (
    <div>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserDetail

import React from 'react'
import UserDetail from './UserDetail'

const Dashboard = ({user}) => {
  return (
    <div>
    <h>This is my Dashboard</h>
    <UserDetail user={user}/>
    </div>
  )
}

export default Dashboard

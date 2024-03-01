import React from 'react'
import { Appbar } from '../components/Appbar'
import { Users } from './Users'
import { Balance } from '../components/Balance'

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance />
      <Users />
    </div>
  )
}

export default Dashboard
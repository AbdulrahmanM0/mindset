"use client"

import React from 'react'
import Sidedar from '../sidebar/Sidebar'
import ChatContainer from '../chat/ChatContainer'

function Dashboard() {
  return (
    <div className="flex">
        <Sidedar />
        <ChatContainer />
    </div>
  )
}

export default Dashboard
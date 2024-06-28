import React from 'react'
import Header from '../layout/header/Header'
import ChatInput from './chatInput/ChatInput'
import MainChat from './mainChat/MainChat'
import { Warning } from '../warning/Warning'

function ChatContainer() {
  return (
    <>
    <div className="flex-1 h-screen">
      <div className="relative h-screen">
        <Header />
        <MainChat />
        <ChatInput />
      </div>
    </div>

    <Warning />
    </>
  )
}

export default ChatContainer
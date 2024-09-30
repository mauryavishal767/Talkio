import React from 'react'
import './home.scss'
import FreqContact from './FreqContact'
import ChatCard from './ChatCard'

function Home() {
  return (
    <div className='home-container'>
        <div className="highlights">
            <div className="heading">
                <div className="new-message">
                    <p>You Recived</p>
                    <h2>{'42'} Messages</h2>
                </div>  
                <p className="greet-name">Hi, {'vishal'}!</p>
            </div>
            <div className="frequent-chats-container">
                <p><span>Frequent</span> List</p>
                <div className="list-container">
                    <FreqContact/>
                    <FreqContact/>
                    <FreqContact/>
                    <FreqContact/>
                    <FreqContact/>
                    <FreqContact/>
                </div>
            </div>
        </div>
        <div className="chats-container">
            <p className="heading">All Message({'8'})</p>
            <div className="chats">
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
                <ChatCard/>
            </div>
        </div>
    </div>
  )
}

export default Home
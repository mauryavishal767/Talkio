import React from 'react'

function ChatCard() {
  return (
    <div className="chat-card">
        <div className="profile-image">
            <img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=2048x2048&w=is&k=20&c=dfjN29cr1CyEzhR0RgRjCWSNMpSrLAKsZzMn_K9Aalo=" alt="" />
        </div>
        <div className="contact-name">
            <p>{'Riya Singh'}</p>
            <p className="about">{'my name is vishal'}</p>
        </div>
        <div className="new">
            <div className="new-mssg">
                <p>1</p>
            </div>
        </div>
    </div>
  )
}

export default ChatCard
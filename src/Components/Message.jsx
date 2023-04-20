import React from 'react'
import { userAuth } from '../Context/AuthContext'




const Message = ({ message }) => {
const {currentUser} = userAuth()



    return (
        <div>
            <div className={`chat my-3 ${message.uid === currentUser.uid ? 'chat-end' : 'chat-start'}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={message.avatar} />
    </div>
  </div>
  <div className="chat-header">
    {message.name}
  </div>
  <div className="chat-bubble">{message.text}</div>
  <div className="chat-footer opacity-50">
    {message.uid === currentUser.uid && 'Delivered'}
  </div>
</div>

        </div>
    )
}

export default Message

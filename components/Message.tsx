// ./components/Message.tsx
// ./components/Message.tsx
import React from 'react'
import Avatar from './Avatar'

type MessageProps = {
  role: string
  content: string
}

const Message = ({ role, content }: MessageProps) => {
  const align = role === 'user' ? 'justify-end' : 'justify-start'
  const bgColor = role === 'user' ? 'bg-blue-100' : 'bg-green-100'

  return (
    <div className={`flex ${align} my-4`}> {/* adjust margin here */}
      <Avatar role={role} />
      <div 
        className={`ml-2 p-2 rounded-lg ${bgColor} shadow-md break-words max-w-[70%]`} 
        style={{wordBreak: 'break-word'}}> {/* adjust message width and word breaking here */}
        {content}
      </div>
    </div>
  )
}

export default Message

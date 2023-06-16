// ./components/Avatar.tsx
import React from 'react'

type AvatarProps = {
  role: string
}

const Avatar = ({ role }: AvatarProps) => {
  const text = role === 'user' ? 'U' : 'AI'
  const bgColor = role === 'user' ? 'bg-blue-500' : 'bg-green-500'

  return (
    <div className={`w-8 h-8 min-w-min min-h-min flex-shrink-0 flex items-center justify-center rounded-full text-white ${bgColor}`}>
      {text}
    </div>
  )
}

export default Avatar
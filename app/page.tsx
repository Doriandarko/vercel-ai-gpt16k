'use client'


import { useChat } from 'ai/react'
import Message from '../components/Message' // add this line

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col w-full max-w-lg py-24 mx-auto stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <Message key={m.id} role={m.role} content={m.content} />
          ))
        : null}

      <form onSubmit={handleSubmit} className="bg-white flex justify-between items-center fixed bottom-0 w-full max-w-lg p-2 mb-8 border border-gray-300 rounded shadow-xl">
        <textarea
          className="w-11/12 h-auto max-h-40 resize-none p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
  <button 
    type="submit" 
    className="ml-4 bg-blue-500 text-white p-2 rounded"
  >
    {/* Replace this with your plane SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  </button>
</form>
    </div>
  )
}

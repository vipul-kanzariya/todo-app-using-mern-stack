import React from 'react'

export default function Header({ search, setSearch }) {
  return (
    <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-white mb-2'>Todo List</h1>
        <p className='text-gray-300 mb-4'>Stay organized and get things done!</p>
         <div className='max-w-md mx-auto relative'>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search tasks...'
          className='w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 
          rounded-lg text-white placeholder-gray-400 focus:outline-none 
          focus:ring-2 focus:ring-emerald-500'
        />
        <span className='absolute left-3 top-2.5 text-gray-400'>🔍</span>
      </div>
    </div>
  )
}

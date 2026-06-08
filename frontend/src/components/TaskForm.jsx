import { Plus, X } from 'lucide-react'
import React from 'react'

export default function TaskForm({onCancel,newTask,setNewTask,onAdd}) {
  return (
    <div className='bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8'>
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-bold text-white'>Add New Task</h2>
           {onCancel && ( <button className='text-gray-400 hover:text-red-500 transition' onClick={onCancel}>
                <X size={26}/>
            </button>)}
        </div>
        <div className='space-y-4'>
            <input type="text"
            value={newTask.title}
            onChange={(e)=>{setNewTask({...newTask,title:e.target.value})}}
            placeholder='Task Title .....'
            className='w-full px-4 py-3 bg-gray-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'
             />
             <textarea 
              value={newTask.description}
            onChange={(e)=>{setNewTask({...newTask,description:e.target.value})}}
             className='w-full px-4 py-3 bg-gray-800 border border-gray-600  text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg' 
             placeholder='Task description' 
             rows={4}/>
             <div className='flex gap-3'>
                <button className='flex-1 bg-linear-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-green-500 hover:to-emerald-500 transition'
                onClick={onAdd}
                >
                    <Plus size={20}/>Add Task
                </button>
                <button className='flex-1 bg-gray-700 text-gray-300  py-3 rounded-lg hover:bg-gray-600 transition' onClick={onCancel}>Cancel</button>
             </div>
        </div>
    </div>
  )
}

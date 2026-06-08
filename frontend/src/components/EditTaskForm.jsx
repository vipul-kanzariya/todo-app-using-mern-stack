import { Check, X } from 'lucide-react'
import React, { useState } from 'react'

export default function EditTaskForm({task,onSave,onCancel}) {
    const [title,setTitle] = useState(task.title)
    const [description,setDescription] = useState(task.description)
    const handleSubmit =(e)=>{
        e.preventDefault();
        onSave({title,description});
    }
  return (
    <div className='space-y-4'>
        {/* title input */}
        <input type="text"
         value={title}
         onChange={(e)=> setTitle(e.target.value)}
         className='w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-lg text-white'
          required/>
        {/* description */}
        <textarea rows={3}
        value={description}
         onChange={(e)=> setDescription(e.target.value)}
         className='w-full px-3 py-2 bg-gray-700 border-gray-600 rounded-lg text-white resize-none'>

         </textarea>
        {/* buttons */}
        <div className='flex items-center space-x-2'>
            <button className='px-4 py-2 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-lg flex items-center gap-2 shadow-lg'
            onClick={handleSubmit}>
                <Check size={16}/>Save
            </button>
            <button className='px-4 py-2 bg-gray-700 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 flex items-center gap-2'
            onClick={onCancel}>
                <X size={16}/>Cancel
            </button>
        </div>
    </div>
  )
}

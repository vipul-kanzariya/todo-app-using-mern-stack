import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({task,loading,editingTask,setEditingTask,updateTask,deleteTask,toggleTask}) {

  // if(loading){
  //   return (<div className='text-center'>
  //     <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500'>
  //     </div>
  //       <p>Loading Task</p>

  //   </div>
  // )}
  if(task.length === 0){
    return <div className='text-center py-8'>
      <p className='text-gray-400 text-lg'>No task found, try adding one!</p>
    </div>
  }
  return (
    <div className='space-y-4'>
       {task.map((task)=>{
        return <TaskItem key={task._id}
        task={task}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
          />
       })}
    </div>
  )
}

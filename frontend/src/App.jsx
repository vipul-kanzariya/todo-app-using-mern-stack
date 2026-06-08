import { useEffect, useState } from 'react'
import Header from './components/Header'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Stats from './components/Stats'

import { createTaskApi, deleteTaskApi, fetchTaskApi, toggleTaskApi, updateTaskApi } from './api/tasksApi'
function App() {

  const [task,setTask] = useState([]);
  const [newTask,setNewTask] = useState({title:"",description:""});
  const [editingTask,setEditingTask] =useState(null);
  const [loading,setLoading] =useState(false);
  const [filter,setFilter] = useState("all");
  const [showForm,setShowForm] = useState(false);
const [search, setSearch] = useState("");
  const fetchTask = async()=>{
    try{
      setLoading(true);
      const data = await fetchTaskApi();
      setTask(data);

    }catch(err){
      console.log("Error fecthing "+err);
    }finally{
      setLoading(false);
    }
  };


  useEffect(()=>{
    fetchTask();
  },[])

  const createTask = async()=>{
    if(!newTask.title.trim()) return;
     try{
     
      const data = await createTaskApi(newTask);
      setTask([...task,data]);
      setNewTask({title:"",description:""});
      setShowForm(false);

    }catch(err){
      console.log("Error fecthing "+err);
    }

  }
  const updateTask = async(id,updates)=>{
     try{
      const data = await updateTaskApi(id,updates);
      setTask(task.map((t)=>(t._id === id ? data : t)));
      setEditingTask(null);
    }catch(err){
      console.log("Error fecthing "+err.message);
    }

  };
  const deleteTask = async(id)=>{
    try{
      await deleteTaskApi(id)
      setTask(task.filter((t) => t._id !== id));

    }catch(err){
       console.log("Error fecthing "+err);
    }
  }
  const toggleTask = async(id)=>{
    try{
      const updated = await toggleTaskApi(id);
      setTask(task.map((t)=>(t._id === id ? updated : t)))

    }catch(err){
       console.log("Error fecthing "+err);
    }
  }

 const filteredTasks = task.filter((t) => {
  const matchesFilter =
    filter === "completed" ? t.completed :
    filter === "pending" ? !t.completed : true;

  const matchesSearch =
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.description?.toLowerCase().includes(search.toLowerCase());

  return matchesFilter && matchesSearch;
});

  const stats ={
    total: task.length,
    completed:task.filter((t)=> t.completed ).length,
    pending: task.filter((t)=> !t.completed).length
  }


 return <div className='min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900  py-8'>
  <div className='max-w-4xl mx-auto'>
    <Header search={search} setSearch={setSearch}/>
    <Stats {...stats}/>
    {/* Add new task button */}
    <div className='flex justify-end mb-4'>
      <button className='px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-900  transition mr-4' onClick={()=>{setShowForm(true)}}>+ Add New Task</button>
    </div>
    <FilterButtons filter={filter} setFilter={setFilter}/>
    <TaskList 
    task={filteredTasks}
    loading={loading} 
    editingTask={editingTask}
    setEditingTask={setEditingTask}
    updateTask={updateTask}
    deleteTask={deleteTask}
    toggleTask={toggleTask}
    />
  </div>
{showForm && (  <div className='fixed inset-0 bg-black/80  backdrop-blur[10px] flex items-center justify-center z-50'>
 {/* task form */}
  <div className='w-full max-w-3xl px-8'>
    <TaskForm onCancel ={()=>{setShowForm(false)}} newTask={newTask} setNewTask={setNewTask} onAdd={createTask}/>
  </div>

  </div>)}
 </div>
}

export default App

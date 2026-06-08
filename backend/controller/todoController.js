const Task =require('../models/todoModel');

exports.getAllTodos = async(req,res)=>{
    try{
    const todos = await Task.find().sort({ createdAt: -1 });

    res.status(200).json(todos);
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
exports.getTodo = async(req,res) =>{
    try{
        const todo = await Task.findById(req.params.id);
        if(!todo){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
    res.status(200).json(todo);

    }catch(err){
         res.status(500).json({
            message:err.message
        })
    }
}
exports.createTodo =async(req,res)=>{
    try{
        const todo =new Task({
            title:req.body.title,
            description:req.body.description
        });
        const savedTask = await todo.save();
        res.status(201).json(savedTask);
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
exports.updateTodo = async(req,res) =>{
    try{
        const todo = await Task.findById(req.params.id);
         if(!todo){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
        todo.title =req.body.title || todo.title;
        todo.description = req.body.description !== undefined ? req.body.description : todo.description;
        todo.completed =req.body.completed !== undefined ? req.body.completed : todo.completed;
        todo.updatedAt = Date.now();
        const updated =await todo.save();
        res.status(200).json(updated);

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
exports.deleteTodo = async(req,res)=>{
    try{
        const todo = await Task.findByIdAndDelete(req.params.id);
          if(!todo){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
        res.json({message:"Todo is deleted successfully"})

    }catch(err){
         res.status(500).json({
            message:err.message
        })
    }
}
exports.toggleComplete = async(req,res) =>{
    try{
        const todo = await Task.findById(req.params.id);
         if(!todo){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
        todo.completed = !todo.completed;
        todo.updatedAt = Date.now();
        const updatedTodo = await todo.save();
        res.json(updatedTodo);


    }catch(err){
        res.status(500).json({
        message:err.message
        })
    }
}
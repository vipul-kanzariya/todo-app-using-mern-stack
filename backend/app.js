const express =require('express');
const cors = require('cors');
const todoRouter = require('./router/todoRouter');

const app =express();
app.use(cors());
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.status(200).json({
//         status:'API running...'
//     })
// });
app.use('/api/v2/todos',todoRouter);


module.exports =app;
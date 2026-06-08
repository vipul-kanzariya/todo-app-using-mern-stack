const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app')
dotenv.config({
    path:'./config.env'
});
const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
        console.log("Database connected successfully")
   
}).catch((err)=>{  
        console.log("Database not connected :"+err.message);
});
const PORT =process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("Server is runnig on port "+PORT);
    console.log(`http://localhost:${PORT}`);
    

})
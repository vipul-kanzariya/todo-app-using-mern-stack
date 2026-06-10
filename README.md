# Backend

Node.js + Express + MongoDB REST API.

## Commands
cd backend
npm install
npm  i dotenv express
Server runs at `http://localhost:8000`

## To Start Server

npm start dev

## API Endpoints


 GET     : `/api/v2/todos`              Get all todos    
 POST    : `/api/v2/todos`              Create a todo    
 GET     : `/api/v2/todos/:id`          Get single todo  
 PUT     : `/api/v2/todos/:id`          Update a todo    
 DELETE  : `/api/v2/todos/:id`          Delete a todo    
 PATCH   : `/api/v2/todos/:id/toggle`   Toggle complete  


# Frontend

React + Vite + Tailwind CSS todo app.

## Commands

cd frontend
npm install
npm i vite@latest
To Start the server : npm run dev

App runs at `http://localhost:5173`

## .env Variables

Create a `.env` file in the `frontend` folder if you want to configure the API URL:

VITE_API_URL=http://localhost:8000/api/v2

## Features

- Add, edit, delete tasks
- Toggle task completion
- Filter by all / pending / completed
- Search tasks by title or description




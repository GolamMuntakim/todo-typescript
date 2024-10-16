import { AppBar, Container, Toolbar, Typography, Stack, TextField ,Button} from "@mui/material"
import TodoItems from "./components/TodoItems"
import { useEffect, useState } from "react"
import { getTodos, saveTodos } from "./utils/features"




function App() {
 const [todos, setTodos] = useState<TodoItemType[]>(getTodos())
 const [title, setTitle] = useState<TodoItemType["title"]>("")


 const completeHandler = (id:TodoItemType["id"]):void =>{
  const newTodos:TodoItemType[] = todos.map((i)=>{
    if(i.id === id) i.isCompleted = !i.isCompleted;
    return i ;
  })
  setTodos(newTodos)

 }
 const deleteHandler = (id:TodoItemType["id"]):void =>{
  const deleteTodos:TodoItemType[] = todos.filter((i)=> i.id !== id);
  setTodos(deleteTodos)

 }

 const submitHandler = ():void =>{
  const newTodo:TodoItemType = {
    title ,
    isCompleted: false,
    id: String(Math.random()*1000)
  }
  setTodos(prev => ([...prev, newTodo]))
  setTitle("")
  
 }

const editHandler = (id:TodoItemType["id"] , newTitle: TodoItemType["title"]):void =>{
  const editTodos : TodoItemType[] = todos.map((i)=>{
    if(i.id === id) i.title = newTitle;
    return i
  })
setTodos(editTodos)
}

useEffect(()=>{
  saveTodos(todos)
},[todos])

  return <Container maxWidth="sm" sx={{height: "100vh"}}>
    <AppBar position="static">
      <Toolbar>
        <Typography>
          TODO APP
        </Typography>
      </Toolbar>
    </AppBar>
    {/* <TodoItems></TodoItems> */}
    <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
         {
            todos.map((i)=>(
              <TodoItems 
              completeHandler={completeHandler} 
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              key={i.id} 
              todo={i}/>
            ))
          }
         </Stack>
         <TextField 
         value={title} 
         onChange={(e)=>setTitle(e.target.value)}
         fullWidth label={"New Task"}
         onKeyDown={(e)=>{ if(e.key === "Enter" && title !== "") submitHandler() ;}}
          ></TextField>
         <Button 
         onClick={submitHandler} 
         variant="contained" 
         fullWidth 
         sx={{margin:"1rem 0"}}
         disabled={title === ""}
         >Add</Button>
  </Container>
}

export default App

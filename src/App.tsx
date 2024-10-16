import { AppBar, Container, Toolbar, Typography, Stack, TextField ,Button} from "@mui/material"
import TodoItems from "./components/TodoItems"
import { useState } from "react"




function App() {
 const [todos, setTodos] = useState<TodoItemType[]>([])
 const [title, setTitle] = useState<TodoItemType["title"]>("")


 const completeHandler = (id:TodoItemType["id"]):void =>{
  alert(id)
 }
 const deleteHandler = (id:TodoItemType["id"]):void =>{
  alert(id)
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

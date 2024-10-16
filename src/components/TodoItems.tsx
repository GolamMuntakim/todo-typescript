import { Delete, Edit } from '@mui/icons-material';
import { Paper, Typography, Checkbox, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';


type PropsType ={
    todo : TodoItemType;
    deleteHandler : (id:TodoItemType["id"])=>void;
    completeHandler : (id:TodoItemType["id"])=>void;
    editHandler : (id:TodoItemType["id"] ,  newTitle: TodoItemType["title"])=>void;
}

const TodoItems = ({todo, deleteHandler, completeHandler,editHandler} : PropsType) => {
const [editActive , setEditActive] = useState<boolean>(false)
const [textVal, setTextVal] = useState<string>(todo.title)

    return (<Paper sx={{
        padding:"1rem",
    }}>
       <Stack direction={"row"} alignItems={"center"}>
        {
            editActive ?
             <TextField 
            value={textVal} 
            onChange={(e)=>setTextVal(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key === "Enter" && textVal !== "") 
                {
                    editHandler(todo.id, textVal);
                    setEditActive(false)
                }
            }}
            ></TextField> : <Typography marginRight={"auto"}>{todo?.title}</Typography>
        }
        <Checkbox checked={todo.isCompleted} onChange={()=> completeHandler(todo.id)}></Checkbox>
        <Button onClick={()=>setEditActive((prev)=>!prev)}>{editActive ? "Done" : <Edit></Edit>}</Button>
        <Button onClick={()=>deleteHandler(todo.id)}><Delete></Delete></Button>
       </Stack>
    </Paper>)
    
};

export default TodoItems;
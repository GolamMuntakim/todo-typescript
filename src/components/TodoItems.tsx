import { Delete, Edit } from '@mui/icons-material';
import { Paper, Typography, Checkbox, Button, Stack } from '@mui/material';


type PropsType ={
    todo : TodoItemType;
    deleteHandler : (id:TodoItemType["id"])=>void;
    completeHandler : (id:TodoItemType["id"])=>void;
}

const TodoItems = ({todo, deleteHandler, completeHandler} : PropsType) => {
    return <Paper sx={{
        padding:"1rem",
    }}>
       <Stack direction={"row"} alignItems={"center"}>
       <Typography marginRight={"auto"}>{todo?.title}</Typography>
        <Checkbox checked={todo.isCompleted} onChange={()=> completeHandler(todo.id)}></Checkbox>
        <Button onClick={()=>completeHandler(todo.id)}><Edit></Edit></Button>
        <Button onClick={()=>deleteHandler(todo.id)}><Delete></Delete></Button>
       </Stack>
    </Paper>
    
};

export default TodoItems;
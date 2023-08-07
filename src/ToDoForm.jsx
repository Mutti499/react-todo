import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import {InputAdornment, IconButton} from "@mui/material";


import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function ToDoForm({adder}){
    const [text, setText] = useState("");

    const change = (evt) => {
        setText(evt.target.value);
    }

    const addToDoForm = (e) => {
        e.preventDefault();
        const newToDo = {id: crypto.randomUUID(), text: text, completed:false};
        adder(newToDo);
        setText("");
    }

    return (
        <ListItem >
            <form onSubmit={addToDoForm}>
                <TextField 
                id="outlined-basic" 
                label="Add ToDo" 
                variant="outlined" 
                onChange={change} 
                value={text}
                InputProps={{
                    endAdornment:(
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="create todo"
                          edge="end"
                          type="submit"
                         >
                            <Create/>
                        </IconButton>
                      </InputAdornment>
                    )
                }}/>
            </form>      
        </ListItem>
    )
}
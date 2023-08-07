import List from '@mui/material/List';
import ToDo from "./ToDo"
import ToDoForm from './ToDoForm';
import Box from '@mui/material/Box';

import { useEffect, useState } from 'react';


function getInitial() {
    const initalStorage = JSON.parse(localStorage.getItem("todos"));
    if(!initalStorage){return [{id:0, text: "Start with writing some stuf!!", completed:false}]}
    return initalStorage;
}

export default function ToDoList(){
    const [toDos, setToDos] = useState(getInitial);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos])


    function removeToDo(key) {
        const newToDo = toDos.filter((todo) => {
            return todo.id !== key
        });
        setToDos(newToDo);
    }

    function toggleToDo(key) {
        const toggledToDo = toDos.map((todo) => {
            if(todo.id === key) { 
                return { ...todo, completed:!(todo.completed)};
            }
            else { 
                return todo;
            }
        });
        setToDos(toggledToDo);
    }

    function addToDo(todo) {
        const newToDo = [...toDos , todo];
        setToDos(newToDo);
    }

    return (
        <Box sx={{                 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '100vh', 
            bgcolor: 'background.paper',
        }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {toDos.map((todo) => {

                return (
                    <ToDo 
                        key={todo.id} 
                        todo={todo} 
                        remover={() => removeToDo(todo.id)}
                        toggler={() => toggleToDo(todo.id)}
                    />
                );
              })}
              <ToDoForm adder = {addToDo}/>
              {/* This adder = {addToDo} part can not be written like () => addToDo because I want to do extra stuf in todorom unlike todolist. 
              ex: Todolist just wants to delete some element so id is enough and I can put the information here. however, to in form I cannto say onSubmit={addTodo}
              Because I want to make some other changes like setting text and preventing the default action of form.    */}
            </List>
        </Box>

      );
} 
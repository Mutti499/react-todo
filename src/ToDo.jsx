/* eslint-disable react/prop-types */
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from "@mui/material/styles";

const CrossedText = styled("span")({
    textDecoration: "line-through",
  });

export default function ToDo({todo, remover, toggler}){
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
        secondaryAction={
            <ClearIcon onClick={remover}/>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
        <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
              onChange={toggler}
            />
          </ListItemIcon>
          <ListItemText id={labelId}>
          {todo.completed ? (
            <CrossedText>{todo.text}</CrossedText>
          ) : (
            todo.text
          )}
        </ListItemText>
        </ListItemButton>
      </ListItem>
    )

}
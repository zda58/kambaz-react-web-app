import { ListGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <Button onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"> Update </Button>
      <FormControl value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
    </ListGroup.Item>
  );
}

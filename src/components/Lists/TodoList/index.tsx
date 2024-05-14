import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  selectTodos,
} from "../../../redux/features/todo/todoSlice";
import TodoListItem from "../../ListItems/TodoListItem";
import styles from "./todo-list.module.css";
import { ITodo } from "../../../interface";

const TodoList = () => {
  const todos: ITodo[] = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {todos.map((todo: ITodo, index: number) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onStatusChange={() => dispatch(changeStatus(index))}
        />
      ))}
    </div>
  );
};

export default TodoList;

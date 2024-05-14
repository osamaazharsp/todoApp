import { ITodoListItemProps } from "../../../interface";
import styles from "./todo-list-item.module.css";

const TodoListItem: React.FC<ITodoListItemProps> = ({
  todo,
  onStatusChange,
}) => {
  const containerClass = `${styles.container} ${
    todo.status === "done" ? styles.done : ""
  }`;
  const titleClass = `${styles.title} ${
    todo.status === "done" ? styles.dashedLine : ""
  }`;
  const descriptionClass = `${styles.description} ${
    todo.status === "done" ? styles.done : ""
  }`;

  return (
    <div className={containerClass}>
      <div style={{ margin: 0, padding: 0, border:0 }}>
        <p className={titleClass}>{todo.title}</p>
        <p className={descriptionClass}>{todo.description}</p>
      </div>
      {todo.status === "pending" && (
        <input
          className={styles.checkbox}
          placeholder="change status"
          type="checkbox"
          checked={false}
          onChange={onStatusChange}
        />
      )}
    </div>
  );
};

export default TodoListItem;

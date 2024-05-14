import { useState } from "react";
import InputField from "../InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todo/todoSlice";
import styles from "./todo-header.module.css";

interface FieldValues {
  [key: string]: string; // Allowing any string key with string values
}

const TodoHeader: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");
  const [fieldValues, setFieldValues] = useState<FieldValues>({
    title: "",
    description: "",
  });

  const onFieldChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const tFieldValues = { ...fieldValues, [name]: value };
    setFieldValues(tFieldValues);
  };

  const onAdd = () => {
    try {
      if (!fieldValues.title) throw new Error("Title is required!");
      dispatch(
        addTodo({
          id: new Date().getMilliseconds(),
          title: fieldValues.title,
          description: fieldValues.description || "",
          status: "pending",
        })
      );
      setFieldValues({
        title: "",
        description: "",
      });
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
  return (
    <div className={styles.container}>
      <InputField
        placeholder="Enter title"
        value={fieldValues.title}
        name="title"
        onChange={onFieldChange}
      />
      <InputField
        placeholder="Enter description"
        name="description"
        value={fieldValues.description}
        onChange={onFieldChange}
      />
      <button onClick={onAdd} className={styles.addButton}>
        Add todo
      </button>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {/* Render error message if exists */}
    </div>
  );
};

export default TodoHeader;

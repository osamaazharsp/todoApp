  import TodoList from "../../components/Lists/TodoList";
  import TodoHeader from "../../components/TodoHeader/TodoHeader";
  import styles from "./home.module.css";

  const Home = () => {
    return (
      <div className={styles.container}>
        <TodoHeader />
        <TodoList />
      </div>
    );
  };

  export default Home;

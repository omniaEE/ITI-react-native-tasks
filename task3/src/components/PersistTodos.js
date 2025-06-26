import { useSelector } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersistTodos = () => {
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return null;
};

export default PersistTodos;

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setTodos } from "../Redux/slices/todos.slice";

const LoadTodos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = async () => {
      const stored = await AsyncStorage.getItem("todos");
      if (stored) {
        dispatch(setTodos(JSON.parse(stored)));
      }
    };
    loadTodos();
  }, []);

  return null;
};

export default LoadTodos;

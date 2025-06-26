import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { FILTRATION_TYPES } from "../Redux/slices/todos.slice";

const Todos = () => {
  const { todos, filter } = useSelector((state) => state.todos);

  const filteredTodos = todos?.filter((todo) => {
    if (filter === FILTRATION_TYPES.ALL) return true;
    if (filter === FILTRATION_TYPES.COMPLETED) return todo.completed;
    if (filter === FILTRATION_TYPES.IN_PROGRESS) return !todo.completed;
  });
  return (
    <FlatList
      data={filteredTodos}
      style={styles.todosContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
    />
  );
};

export default Todos;

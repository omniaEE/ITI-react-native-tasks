import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onToggle, onDelete }) => {
  return (
    <FlatList
      data={todos}
      style={styles.todosContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggle={onToggle} onDelete={onDelete} />
      )}
    />
  );
};

export default Todos;

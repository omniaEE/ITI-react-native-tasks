import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { toggleTodo, deleteTodo } from "../Redux/slices/todos.slice";
import { useDispatch } from "react-redux";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.todoItem}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          textDecorationLine: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black",
        }}
      >
        {todo.title}
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity onPress={() => dispatch(deleteTodo(todo.id))}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(toggleTodo(todo.id))}>
          <AntDesign
            name={todo.completed ? "checkcircle" : "checkcircleo"}
            size={20}
            color={todo.completed ? "gray" : "green"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;

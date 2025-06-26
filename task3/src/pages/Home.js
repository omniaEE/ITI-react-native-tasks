import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import { FILTRATION_TYPES, updateFilter } from "../Redux/slices/todos.slice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { navigate } = useNavigation();
  const { filter, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(updateFilter(filter));
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
        Todo App
      </Text>

      <TodoForm />

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => handleFilterChange(FILTRATION_TYPES.ALL)}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => handleFilterChange(FILTRATION_TYPES.COMPLETED)}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => handleFilterChange(FILTRATION_TYPES.IN_PROGRESS)}
        >
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      <Todos />
    </View>
  );
};

export default Home;

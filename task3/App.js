import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const handleAddTodo = () => {
    if (title && desc) {
      const newTodo = {
        id: `${Date.now()}-${Math.random()}`,
        title,
        desc,
        status: "active",
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setDesc("");
    }
  };
  const handleToggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "done" ? "active" : "done" }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return todo.status === filter.toLowerCase();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Add Task Description"
        value={desc}
        onChangeText={setDesc}
      />
      <Button title="Add Task" onPress={handleAddTodo} />
      <View style={styles.divider} />
      <View style={styles.filterContainer}>
        {["All", "active", "done"].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              filter === status && styles.selectedFilter,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text style={styles.filterText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredTodos}
        // keyExtractor={(_, index) => index.toString()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleToggleStatus(item.id)}>
            <View style={styles.todoItem}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Text style={styles.todoDesc}>{item.desc}</Text>
              <Text>Status: {item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
    // justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#888",
    marginVertical: 15,
    width: "80%",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  filterButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 25,
    backgroundColor: "#eee",
  },
  selectedFilter: {
    backgroundColor: "#008bff",
  },
  filterText: { color: "#000" },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  todoTitle: { fontWeight: "bold", fontSize: 16 },
  todoDesc: { fontStyle: "italic" },
});

import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(),
      title,
      description,
      completed: false,
    };
    onSubmit(todo);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />

      <TextInput
        placeholder="Enter description"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
      />

      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.7}
        onPress={handleSubmit}
      >
        <Text style={{ ...styles.text, fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;

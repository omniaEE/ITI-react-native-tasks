import Router from "./src/routes/Router";
import store from "./src/Redux/store";
import { Provider } from "react-redux";
import PersistTodos from "./src/components/PersistTodos";
import LoadTodos from "./src/components/LoadTodos";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <LoadTodos />
      <PersistTodos />
    </Provider>
  );
}

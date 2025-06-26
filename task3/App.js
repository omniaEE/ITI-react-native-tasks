import Router from "./src/routes/Router";
import store from "./src/Redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

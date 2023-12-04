import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router/Router";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div className="scroll-smooth">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;

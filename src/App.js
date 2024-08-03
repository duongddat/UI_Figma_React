import { useContext } from "react";
import { RouterProvider } from "react-router-dom";

import { ModeContext } from "./store/mode-store";
import router from "./router/index";
import "./App.css";

function App() {
  const { isDark } = useContext(ModeContext);

  return (
    <main className="App" data-theme={isDark ? "dark" : "light"}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

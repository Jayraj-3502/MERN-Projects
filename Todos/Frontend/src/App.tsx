import { BrowserRouter } from "react-router";
import AuthRoutes from "./routes/AuthRoutes";
import TodoRoutes from "./routes/TodoRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthRoutes />
        <TodoRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

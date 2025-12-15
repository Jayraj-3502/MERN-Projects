import { Route, Routes } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

function TodoRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default TodoRoutes;

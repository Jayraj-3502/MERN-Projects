import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ForgotPasswordStepper from "../pages/auth/ForgotPassword";
import AuthProtectedRoutes from "./AuthProtectedRoutes";

function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthProtectedRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswordStepper />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AuthRoutes;

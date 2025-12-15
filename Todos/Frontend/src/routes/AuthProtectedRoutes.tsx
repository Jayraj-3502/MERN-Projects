import { Navigate, Outlet } from "react-router";
import { userLoggedin } from "../constant";
import AuthRoutes from "./AuthRoutes";
import AuthLayout from "../layouts/AuthLayout";

function AuthProtectedRoutes() {
  if (userLoggedin) {
    console.log(userLoggedin);
    return <Navigate to={"/"} replace={true} />;
  } else {
    console.log(userLoggedin);
    return <Outlet />;
  }
}

export default AuthProtectedRoutes;

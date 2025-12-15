import { Navigate, Outlet } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { userLoggedin } from "../constant";

function ProtectedRoutes() {
  if (userLoggedin) {
    console.log(userLoggedin);
    return <Outlet />;
  } else {
    console.log(userLoggedin);
    return <Navigate to={"/login"} replace={true} />;
  }
}

export default ProtectedRoutes;

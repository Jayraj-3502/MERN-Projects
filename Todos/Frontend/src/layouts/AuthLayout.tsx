import { Outlet } from "react-router";

function AuthLayout() {
  console.log("This is printed");
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;

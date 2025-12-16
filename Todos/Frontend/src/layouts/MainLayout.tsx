import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <div>
      <NavBar src="asd" />
      <Outlet />
    </div>
  );
}

export default MainLayout;

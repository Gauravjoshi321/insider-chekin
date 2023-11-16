import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <p>APP LAYOUT</p>
      <Outlet />
    </div>
  )
}

export default AppLayout;
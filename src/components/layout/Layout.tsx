import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="min-w-[220px]">
        <Header />
      </div>
      <div className="flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

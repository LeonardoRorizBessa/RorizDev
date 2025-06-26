import { Outlet } from "react-router"
import Menu from "../components/Menu"

const Layout = () => {
  return ( 
    <div className="h-screen flex">
      <Menu />
      <div className="flex-1 bg-preto h-screen overflow-auto p-4 md:p-6 xl:p-10">
        <Outlet />
      </div>
    </div>
   );
}
 
export default Layout;
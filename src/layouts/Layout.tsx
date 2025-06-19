import { Outlet } from "react-router"
import Header from "../components/Header"

const Layout = () => {
  return ( 
    <div className="h-screen flex">
      <Header />
      <div className="flex-1 bg-preto h-screen overflow-auto p-4 md:p-6 lg:p-10">
        <Outlet />
      </div>
    </div>
   );
}
 
export default Layout;
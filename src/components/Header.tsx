import { NavLink } from "react-router"
import { FaDev, FaFolderOpen } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { GiStairsGoal } from "react-icons/gi"
import SocialMedia from "./SocialMedia"
import { FaLinkedinIn, FaDiscord } from "react-icons/fa"
import { TbBrandGithubFilled } from "react-icons/tb"
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi"
import { PiUserListFill } from "react-icons/pi"

const Header = () => {
  return ( 
    <>
      <header className="hidden lg:flex flex-col justify-between bg-cinza w-64 p-4">
        <div>
          <FaDev 
            className="text-azul w-full"
            size={70} 
          />
          <nav className="grid gap-4 mt-8 *:items-center *:p-3 *:text-branco *:text-md *:font-bold *:duration-150 *:rounded *:pl-4">
            <NavLink 
              className={"flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50"} 
              to={"/"}
              end
            >
              <FaHouse size={18} />
              Home
            </NavLink>
            <NavLink 
              className={"flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50"} 
              to={"/projects"}
              end
            >
              <FaFolderOpen size={18} />
              Projects
            </NavLink>
            <NavLink 
              className={"flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50"} 
              to={"/journey"}
              end
            >
              <GiStairsGoal size={18}/>
              Journey
            </NavLink>
            <NavLink 
              className={"flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50"} 
              to={"/about"}
              end
            >
              <PiUserListFill size={18} />
              About
            </NavLink>
          </nav>
        </div>
        <ul className="flex justify-around">
          <SocialMedia 
            icon={FaLinkedinIn} 
            link='https://www.linkedin.com/in/leonardorbessa/'
          />
          <SocialMedia 
            icon={TbBrandGithubFilled} 
            link='https://github.com/LeonardoRorizBessa'
          />
          <SocialMedia 
            icon={BiLogoGmail} 
            link='mailto:leonardo.rorizbessa@gmail.com'
          />
          <SocialMedia 
            icon={FaDiscord}
            link="https://discord.com/users/129270783905103872"
          />
          <SocialMedia
            icon={BiLogoInstagramAlt}
            link='https://www.instagram.com/leonardororiz/'
          />
        </ul>
      </header>
    </>
   );
}
 
export default Header;
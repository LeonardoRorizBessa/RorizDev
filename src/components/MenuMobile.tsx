import { useState } from "react"
import { FaDev, FaFolderOpen, FaLinkedinIn, FaDiscord } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { GiStairsGoal } from "react-icons/gi"
import { TbBrandGithubFilled } from "react-icons/tb"
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi"
import { PiUserListFill } from "react-icons/pi"
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri"
import { NavLink } from "react-router"
import SocialMedia from "./SocialMedia"

const MenuMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="xl:hidden" onClick={() => setOpen(true)}>
        <RiMenu3Fill size={32} />
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-cinza z-50 shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-between`}
      >
        <div>
          <div className="flex justify-between items-center p-4">
            <FaDev className="text-azul" size={40} />
            <button onClick={() => setOpen(false)}>
              <RiCloseFill size={28} className="text-branco" />
            </button>
          </div>
          <nav className="grid gap-4 mt-8 *:items-center *:p-3 *:text-branco *:text-md *:font-bold *:duration-150 *:rounded *:pl-4">
            <NavLink className="flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50" to="/" end onClick={() => setOpen(false)}>
              <FaHouse size={18} /> Home
            </NavLink>
            <NavLink className="flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50" to="/projects" end onClick={() => setOpen(false)}>
              <FaFolderOpen size={18} /> Projects
            </NavLink>
            <NavLink className="flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50" to="/journey" end onClick={() => setOpen(false)}>
              <GiStairsGoal size={18} /> Journey
            </NavLink>
            <NavLink className="flex gap-3 hover:bg-azul/10 [&.active]:bg-azul/50" to="/about" end onClick={() => setOpen(false)}>
              <PiUserListFill size={18} /> About
            </NavLink>
          </nav>
        </div>
        <ul className="flex justify-center gap-4 mb-6">
          <SocialMedia icon={FaLinkedinIn} link="https://www.linkedin.com/in/leonardorbessa/" />
          <SocialMedia icon={TbBrandGithubFilled} link="https://github.com/LeonardoRorizBessa" />
          <SocialMedia icon={BiLogoGmail} link="mailto:leonardo.rorizbessa@gmail.com" />
          <SocialMedia icon={FaDiscord} link="https://discord.com/users/129270783905103872" />
          <SocialMedia icon={BiLogoInstagramAlt} link="https://www.instagram.com/leonardororiz/" />
        </ul>
      </div>
    </>
  );
};

export default MenuMobile;
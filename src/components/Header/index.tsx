import { useState } from 'react';
import './index.css'
import { FaDev } from 'react-icons/fa';
import menuOpen from '../../assets/menu.png'
import menuClose from '../../assets/cross.png'
import CVButton from '../CVButton'
import NavLink from '../NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return ( 
    <>
      <header id="header" className="bg-preto flex justify-between items-center px-4 py-3 lg:px-12 lg:py-0 relative">
        <FaDev 
            size={45} 
            className="text-azul cursor-pointer" 
          />
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className={`w-8 lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}
        >
          <img 
            src={menuOpen} 
            alt="Abrir Menu" 
          />
        </button>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className={`w-8 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <img 
            src={menuClose} 
            alt="Fechar Menu" 
          />
        </button>
        <ul className={`text-branco text-sm font-bold flex-col items-center gap-8 absolute top-14 left-0 w-full bg-preto py-6 shadow-lg lg:justify-end lg:static lg:flex lg:flex-row lg:gap-10 lg:bg-transparent lg:shadow-none transition-all duration-500 ${ isMenuOpen ? 'flex' : 'hidden' }`} >
          <NavLink 
            title="Home" 
            href='#'
          />
          <NavLink 
            title="Skills"
            href='#skills'
          />
          <NavLink
            title="Journey"
            href="#journey"
          />
          <li>
            <CVButton 
              title='Download CV'
              fileUrl='/leonardo-resume.pdf'
            />
          </li>
        </ul>
      </header>
    </>
   );
}
 
export default Header;
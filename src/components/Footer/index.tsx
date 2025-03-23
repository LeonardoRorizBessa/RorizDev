import SocialMedia from "../SocialMedia"
import { FaLinkedinIn } from "react-icons/fa"
import { TbBrandGithubFilled } from "react-icons/tb"
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi"

const Footer = () => {
  return ( 
    <>
      <footer className="bg-cinza pb-4 pt-12 flex flex-col justify-center items-center">
        <ul className="flex flex-row gap-4 mb-4">
          <SocialMedia 
            icon={FaLinkedinIn} 
            link='https://www.linkedin.com/in/leonardorbessa/'
            footer={true}
          />
          <SocialMedia 
            icon={TbBrandGithubFilled} 
            link='https://github.com/LeonardoRorizBessa'
            footer={true}
          />
          <SocialMedia 
            icon={BiLogoGmail} 
            link='mailto:leonardo.rorizbessa@gmail.com'
            footer={true}
          />
          <SocialMedia
            icon={BiLogoInstagramAlt}
            link='https://www.instagram.com/leonardororiz/'
            footer={true}
          />
        </ul>
        <p className="text-branco text-xs font-bold">
          © 2025 Leonardo Roriz | All rights reserved.
        </p>
      </footer>
    </>
   );
}
 
export default Footer;
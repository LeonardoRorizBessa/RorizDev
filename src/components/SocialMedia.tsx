import { IconType } from "react-icons"

interface Props {
  icon: IconType;
  link: string;
}

const SocialMedia = ({ 
  icon: Icon, 
  link, 
}: Props) => {
  return ( 
    <>
      <li className="flex flex-col items-center cursor-pointer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon className="text-branco hover:text-azul size-6 transition duration-300" />
        </a>
      </li>
    </>
   );
}
 
export default SocialMedia;
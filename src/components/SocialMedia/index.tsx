import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  link: string;
  footer?: boolean;
}

const SocialMedia = ({ 
  icon: Icon, 
  link, 
  footer = false ,
}: Props) => {
  return ( 
    <>
      <li className="flex flex-col items-center cursor-pointer">
        <a href={link}>
          <Icon 
            className={`size-6 transition duration-300 
              ${footer ? "text-branco hover:text-azul" : "text-preto hover:text-branco"}`
            }
          />
        </a>
      </li>
    </>
   );
}
 
export default SocialMedia;
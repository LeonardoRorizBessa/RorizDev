import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  link: string;
}

const SocialMedia = ({ icon: Icon, link }: Props) => {
  return ( 
    <>
      <li className="flex flex-col items-center cursor-pointer">
        <a href={link}>
          <Icon 
            size={25} 
            className="text-preto hover:text-branco transition duration-300" 
          />
        </a>
      </li>
    </>
   );
}
 
export default SocialMedia;
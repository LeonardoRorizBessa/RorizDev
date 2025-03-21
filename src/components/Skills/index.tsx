import { IconType } from "react-icons";

interface Props {
  icon: IconType;
}

const Skills = ({ icon: Icon }: Props) => {
  return ( 
    <>
      <li className="flex flex-col items-center cursor-pointer">
        <Icon 
          size={35} 
          className="text-branco hover:text-azul transition duration-300" 
        />
      </li>
    </>
  );
}
 
export default Skills;
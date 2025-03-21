import { IconType } from "react-icons";

interface Props {
  icon: IconType;
}

const Skills = ({ icon: Icon }: Props) => {
  return ( 
    <>
      <li className="flex flex-col items-center cursor-pointer">
        <Icon 
          className="text-branco hover:text-azul size-15 my-10 md:size-10 transition duration-300" 
        />
      </li>
    </>
  );
}
 
export default Skills;
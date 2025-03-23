import { IconType } from "react-icons"
import { motion } from "framer-motion"

interface Props {
  icon: IconType;
}

const Skills = ({ 
  icon: Icon,
}: Props) => {
  return ( 
    <>
      <motion.li
        className="flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Icon className="text-branco hover:text-azul size-10 my-4 md:my-10 transition duration-300" />
      </motion.li>
    </>
  );
}
 
export default Skills;
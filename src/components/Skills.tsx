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
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Icon className="text-branco hover:text-azul size-7 lg:size-10 transition duration-300" />
      </motion.li>
    </>
  );
}
 
export default Skills;
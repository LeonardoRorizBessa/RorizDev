import { motion } from "framer-motion"
import Profile from "../components/Profile"
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiTailwindcss, SiBootstrap, SiReact, SiPython, SiJavascript, SiTypescript, SiExpress } from "react-icons/si"
import { AiOutlineAntDesign } from "react-icons/ai"
import Skills from "../components/Skills"
import { PiUserListFill } from "react-icons/pi"

const About = () => {
  return ( 
    <>
      <section className="flex flex-col justify-between text-branco font-bold">
        <h1 className="flex justify-start items-center gap-4 text-3xl mb-12">
          <PiUserListFill size={24} />
          About
        </h1>
      </section>
      <section className="h-full gap-16 md:gap-0 flex flex-col md:flex-row justify-around items-center text-branco">
        <motion.div
          className="md:w-100 lg:w-140"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-lg md:text-2xl text-azul mb-4">Desenvolvedor Front-End</h1>
          <h3 className="font-bold text-base lg:text-base">
            Atualmente atuando como Freelancer e estudante de ADS na Estácio. Estou aprofundando meus conhecimentos em desenvolvimento Full Stack na Digital College. Minhas principais tecnologias incluem React, React Native, Typescript, JavaScript e Tailwind.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Profile 
            name="Leonardo Roriz"
            perfilImage="https://media.licdn.com/dms/image/v2/D4D03AQGTGhbn9vkE7A/profile-displayphoto-shrink_800_800/B4DZW5RIduHIAc-/0/1742570031539?e=1754524800&v=beta&t=wVqwt7fTjonOHMiriy_UrisyGgXk2Ctt3FpOS4m1cB0"
          />
        </motion.div>
      </section>
      <section className="bg-cinza rounded-2xl">
        <ul className="py-14 grid grid-cols-2 md:flex md:flex-row justify-around items-center">
          <Skills icon={FaHtml5} />
          <Skills icon={FaCss3Alt} />
          <Skills icon={SiBootstrap} />
          <Skills icon={SiTailwindcss} />
          <Skills icon={SiReact} />
          <Skills icon={SiTypescript} />
          <Skills icon={SiJavascript} />
          <Skills icon={AiOutlineAntDesign} />
          <Skills icon={FaNodeJs} />
          <Skills icon={SiExpress} />
          <Skills icon={SiPython} />
        </ul>
      </section>
    </>
   );
}
 
export default About;
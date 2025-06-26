import { motion } from "framer-motion"
import Profile from "../components/Profile"
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiTailwindcss, SiBootstrap, SiReact, SiPython, SiJavascript, SiTypescript, SiExpress } from "react-icons/si"
import { AiOutlineAntDesign } from "react-icons/ai"
import Skills from "../components/Skills"
import { PiUserListFill } from "react-icons/pi"
import hero from "../assets/hero.png"
import MenuMobile from "../components/MenuMobile"

const About = () => {
  return ( 
    <>
      <section className="flex flex-col justify-between text-branco">
        <div className="flex justify-between items-center mb-12">
          <h1 className="flex justify-start items-center gap-4 text-3xl font-bold">
            <PiUserListFill size={24} />
            About
          </h1>
          <MenuMobile />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Profile 
              name="Leonardo Roriz"
              age="27"
              job="Front-End"
              graduation="ADS - Estácio"
              location="Fortaleza - CE"
              perfilImage={hero}
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-center lg:items-start text-branco font-bold bg-cinza w-full lg:h-100 rounded-2xl p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[#d19a66] text-xs xl:text-base">&lt;span&gt;</span>
              <span className="text-xs xl:text-base"> Olá, me chamo Leonardo Roriz. </span>
              <span className="text-[#d19a66] text-xs xl:text-base">&lt;/span&gt;</span>
            </div>
            <br />
            <div>
              <span className="text-azul text-xl xl:text-3xl">{`{Desenvolvedor Front-End}`}</span>
            </div>
            <br />
            <div>
              <span className="text-[#d19a66] text-xs xl:text-base">&lt;p&gt; </span>
              <span className="text-xs xl:text-base">
                Atualmente atuando como Freelancer e estudante de Análise e Desenvolvimento de Sistemas na Estácio. Estou aprofundando meus conhecimentos em desenvolvimento Full Stack na Digital College e também trabalho como motorista de aplicativo.<br />
                Minhas principais tecnologias incluem React, React Native, Typescript, JavaScript e Tailwind.
              </span>
              <span className="text-[#d19a66] text-xs xl:text-base"> &lt;/p&gt;</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-cinza rounded-2xl">
        <ul className="flex flex-row justify-around items-center px-2 py-10 lg:py-14">
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
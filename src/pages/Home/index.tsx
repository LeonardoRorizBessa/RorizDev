import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiTailwindcss, SiBootstrap, SiReact, SiPython, SiJavascript, SiTypescript, SiExpress } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa6"
import { TbBrandGithubFilled } from "react-icons/tb"
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi"
import { AiOutlineAntDesign } from "react-icons/ai"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Profile from "../../components/Profile"
import SocialMedia from "../../components/SocialMedia"
import Skills from "../../components/Skills"
import Experience from "../../components/Experience"
import Footer from "../../components/Footer"

const Home = () => {
  return ( 
    <>
      <Header />
      <section id="home" className="bg-preto py-12 md:py-30 px-10 md:px-0 gap-16 md:gap-0 flex flex-col md:flex-row justify-around items-center text-branco">
        <motion.div
          className="md:w-100 lg:w-140"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-lg md:text-2xl text-azul mb-4">Desenvolvedor Front-End</h1>
          <h3 className="font-bold text-base lg:text-base">
            Atualmente estagiário da 704 Apps e estudante de ADS na Estácio. Estou aprofundando meus conhecimentos em desenvolvimento Full Stack na Digital College. Minhas principais tecnologias incluem React, React Native, Typescript, JavaScript e Tailwind.
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
      <section id="socialMedia" className="bg-azul rounded-r-3xl fixed left-0 top-1/2 transform -translate-y-1/2">
        <ul className="flex flex-col gap-4 py-6 px-1.5 md:px-3">
          <SocialMedia 
            icon={FaLinkedinIn} 
            link='https://www.linkedin.com/in/leonardorbessa/'
          />
          <SocialMedia 
            icon={TbBrandGithubFilled} 
            link='https://github.com/LeonardoRorizBessa'
          />
          <SocialMedia 
            icon={BiLogoGmail} 
            link='mailto:leonardo.rorizbessa@gmail.com'
          />
          <SocialMedia
            icon={BiLogoInstagramAlt}
            link='https://www.instagram.com/leonardororiz/'
          />
        </ul>
      </section>
      <section id="skills" className="bg-cinza">
        <ul className="py-4 grid grid-cols-2 md:flex md:flex-row justify-around items-center">
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
      <section id="journey" className="bg-preto px-10 py-20 md:px-20 md:py-30">
        <div className="mb-10 md:mb-16 flex justify-center items-center">
          <h2 className="text-branco font-bold text-xl md:text-3xl">Journey</h2>
        </div>
        <div className="relative w-full">
          <div className="hidden md:flex md:absolute left-1/2 w-1 bg-azul h-full -translate-x-1/2"></div>
          <Experience />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
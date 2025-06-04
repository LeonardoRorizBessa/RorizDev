import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiTailwindcss, SiBootstrap, SiReact, SiPython, SiJavascript, SiTypescript, SiExpress } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa6"
import { TbBrandGithubFilled } from "react-icons/tb"
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi"
import { AiOutlineAntDesign } from "react-icons/ai"
import { motion } from "framer-motion"
import imgBuscadorCEP from "../../assets/imgsProjects/buscador-cep.png"
import imgPapelePersonalizados from "../../assets/imgsProjects/papele-personalizados.png"
import tiamateCoffee from "../../assets/imgsProjects/tiamate-coffee.png"
import tiamateDashboard from "../../assets/imgsProjects/tiamate-dashboard.png"
import Header from "../../components/Header"
import Profile from "../../components/Profile"
import SocialMedia from "../../components/SocialMedia"
import Skills from "../../components/Skills"
import Project from "../../components/Project"
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
      <section id="projects" className="bg-preto px-10 pt-20 md:px-20 md:pt-30">
        <div className="mb-10 md:mb-16 flex justify-center items-center">
          <h2 className="text-branco font-bold text-xl md:text-3xl">Projects</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Project 
            title="Tiamate Coffee"
            description="Projeto Tiamate Coffee, desenvolvido como parte do meu curso na Digital College. O projeto tem como objetivo criar um site para promover e expandir a franquia de uma cafeteria, com foco em proporcionar uma experiência digital intuitiva e atraente."
            image={tiamateCoffee}
            github="https://github.com/LeonardoRorizBessa/Tiamate"
            vercel="https://tiamate.vercel.app/"
          />
          <Project 
            title="Tiamate Dashboard"
            description="Projeto Tiamate Dashboard, desenvolvido como parte do meu curso na Digital College."
            image={tiamateDashboard}
            github="https://github.com/LeonardoRorizBessa/projeto-tiamate-dashboard"
            vercel="https://projeto-tiamate-dashboard.vercel.app/"
          />
          <Project 
            title="Papelê Personalizados"
            description="Projeto desenvolvido como freelancer, inspirado na ideia do Linktree: uma página única e responsiva para reunir e divulgar múltiplos links pessoais ou profissionais."
            image={imgPapelePersonalizados}
            github="https://github.com/LeonardoRorizBessa/Papele_Personalizados"
            vercel="https://papelepersonalizados.vercel.app/"
          />
          <Project 
            title="Buscador CEP"
            description="O Buscador CEP é uma aplicação simples e funcional desenvolvida em React com TypeScript, que utiliza a API ViaCEP para buscar informações de endereço a partir de um CEP informado pelo usuário."
            image={imgBuscadorCEP}
            github="https://github.com/LeonardoRorizBessa/Buscador-CEP"
            vercel="https://buscador-cep-sandy.vercel.app/"
          />
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
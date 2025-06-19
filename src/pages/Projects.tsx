import { motion } from "framer-motion"
import Project from "../components/Project"
import imgBuscadorCEP from "../assets/imgsProjects/buscador-cep.png"
import imgPapelePersonalizados from "../assets/imgsProjects/papele-personalizados.png"
import tiamateCoffee from "../assets/imgsProjects/tiamate-coffee.png"
import tiamateDashboard from "../assets/imgsProjects/tiamate-dashboard.png"
import { FaFolderOpen } from "react-icons/fa"

const Projects = () => {
  return ( 
    <>
      <section className="flex flex-col justify-between text-branco font-bold">
        <h1 className="flex justify-start items-center gap-4 text-3xl mb-12">
          <FaFolderOpen size={24} />
          Projects
        </h1>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.ul>
      </section>
    </>
   );
}
 
export default Projects;
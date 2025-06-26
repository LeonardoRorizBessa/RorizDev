import { FaHouse } from "react-icons/fa6"
import { motion } from "framer-motion"
import MenuMobile from "../components/MenuMobile"

const Home = () => {
  return ( 
    <>
      <section className="flex flex-col justify-between text-branco font-bold">
        <div className="flex items-center justify-between mb-12">
          <h1 className="flex items-center gap-4 text-3xl">
            <FaHouse size={24} />
            Home
          </h1>
          <MenuMobile />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
              className="grid grid-cols-2 gap-4 w-full *:bg-cinza *:h-40 *:w-full *:rounded-2xl *:flex *:flex-col *:justify-center *:items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="hover:text-azul transition-colors duration-300">
                <h5 className="text-xl xl:text-3xl font-bold mb-2">Front-End</h5>
                <p className="text-xs">Desenvolvedor</p>
              </div>
              <div className="hover:text-azul transition-colors duration-300">
                <h5 className="text-xl xl:text-3xl font-bold mb-2">1+</h5>
                <p className="text-xs">Anos de experiência</p>
              </div>
              <div className="hover:text-azul transition-colors duration-300">
                <h5 className="text-xl xl:text-3xl font-bold mb-2">5+</h5>
                <p className="text-xs">Projetos concluídos</p>
              </div>
              <div className="hover:text-azul transition-colors duration-300">
                <h5 className="text-xl xl:text-3xl font-bold mb-2">2+</h5>
                <p className="text-xs">Clientes satisfeitos</p>
              </div>
            </motion.div>
            <motion.div
              className="w-full *:flex *:flex-col *:justify-around *:items-start"
              initial={{ opacity: 0, x: +50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-cinza h-full w-full rounded-2xl p-6 *:flex *:text-">
                <div className="gap-2">
                  <p><span className="text-azul">Front-End: </span>React, React Native, TS, JS, HTML, CSS</p>
                </div>
                <div className="gap-2">
                  <p><span className="text-azul">Back-End: </span>Node JS, Express, Python</p>
                </div>
                <div className="gap-2">
                  <p><span className="text-azul">Databases: </span>MySQL, Supabase</p>
                </div>
                <div className="gap-2">
                  <p><span className="text-azul">Tools & Platforms: </span>Git, Github, Vercel, Figma</p>
                </div>
                <div className="gap-2">
                  <p><span className="text-azul">Others: </span>RESTful APIs, SCRUM</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="bg-cinza h-60 w-full rounded-2xl flex justify-center items-center"
            initial={{ opacity: 0, y: +50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="relative py-2 px-6 overflow-hidden z-20 font-bold text-md text-white hover:text-preto cursor-pointer transition-all duration-500 group">
              <a href="/Leonardo-Roriz-CV.pdf" download>
                Download CV
                <span className="absolute h-1 w-full bg-azul rounded-t-full bottom-0 left-0 transition-all duration-500 group-hover:h-[200%] z-[-1]"></span>
              </a>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
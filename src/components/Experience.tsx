import data from "../api/api.json"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <>
      {data.Experiences.map((DATA, index) => (
        <motion.div
          key={index}
          className="w-[full] p-6 rounded-2xl bg-cinza"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex row items-center">
            <img
              src={DATA.image}
              alt={DATA.title}
              className="h-14 w-14 rounded-full"
            />
            <h3 className="text-branco text-lg font-bold ml-4">{DATA.title}</h3>
          </div>
          <p className="text-azul text-base font-bold mt-4">{DATA.position}</p>
          <p className="text-sm text-branco mt-2">{DATA.description}</p>
          <div className="flex flex-wrap text-sm gap-2 mt-2">
            {DATA.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-azul px-2 py-1 rounded-md text-preto font-bold text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-2">{DATA.date}</p>
        </motion.div>
      ))}
    </>
  )
}

export default Experience;

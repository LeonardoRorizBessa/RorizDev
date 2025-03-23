import './index.css'
import { motion } from "framer-motion"

const Experience = () => {
  const DATA = [
    { 
      title: "704 Apps", 
      image: "https://media.licdn.com/dms/image/v2/C4E0BAQH18DYYToJEaw/company-logo_200_200/company-logo_200_200/0/1644253065456/fabrica704_logo?e=1748476800&v=beta&t=FPiN9M0ek6KglZjgNFmZ1suPz1FH-vS1iKwQb9GS7MU",
      position: "Desenvolvedor Front-End",
      description: "Desenvolvimento e manutenção de aplicações em React JS e React Native. Aplicação de Typescript para melhoria da tipagem e escalabilidade do código. Implementação de interfaces responsivas com Tailwind CSS. Colaboração em equipe utilizando Scrum e Git (GitHub) para versionamento de código. Integração de APIs RESTful e consumo de dados JSON.",
      technologies: ["React", "React Native", "Javascript", "Typescript", "Tailwind", "SCRUM", "Git", "GitHub", "APIs"],
      date: "Fev 2025 - atual",
    },
    { 
      title: "Sentinela Tecnologia",
      image: "https://cdn-icons-png.flaticon.com/512/5988/5988625.png",
      position: "Desenvolvedor Front-End",
      description: "Desenvolvimento de features em JavaScript e React JS para aplicações web. Ajustes e otimização de UI utilizando CSS e Tailwind. Integração de APIs RESTful e consumo de dados JSON.",
      technologies: ["React", "Javascript", "Tailwind", "APIs"],
      date: "Jan 2025 - Fev 2025",
    },
    {
      title: "Digital College",
      image: "https://media.licdn.com/dms/image/v2/C4E0BAQGOBx_Tgf4xFA/company-logo_200_200/company-logo_200_200/0/1656456553386/digitalcollegebr_logo?e=1748476800&v=beta&t=ULgjvrHE1xsIrFwtkSK4hBdgcNEw_BIDhi1YG50EmtA",
      position: "Curso - Desenvolvimento Full Stack",
      description: "No curso da Digital College, aprendi a criar e estilizar páginas web usando HTML e CSS, além de explorar bibliotecas para otimizar o trabalho. Também me aprofundei em JavaScript e DOM para criar páginas interativas. Aprendi a usar React.JS para desenvolver interfaces dinâmicas e a trabalhar com APIs e NPM. No backend, estudei Node.JS e Express.JS, além de aprender sobre integração com bancos de dados. Também aprendi a implementar testes automatizados com Cypress para garantir a qualidade do código.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM", "React", "APIs", "NPM", "Node", "Express", "Banco de Dados", "Cypress"],
      date: "Set 2024 - atual",
    },
    {
      title: "Estácio de Sá",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQFXVD-G0bC6og/company-logo_200_200/company-logo_200_200/0/1698864015822/estacio_logo?e=1748476800&v=beta&t=E99aZCz0UsKyY7HJMDFAmH6osmDjIOd05CyI0aCZaA0",
      position: "Faculdade - Análise e Desenvolvimento de Sistemas",
      description: "No curso de Análise e Desenvolvimento de Sistemas da Estácio, adquiri uma sólida base em programação, desenvolvimento de sistemas e gestão de banco de dados. O curso abordou técnicas de desenvolvimento para diferentes plataformas, com ênfase em tecnologias como Java, Python, C, C++, HTML, CSS, Javascript, Banco de Dados SQL, Algoritmos, além de práticas de engenharia de software e metodologias ágeis. Aprendi a criar soluções eficientes e seguras, integrando teoria e prática para preparar projetos de software de qualidade.",
      technologies: ["Java", "Python", "C", "C++", "HTML", "CSS", "Javascript", "SQL"],
      date: "Ago 2023 - atual",
    },
    {
      title: "ILAC - English Program",
      image: "https://media.licdn.com/dms/image/v2/D4E0BAQFloaXIKYL6kw/company-logo_200_200/company-logo_200_200/0/1719941469307/ilac_logo?e=1748476800&v=beta&t=mJRrxL1NIijvx-k29vqVZ8E9bFZJC5Mv2zvFreqMmDU",
      position: "Curso - Intercâmbio cultural",
      description: "Intercâmbio de 6 meses em Vancouver no Canadá, com foco em comunicação avançada, escrita técnica e conversação fluente. Imersão em ambiente acadêmico e profissional, aprimorando habilidades de networking e comunicação internacional.",
      technologies: ["Inglês", "Comunicação", "Networking", "Escrita Técnica"],
      date: "Abr 2019 - Out 2019",
    },
    { 
      title: "Uber",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/company-logo_200_200/0/1630552741617/uber_com_logo?e=1748476800&v=beta&t=dDs-hHagmvS6nIlFml--hl-cjZuUG9zX5NSU5NATouY",
      position: "Motorista de aplicativo",
      description: "Com mais de 7 anos como motorista parceiro da Uber, desenvolvi habilidades essenciais como comunicação, adaptabilidade, responsabilidade, organização e resiliência. Essas competências me permitiram otimizar minha rotina, lidar com desafios diários e manter o foco em resultados, habilidades que também aplico no desenvolvimento de software.",
      technologies: ["Comunicação", "Adaptabilidade", "Responsabilidade", "Organização",  "Resiliência"],
      date: "Nov 2017 - atual",
    },
  ];

  return (
    <>
      {DATA.map((DATA, index) => (
        <motion.div
          key={index}
          className={`relative md:w-[47%] p-6 mb-8 md:mb-0 rounded-2xl shadow-lg bg-cinza ${
            index % 2 === 0 ? "left-timeline" : "right-timeline"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
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

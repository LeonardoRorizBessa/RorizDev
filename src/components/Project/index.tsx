import { TbBrandGithubFilled } from "react-icons/tb";
import { SiVercel } from "react-icons/si";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  github: string;
  vercel: string;
}

const Project = ({ title, image, description, github, vercel }: ProjectProps) => {
  return (
    <li className="relative group rounded-2xl overflow-hidden shadow-lg">
      <img
        className="w-full h-60 object-cover rounded-2xl border-cinza border-4 transition duration-300 group-hover:brightness-50"
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 flex flex-col justify-between items-start opacity-0 group-hover:opacity-100 transition duration-300 bg-cinza/80 p-4">
        <div>
          <h3 className="text-branco font-bold text-lg mb-2">{title}</h3>
          <p className="text-branco text-sm max-w-full">{description}</p>
        </div>
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <TbBrandGithubFilled className="text-xl text-branco hover:text-azul transition" />
          </a>
          <a href={vercel} target="_blank" rel="noopener noreferrer">
            <SiVercel className="text-xl text-branco hover:text-azul transition" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
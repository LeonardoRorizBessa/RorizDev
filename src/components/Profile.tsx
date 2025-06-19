import { FaLocationDot } from "react-icons/fa6"

interface Props {
  name: string;
  perfilImage: string;
}

const Profile = ({
  name, 
  perfilImage,
}: Props) => {
  return ( 
    <>
      <div className="bg-cinza text-branco p-6 lg:p-10 flex flex-col justify-center items-center rounded-2xl">
        <img 
          src={perfilImage} 
          alt="Foto de perfil" 
          className="w-25 lg:w-40 h-25 lg:h-40 rounded-full" 
        />
        <h1 className="text-azul text-lg md:text-xl font-bold mt-4 md:mt-10">{name}</h1>
        <p className="text-base mt-2 font-semibold">27 anos</p>
        <div className="flex flex-row justify-center items-center gap-2 mt-2">
          <FaLocationDot 
            size={16}
          />
          <p className="text-base font-semibold">Fortaleza - CE</p>
        </div>
        <button className="relative mt-3 py-2 px-6 overflow-hidden z-20 font-bold text-md text-white hover:text-preto cursor-pointer transition-all duration-500 group">
          <a href="/Leonardo-Bessa_CV.pdf" download>
            Download CV
            <span className="absolute h-1 w-full bg-azul rounded-t-full bottom-0 left-0 transition-all duration-500 group-hover:h-[200%] z-[-1]"></span>
          </a>
        </button>
      </div>
    </>
   );
}
 
export default Profile;
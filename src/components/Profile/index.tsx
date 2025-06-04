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
      </div>
    </>
   );
}
 
export default Profile;
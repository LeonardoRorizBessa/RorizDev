import { FaCode } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { GiGraduateCap } from "react-icons/gi"

interface Props {
  name: string;
  age: string;
  job: string;
  graduation: string;
  location: string;
  perfilImage: string;
}

const Profile = ({
  name, 
  age,
  job,
  graduation,
  location,
  perfilImage,
}: Props) => {
  return ( 
    <>
      <div className="relative text-branco flex flex-col lg:h-100 w-full lg:w-80 rounded-2xl">
        <img 
          src={perfilImage} 
          alt="Foto de perfil" 
          className="h-full w-full rounded-2xl" 
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl" />
        <div className="absolute flex flex-col justify-end h-full p-2">
          <h1 className="text-xl font-bold">{name} {age}</h1>
          <div className="flex flex-row items-center gap-2">
            <FaCode
              size={12}
            />
            <p className="text-sm">{job}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <GiGraduateCap
              size={12}
            />
            <p className="text-sm">{graduation}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaLocationDot 
              size={12}
            />
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Profile;
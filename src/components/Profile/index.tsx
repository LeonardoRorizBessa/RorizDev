interface Props {
  name: string;
  perfilImage: string;
}

const Profile = ({name, perfilImage}: Props) => {
  return ( 
    <>
      <div className="bg-cinza p-6 lg:p-10 flex flex-col justify-center items-center text-azul rounded-xl">
        <img 
          src={perfilImage} 
          alt="Foto de perfil" 
          className="w-25 lg:w-40 h-25 lg:h-40 rounded-full" 
        />
        <h1 className="text-lg md:text-xl font-bold mt-4 md:mt-10">{name}</h1>
      </div>
    </>
   );
}
 
export default Profile;
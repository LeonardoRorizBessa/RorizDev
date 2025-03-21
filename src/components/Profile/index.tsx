interface Props {
  name: string;
  perfilImage: string;
}

const Profile = ({name, perfilImage}: Props) => {
  return ( 
    <>
      <div className="bg-cinza p-10 flex flex-col justify-center items-center text-azul rounded-xl">
        <img 
          src={perfilImage} 
          alt="Foto de perfil" 
          className="w-40 h-40 rounded-full" 
        />
        <h1 className="text-xl font-bold mt-10">{name}</h1>
      </div>
    </>
   );
}
 
export default Profile;
import { FaHouse } from "react-icons/fa6"

const Home = () => {
  return ( 
    <>
      <section className="flex flex-col justify-between text-branco font-bold">
        <h1 className="flex justify-start items-center gap-4 text-3xl mb-12">
          <FaHouse size={24} />
          Home
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-6">
            <div className="grid grid-cols-2 gap-4 w-full *:bg-cinza *:h-40 *:w-full *:rounded-2xl *:flex *:flex-col *:justify-center *:items-center">
              <div>
                <h5 className="text-3xl font-bold mb-2">10+</h5>
                <p className="text-xs">Projetos concluídos</p>
              </div>
              <div>
                <h5 className="text-3xl font-bold mb-2">Front-End</h5>
                <p className="text-xs">Desenvolvedor</p>
              </div>
              <div>
                <h5 className="text-3xl font-bold mb-2">1+</h5>
                <p className="text-xs">Anos de experiência</p>
              </div>
              <div>
                <h5 className="text-3xl font-bold mb-2">4+</h5>
                <p className="text-xs">Clientes satisfeitos</p>
              </div>
            </div>
            <div className="w-full *:flex *:flex-col *:justify-center *:items-center">
              <div className="bg-cinza h-full w-full rounded-2xl">
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div className="bg-cinza h-60 w-full rounded-2xl flex justify-center items-center">
            <h1>1</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
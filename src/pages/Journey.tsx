import { GiStairsGoal } from "react-icons/gi"
import Experience from "../components/Experience"

const Journey = () => {
  return ( 
    <>
      <section className="flex flex-col justify-between text-branco font-bold">
        <h1 className="flex justify-start items-center gap-4 text-3xl mb-12">
          <GiStairsGoal size={24}/>
          Journey
        </h1>
        <div className="flex relative w-full">
          <div className="hidden md:flex md:absolute w-1 bg-azul h-full -translate-x-1/2 rounded-full"></div>
          <div className="flex flex-col gap-4 md:gap-6 md:ml-6">
            <Experience />
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Journey;
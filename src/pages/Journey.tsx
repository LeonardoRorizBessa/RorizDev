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
        <div className="relative w-full">
          <div className="hidden md:flex md:absolute left-1/2 w-1 bg-azul h-full -translate-x-1/2"></div>
          <Experience />
        </div>
      </section>
    </>
   );
}
 
export default Journey;
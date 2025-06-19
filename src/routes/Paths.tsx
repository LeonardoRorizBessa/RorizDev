import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Journey from "../pages/Journey"
import About from "../pages/About"

const Paths = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default Paths;
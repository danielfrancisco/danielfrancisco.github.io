import ReactDOM from "react-dom";
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Contact from "./contact"
import About from "./about";
import Skills from "./skills";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <HashRouter>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </HashRouter>
  </>,
  rootElement
);

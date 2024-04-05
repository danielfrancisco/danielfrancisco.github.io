import ReactDOM from "react-dom";
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact"
import About from "./About";
import Drop from "./Drop";
import Skills from "./Skills";

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
        <Route path="/drop" element={<Drop/>}></Route>
      </Routes>
    </HashRouter>
  </>,
  rootElement
);

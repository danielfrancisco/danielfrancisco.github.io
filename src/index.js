import ReactDOM from "react-dom";
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./app/pages/home";
import Portfolio from "./app/pages/portfolio";
import Contact from "./app/pages/contact"
import About from "./app/pages/about";
import Drop from "./app/components/drop";
import Skills from "./app/pages/skills";

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

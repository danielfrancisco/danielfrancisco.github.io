import "./styless/home.scss"
import { Link } from "react-router-dom";
import Mobilenav from "./mobilenav";
import Nav from "./nav";

export default function Home() {
  
  return (
      <>
      
       <div id="fondo">
          <Nav/>
          <Mobilenav current="/"/>  
          
            <div id="con">
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Full stack developer</div>
            <div id="titulo">Ux Designer</div>
            <Link to={"/contact"}><button>Contact</button></Link>
        </div>
          
        </div>
      </>
    );

  }

  



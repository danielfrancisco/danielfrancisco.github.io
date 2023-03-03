import Skills from "./skills"
import Home from "./home"
import { useState,useEffect } from "react"
import Portfolio from "./portfolio";
import About from "./about";
import Drop from "./drop";
import {FaBars} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact(props){
    const [conte,sconte] = useState(props.cont)
    const[page,spage] = useState("contact")

   
    useEffect(()=>{
      if(window.innerWidth<=600){
        document.getElementById("body").style.backgroundColor= "white";
      }
      else{
        document.getElementById("body").style.backgroundColor= "#E7E7E7";
      }
     },[window.innerWidth])

     if(conte==="about"){
      
      return <About cont={conte}/>
    }

    if(conte==="drop"){
      return <Drop cont={conte} page={page} pre="1"/>
      
    }

    if(conte==="portfolio"){
         
     return <Portfolio cont={conte}/>
   }

   if(conte==="home"){
         
    return <Home cont={conte}/>
  }

  if(conte==="skills"){
         
    return <Skills cont={conte}/>
  }

    return(
        
         <>
          <div id="fondo">
          <div id="nav">
                <Link to="/danielc" id="home">
                 
                Home</Link>

                <Link to={"/skills"} className="links">Skills</Link>

               <Link to={"/portfolio"} className="links" onClick={()=>{
                 sconte("portfolio")
                 document.getElementById("body").style.backgroundColor= "white";
                }}> 
                Projects</Link>

                <Link to="/about" className="links">About</Link>

              </div>

              
              <div id="danielpa">
              <Link to={"/danielc"}><div id="daniel">
                Home
              </div></Link>
              <FaBars id="bars" onClick={
                ()=>{
                  sconte("drop")
                }
              }/>
            </div>
             
          <div id="condata">
            <div>
              <p>Phone number</p>
              <p id="number">+593 980615630</p><br/>
            </div>

            <div>
             <p>Email</p>
             <p  id="email">danielfrancisco99@outlook.com</p><br/>
            </div>

            <div>
             <p>Location</p>
             <p  id="loc">Guayaquil-Ecuador</p>
            </div>

          </div>

          </div>

          </>
        );
}
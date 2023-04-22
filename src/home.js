import { useEffect, useState } from "react";
import Skills from "./skills";
import "./styless/home.scss"
import Portfolio from "./portfolio";
import Contact from "./contact"
import About from "./about";
import {FaBars} from "react-icons/fa";
import Drop from "./drop";
import { Link } from "react-router-dom";

export default function Home() {
   const [conte,sconte] = useState("home")
   const[page,spage] = useState("home")
   
   window.onscroll = function(e) {
      
    console.log(this.oldScroll,this.scrollY);
    if(this.scrollY>this.oldScroll){
      document.getElementById("danielpa").style.top = "-60vh";
    }

    if(this.scrollY<this.oldScroll){
      document.getElementById("danielpa").style.top = "-3vh";
    }
    this.oldScroll = this.scrollY;
    
  }

   useEffect(()=>{
    document.getElementById("nav").style.top = "16vh";
   },[])

   function deskcolor(){
     if(window.innerWidth>600 && conte==="portfolio"===false){
      document.getElementById("body").style.backgroundColor= "#E7E7E7";
     }
     else{
      document.getElementById("body").style.backgroundColor= "white";
     }
   }

   window.addEventListener("resize",deskcolor)
   
   if(conte==="portfolio"){
    document.getElementById("body").style.backgroundColor= "white";
    return <Portfolio cont={conte}/>
    
  }

  if(conte==="about"){
    return <About cont={conte}/>
    
  }

  if(conte==="drop"){
    return <Drop cont={conte} page={page} pre = "1"/>
    
  }

  if(conte==="skills"){
    if(window.innerWidth<=600){
      document.getElementById("body").style.backgroundColor= "white";
      return <Skills con={conte}/>
    }

    else{
      document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("body").style.backgroundColor= "#E7E7E7";
      return <Skills con={conte}/>
    }
    
    
  }

  if(conte==="contact"){
    return <Contact cont={conte}/>
  }

  

   if(conte==="home"){
    return (
      <>
       <div id="fondo">
              <div id="nav">
                <Link to="/" id="home">
                 
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
              
              <FaBars id="bars" onClick={
                ()=>{
                  sconte("drop")
                  
                }
              }/>
            </div>
          
  
          <div id="con">
            <div id="nombre">Daniel Campoverde</div>
            <div id="titulo">Full stack developer</div>
            <div id="titulo">Designer</div>
            <Link to={"/contact"}><button onClick={()=>{
              sconte("contact")
            }}>Contact</button></Link>
          </div>
          
        </div>
      </>
    );

  }

  
}


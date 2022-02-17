import "./styless/drop.scss"
import {FaBars, FaBorderStyle} from "react-icons/fa";
import { useState,useEffect } from "react";
import Home from "./home";
import Skills from "./skills";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";

export default function Drop(props){
    const [conte,sconte] = useState(props.cont)
    const [press,spress] = useState(parseInt( props.pre))

   function ispress(){
        if(press===0){
            spress(1)
        }
        else{
            spress(0)
        }
    }

    if(conte==="skills"){
        return <Skills con={conte}/>
    }

    if(conte==="contact"){
        return <Contact cont={conte}/>
      }

    if(conte==="home"){
        return <Home con={conte}/>
    }

    if(conte==="portfolio"){
        return <Portfolio cont={conte}/>
    }

    if(conte==="about"){
        return <About con={conte}/>
    }
        

    return(
        <>
          <FaBars id="barspres" onClick={
              ()=>{
                ispress()
                if(press===1){
                    sconte(props.page)
                }
              }
            }/>
          <div id="dropcon">
            <p onClick={()=>{
                sconte("home")
            }}>Daniel</p> 

            <p onClick={()=>{
                sconte("skills")
            }}>Skills</p> 
            <p onClick={()=>{
                sconte("portfolio")
                
            }}>Projects</p>
            <p onClick={()=>{
                sconte("about")
            }}>About</p>
          </div>
        </>
    )
}
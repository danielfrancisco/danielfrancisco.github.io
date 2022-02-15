import Home from "./home"
import { useState } from "react";
import Portfolio from "./portfolio";
import About from "./about";
import {FaBars} from "react-icons/fa";
import Drop from "./drop";

export default function Skills(props){
    const[cont,scont] = useState(props.cont)
    const[page,spage] = useState("skills")
    
    if(cont==="about"){
      
      return <About cont={cont}/>
    }
     
     if(cont==="home"){
      
        return <Home cont={cont}/>
      }

      if(cont==="porfolio"){
        document.getElementById("body").style.backgroundColor= "white";
        return <Portfolio cont={cont}/>
      }

      if(cont==="drop"){
        return <Drop cont={cont} page={page} pre="1"/>
        
      }

      return (
          <>
            <div id="fondo">
              <div id="nav">
                <p onClick={()=>{
                 scont("home")
                 
                }}>Home</p>

                <p className="rnav" onClick={()=>{
                   scont("skills")
                }}>Skills</p>

                <p className="rnav" onClick={()=>{
                 scont("porfolio")
                 
                }}
                >Projects</p>
                <p className="rnav" onClick={()=>{
                 scont("about")
                 
                }}>About</p>
              </div>

            <div>
              
            <div id="daniel" onClick={
              ()=>{
                scont("home")
              }
            }>Daniel</div>
            <FaBars id="bars" onClick={
              ()=>{
                scont("drop")

              }
            }/>
          </div>
           

              <div id="ui"><br/>Ui/Ux<br/>Designing
                     <div id="uicon"><br/> &nbsp; &nbsp;Ux and Ui desing combines<br/>
                     &nbsp; &nbsp;research, product development<br/> &nbsp; &nbsp;and strategy  to create
                     meanigful<br/> &nbsp; &nbsp;and great experiences to users
                     </div>
              </div>
              
              <div id="front"><br/>Front-end<br/> Development
                 <div id="frontcon"> <br/>&nbsp; &nbsp;Html<br/> &nbsp; &nbsp;Css and Sass 
                 <br/> &nbsp; &nbsp;Javascript<br/> &nbsp; &nbsp;React</div>
              </div>

              <div id="res"><br/>Responsive<br/> Web desing
                <div id="rescon"><br/> &nbsp; &nbsp;Your site will look&nbsp;
                good in all devices<br/> 
                      </div>
              </div>

            </div>
          </>
        );
    
}
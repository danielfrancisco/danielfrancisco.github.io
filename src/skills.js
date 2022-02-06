import Home from "./home"
import { useState } from "react";
import { useEffect } from "react";
import Portfolio from "./portfolio";
import "./styless/home.scss"
import "./styless/skills.scss"


export default function Skills(props){
    const[cont,scont] = useState(props.cont)
    
     
     if(cont==="home"){
        
        return <Home cont={cont}/>
      }

      if(cont==="porfolio"){
        
        return <Portfolio cont={cont}/>
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
                >Portfolio</p>
                <p className="rnav">About</p>
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
                 
              </div>

            </div>
          </>
        );
    
}
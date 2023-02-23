import Home from "./home"
import { useState } from "react";
import Portfolio from "./portfolio";
import About from "./about";
import { useEffect } from "react";
import {FaBars} from "react-icons/fa";
import Drop from "./drop";
import { Link } from "react-router-dom";

export default function Skills(props){
    const[cont,scont] = useState(props.cont)
    const[page,spage] = useState("skills")

    
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
                <Link to="/danielc" id="home">
                 
                Home</Link>

                <Link to={"/skills"} className="links">Skills</Link>

               <Link to={"/portfolio"} className="links" onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "white";
                }}> 
                Projects</Link>

                <Link to="/about" className="links">About</Link>

              </div>

              <div id="danielpa">
              <Link to={"/danielc"}><div id="daniel">
                Daniel
              </div></Link>
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
                <div id="rescon"><br/> &nbsp; &nbsp;Your site will look
                good in <br/>  &nbsp;  &nbsp;all devices
                </div>
              </div>

            </div>
          </>
        );
    
}
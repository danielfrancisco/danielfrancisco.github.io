import Home from "./home"
import { useState } from "react";
import Portfolio from "./portfolio";
import About from "./about";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Drop from "./drop";
import { Link } from "react-router-dom";

export default function Skills(props){
    const[cont,scont] = useState(props.cont)
    const[page,spage] = useState("skills")

    
    window.onscroll = function(e) {
      
      
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
                <Link to="/" id="home">
                 
                Home</Link>

                <Link to={"/skills"} className="links">Skills</Link>

               <Link to={"/portfolio"} className="links" onClick={()=>{
                 
                 document.getElementById("body").style.backgroundColor= "white";
                }}> 
                Work</Link>

                <Link to="/about" className="links">About</Link>

              </div>

              <div id="danielpa">
              <Link to={"/"}><div id="daniel">
                Home
              </div></Link>
              <FontAwesomeIcon icon={faBars} id="bars" onClick={
                ()=>{
                  scont("drop")
                  
                }
              }/>
            </div>
           

              <div id="ui"><br/>Ui/Ux<br/>Designing
                     <div id="uicon"><br/> &nbsp; &nbsp;Ux and Ui design combines<br/>
                     &nbsp; &nbsp;research, product development<br/> &nbsp; &nbsp;and strategy  to create
                     great <br/> &nbsp; &nbsp;and meaningful experiences 
                     </div>
              </div>
              
              <div id="front"><br/>Front-end  and Back-end Development<br/>
                 <div id="frontcon"> <br/>&nbsp; &nbsp;By working on both sides of the<br/> &nbsp; &nbsp;stack, you have
                 a holistic 
                 <br/> &nbsp; &nbsp;understanding of web  <br/> &nbsp; &nbsp;development, ensuring that
                 <br/> &nbsp; &nbsp;everything works harmoniously<br/> &nbsp; &nbsp;<br/> &nbsp; &nbsp;</div>
                 
              </div>

              <div id="res"><br/>Responsive<br/> Web design
                <div id="rescon"><br/> &nbsp; &nbsp;Your site will look
                good on <br/>  &nbsp;  &nbsp;any device
                </div>
              </div>

            </div>
          </>
        );
    
}
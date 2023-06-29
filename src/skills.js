import { useState } from "react";
import Drop from "./drop";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Mobilenav from "./mobilenav"

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


  return (
          <>
            <div id="fondo">
             <Nav/>
             <Mobilenav current={"/skills"}/>
             
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
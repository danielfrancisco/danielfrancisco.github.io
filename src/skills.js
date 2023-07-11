import Nav from "./nav";
import Mobilenav from "./mobilenav"

export default function Skills(props){
    
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
                <div id="uicon"><br/> 
                    <div style={{marginLeft:"1vw" , marginRight: "1vw"}}>Ux and Ui design combines
                     research, product development and strategy  to create
                     great and meaningful experiences
                    </div>
                </div>
              </div>
              
              <div id="front"><br/>Front-end  and Back-end Development<br/>
                 <div id="frontcon"> <br/>
                 <div style={{marginLeft:"1vw", marginRight: "1vw"}}>
                 Working on both sides of the stack, allows for
                 a holistic understanding of web development, ensuring that
                 everything works harmoniously<br/> &nbsp; &nbsp;<br/> &nbsp; &nbsp;
                 </div>
                 </div>
                 
              </div>
               
              <div id="res"><br/>Responsive<br/> Web design
                <div id="rescon"><br/>
                 <div style={{marginLeft:"1vw", marginRight: "1vw"}}> 
                 Your site will look
                 good on any device
                 </div>
                </div>
              </div>

            </div>
          </>
        );
    
}
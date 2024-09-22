import { useEffect } from "react";
import "../../styless/pages/_skills.scss"
import ContentContainer from "../components/ContentContainer";
import { getPagePath } from "../functions/getPath";

export default function Skills(){
  
  useEffect(()=>{
    localStorage.setItem('path', getPagePath())
  },[])

return (
    <>
          
          <ContentContainer content={
        <>
         <div id="ui"><br/>Ui/Ux<br/>Designing
                <div id="uicon"><br/> 
                    <div style={{marginLeft:"1vw" , marginRight: "1vw"}}>Ux and Ui design combines
                     research, product development and strategy  to create
                     great and meaningful experiences
                    </div>
                </div>
              </div>
              
              <div id="front"><br/>Full stack <br/> development<br/>
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
                 Your website adapts  intelligently  to every device
                 </div>
                </div>
              </div>

        </>
      }/> 
    </>
        );
    
}
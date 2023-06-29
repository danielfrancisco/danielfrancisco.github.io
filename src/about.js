import "./styless/about.scss";
import Nav from "./nav";
import Mobilenav
 from "./mobilenav";
export default function About(props){
    
    return(
        <>
          <div id="fondo">
          <Nav/>
          <Mobilenav current={"/about"}/>

           <div id="abcon">
             <h2 id="heading">Cutting edge is my comfort zone</h2>
             <p id="aboutmede">
              I'm a full stack developer with more than 4 years of experience<br/>
              with a lot passion for designing, innovation and problem solving. <br/>
              I like to deliver immersive and intuitive user experiences.
              </p>
              <p id="aboutmemo">
              I'm a full stack developer with more than 4 years of experience.
              I have a lot passion for designing, innovation and problem solving. I like to deliver  
              immersive and intuitive user experiences.
              </p>
            </div> 

        </div>
            
        </>
    )
}
import "./styless/home.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSun,  FiMoon } from "react-icons/fi";

export default function Nav(){
    const [dark, setDark] = useState({isActive: true, styles:{
        light:{color: 'navy', navColor:'navy'},
        dark: {color: 'black', navColor:'black'},
        
     }})
     function setDarkTheme(){
        
        if(dark.isActive===false){
          /*for(let i in dark.styles.light){
              
             document.body.style.setProperty(`--${i}`, String(dark.styles.light[i]))
          }*/
          setDark({...dark,isActive:true})
        }else{
          /*for(let j in dark.styles.dark){
            
          document.body.style.setProperty(`--${j}`, dark.styles.dark[j])
          }*/
          setDark({...dark,isActive:false})
        }
        
       }

    useEffect(()=>{
        document.getElementById("nav").style.top = "16vh";
       },[])

    return(
        <>
         <div id="nav">
         
              <Link to="/" id="home">
                 
                Home</Link>

                <Link to={"/skills"} className="links">Services</Link>

               <Link to={"/portfolio"} className="links">Previews</Link>
               
                <Link to="/about" className="links">About</Link>

                <div id='icon' onClick={setDarkTheme}>
                {dark.isActive ? < FiSun color="white" size='20px'/>: < FiMoon color="white" size='20px'/>     }  
                </div>

          </div>

          
        </>
    )
}
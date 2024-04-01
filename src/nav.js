import "./styless/home.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSun,  FiMoon } from "react-icons/fi";

export default function Nav(){
    const [dark, setDark] = useState({isActive: true, styles:{
      light:{fondoColor: 'white', 
        navColor: 'white',
        linksColor: 'black',
        nombreColor: 'black',
        homeColor: 'black',
        bodyColor: '#E7E7E7',
        tituloColor:  '#484848',
        ContactButtonColor: 'black',
        ContactButtonFontColor: 'white',
        ContactButtonHoverColor: '#30b069',
        ContactButtonHoverFontColor: 'black',
        linkHoverColor: '#787878',
      },
       
      dark: { fondoColor: '#1A202C', 
               navColor: '#1A202C',
               linksColor: 'white',
               nombreColor: 'white',
               homeColor: 'white',
               bodyColor: '#0f131a',
               tituloColor:  'gray',
               ContactButtonColor: '#81E6D9',
              ContactButtonFontColor: 'black',
              ContactButtonHoverColor: 'black',
              ContactButtonHoverFontColor: 'white',
              linkHoverColor: 'gray',
              },
      
      
     }})

     useEffect(()=>{
      if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        for(let i in dark.styles.light){
          document.body.style.setProperty(`--${i}`, dark.styles.dark[i])    
          
        }
        setDark({...dark,isActive:true})
      }else{
        for(let j in dark.styles.dark){
          document.body.style.setProperty(`--${j}`, String(dark.styles.light[j]))
        
        }
        setDark({...dark,isActive:false})
      }
     },[])

     function setDarkTheme(){
        
        if(dark.isActive===false){
          for(let i in dark.styles.light){
            document.body.style.setProperty(`--${i}`, dark.styles.dark[i])    
             
          }
          setDark({...dark,isActive:true})
        }else{
          
          for(let j in dark.styles.dark){
            document.body.style.setProperty(`--${j}`, String(dark.styles.light[j]))
          
          }
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
                {dark.isActive ?< FiMoon color={'white'} size='20px'/> :< FiSun color={'black'} size='20px'/>     }  
                </div>

          </div>

          
        </>
    )
}
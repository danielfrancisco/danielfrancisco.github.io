import { FiSun,  FiMoon } from "react-icons/fi";
import Cookies from 'universal-cookie';
import { useState, useContext, useEffect} from "react";
import "../../styless/components/nav.scss"
import { AppContext } from "./currentTheme";

const cookies = new Cookies()

export default function DarkModeButton({size}){
  const { theme, setTheme } = useContext(AppContext);
  
      function apllyTheme(){
         const newTheme = theme !== 'light'? 'light' : 'dark'
         setTheme(newTheme)
         
         cookies.set('theme', newTheme, { path: '/', expires: new Date(Date.now() + 3600000) })
         }

    return(
      <>
        <div id='icon' onClick={apllyTheme}>
            {theme!=='light'?
            <>
            < FiMoon color={'#E0E0E0'} size={size}/> 
            </>:
            <>
            < FiSun color={'black'} size={size}/>
            </>
            } 
        </div>
      </>
  )
}
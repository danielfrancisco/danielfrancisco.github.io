import { createContext, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

export const AppContext = createContext();

export const CurrentTheme = ({ children }) => {
    const[theme, setTheme] = useState(()=>{
        if(cookies.get('theme')){
            return cookies.get('theme')
        }else{
         const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
         cookies.set('theme', preferredTheme, { path: '/', expires: new Date(Date.now() + 3600000) })
         return preferredTheme
        }

        })

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

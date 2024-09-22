import { useLocation } from 'react-router-dom'

export function getPagePath(){
    const pathName = window.location.pathname
    return pathName

}


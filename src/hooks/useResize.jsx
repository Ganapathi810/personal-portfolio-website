import { useEffect, useState } from "react"

export const useResize = () => {
    const [isMobile,setIsMobile] = useState(window.innerWidth < 640)
    const [isMediumOrAboveScreen,setIsMediumOrAboveScreen] = useState(window.innerWidth >= 768)

    useEffect(() => {
        const handleResize = () => {
            console.log('inside handleResize')
            console.log(window.innerWidth < 640)
            setIsMediumOrAboveScreen(window.innerWidth >= 768)
            setIsMobile(window.innerWidth < 640)
        }

        window.addEventListener('resize',handleResize);
        
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[])

    return { isMediumOrAboveScreen, isMobile };
}   
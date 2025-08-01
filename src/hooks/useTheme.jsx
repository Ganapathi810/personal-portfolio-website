import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme,setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }

    return { theme,toggleTheme }
}
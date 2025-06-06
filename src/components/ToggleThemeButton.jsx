import { PiSunLight } from "react-icons/pi";
import { CiDark } from "react-icons/ci";
import { useTheme } from "../hooks/useTheme";
import { motion } from "motion/react";

export const ToggleThemeButton = () => {
    const { theme,toggleTheme } = useTheme();

    return (
        <div className= "flex items-center rounded-xl h-6 w-12  px-1">
            <motion.button 
                initial={{
                    opacity : 0.5,
                    y : -60,
                    x : -10
                }}
                animate={{
                    opacity : 1,
                    y : 0,
                    x : 0
                }}
                transition={{
                    delay : 0.7,
                    duration : 1,
                }}
                onClick={toggleTheme}>
                <div> 
                    {theme === 'dark' ? (
                    <PiSunLight className="size-6 fill-white " strokeWidth='2'/>  
                    ) : (
                        <CiDark className="size-6 fill-black"  />
                    )}
                </div>
            </motion.button>
        </div>
    );
}
import { motion } from 'motion/react'

export const MenuButton = ({ showMenu,menuButtonRef,setShowMenu}) => {

    return (
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
                delay : 0.4,
                duration : 1,
            }}
            ref={menuButtonRef}
            onClick={() => setShowMenu(!showMenu)}
            className='md:hidden'
        >
            <motion.span 
                animate={{
                    rotate : showMenu ? -45 : 0,
                    y : showMenu ? 10 : 0
                }}
                transition={{
                    duration : 0.3
                }}
                className="block h-0.5 w-5 bg-black dark:bg-white mb-1">
            </motion.span>
            <motion.span 
                animate={{
                    opacity : showMenu ? 0 : 1
                }}
                transition={{
                    duration : 0.3
                }}
                className="block h-0.5 w-5 bg-black dark:bg-white mb-1"></motion.span>
            <motion.span 
                animate={{
                    rotate : showMenu ? 45 : 0,
                    y : showMenu ? -2 : 0
                }}
                transition={{
                    duration : 0.3
                }}
                className="block h-0.5 w-5 bg-black dark:bg-white">
            </motion.span>
        </motion.button>
    )
}
import { useEffect, useRef,useState } from "react"
import logo from '../assets/logo.jpg'
import { ToggleThemeButton } from "./ToggleThemeButton";
import { motion,animate, AnimatePresence } from "motion/react";
import { MenuButton } from "./MenuButton";
import { useResize } from "../hooks/useResize";

export const Topbar = () => {
    const [showMenu,setShowMenu] = useState(false);
    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const { isMediumOrAboveScreen,isMobile } = useResize(); 

    const resetAllButtonStyles = () => {
        console.log('inside reselt')
        button1Ref.current.className='dark:text-white text-black hover:text-blue-600 active:text-blue-800 italic'
        button2Ref.current.className='dark:text-white text-black hover:text-blue-600 active:text-blue-800 italic'
        button3Ref.current.className='dark:text-white text-black hover:text-blue-600 active:text-blue-800 italic'
        button4Ref.current.className='dark:text-white text-black hover:text-blue-600 active:text-blue-800 italic'
    }

    const onButtonClick = (buttonRef) => {
        console.log(buttonRef)
        console.log('inside button click')
        console.log(buttonRef.current.className)
        resetAllButtonStyles();
        // if(!showMenu)   
            buttonRef.current.className='dark:text-blue-500 text-blue-600 italic'
        console.log(buttonRef.current.className)

    }

    const navBarDetails = [
        {
            name : 'About',
            buttonRef : button1Ref,
            href : '#about',
        },
        {
            name : 'Skills',
            buttonRef : button2Ref,
            href : '#about',
        },
        {
            name : 'Projects',
            buttonRef : button3Ref,
            href : '#projects'
        },
        {
            name : 'Contact',
            buttonRef : button4Ref,
            href : '#contact'
        },
    ]

    useEffect(() => {
        const clickHandler = (e) => {
            if(menuButtonRef.current)
                if(menuRef.current && !menuButtonRef.current.contains(e.target) && !menuRef.current.contains(e.target))
                    setShowMenu(false);
        }
        window.addEventListener('click',clickHandler)

        return () => {
            window.removeEventListener('click',clickHandler)
        }
    },[])

    useEffect(() => {
        if(isMediumOrAboveScreen) {
            setShowMenu(false);
        }
    },[])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        const targetY = element.offsetTop
        animate(window.scrollY,targetY,{
            duration : 2,
            ease : 'easeInOut',
            onUpdate : (latest) => window.scrollTo(0,latest)
          })
    }

    return (
        <header className='z-30 bg-transparent backdrop-blur-md h-16 w-screen flex items-center justify-between fixed transition-all duration-300 shadow-md dark:shadow-sm dark:shadow-blue-700/20'>
            <div className='flex ml-5'>
                <div className='flex items-center space-x-3'>
                    <div>
                        <button onClick={() => location.reload()}>
                            <motion.img
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
                                    duration : 1,
                                }} 
                                src={logo}
                                alt="profile image"
                                className="h-12 w-12 rounded-full text-white animate-spin-slow"
                            />
                        </button>
                    </div>
                    <motion.div 
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
                            duration : 1,
                        }} 
                        className="hidden sm:block text-black sm:dark:text-white sm:font-semibold sm:text-xl tracking-widest md:text-2xl capitalize">
                        Ganapathi Othoju
                    </motion.div>
                </div>
            </div>
            <nav className="flex items-center space-x-9 mr-7 text-white font-semibold">
                <AnimatePresence>
                    {(!isMediumOrAboveScreen ? showMenu : true) && (
                        <motion.ul
                            initial={{
                                opacity : 0,
                                filter : 'blur(3px)',
                                transform : 'rotateY(90deg)'
                            }}
                            animate={{
                                opacity : 1,
                                filter : 'blur(0px)',
                                transform : 'rotateY(0deg)' 
                            }}
                            transition={{
                                duration : 0.7
                            }}
                            exit={{
                                filter : 'blur(1px)',
                                transform : 'rotateY(-90deg)',
                                opacity : 0
                            }}
                            ref={menuRef} 
                            className={`flex ${!isMediumOrAboveScreen ? 'overflow-hidden z-50  flex-col relative w-[150px] left-20 top-1 shadow-sm shadow-slate-800 border border-slate-600/30 items-center rounded-md bg-transparent bg-slate-700 backdrop-blur-xl px-4 mt-72 pt-2 pb-2' : 'md:flex-row'} gap-8`}
                        >
                            {navBarDetails.map((link,index) => (
                                <li key={link.name}>
                                    {/* <a href={link.href}> */}
                                        <motion.button
                                            initial={{
                                                opacity : showMenu ? 1 : 0.5,
                                                y : showMenu ? 0 : -60,
                                                x : showMenu ? -140 : -10
                                            }}
                                            animate={{
                                                opacity : 1,
                                                y : 0,
                                                x : 0
                                            }}
                                            transition={{
                                                type : 'spring',
                                                delay : 0.1*index,
                                                duration : showMenu ? 1 : 3,
                                            }} 
                                            onClick={() => {
                                                setShowMenu(false)
                                                onButtonClick(link.buttonRef)
                                                scrollToSection(link.name.toLowerCase())
                                            }}
                                            ref={link.buttonRef}
                                            className='dark:text-white text-black hover:text-blue-600 active:text-blue-800 italic'
                                        >
                                            {link.name}
                                        </motion.button>
                                    {/* </a> */}
                                </li>
                            ))}
                    </motion.ul>
                    )}
                </AnimatePresence>
                <MenuButton menuButtonRef={menuButtonRef} showMenu={showMenu} setShowMenu={setShowMenu}/>
                <ToggleThemeButton />
            </nav>
        </header>
    )
}
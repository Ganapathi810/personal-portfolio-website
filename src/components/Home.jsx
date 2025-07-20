import { motion } from 'framer-motion'
import profileImage from '../assets/profileImage.png'
import { HomeWaves } from './HomeWaves'
import { animate } from 'framer-motion'

export const Home = () => {
    const parentVariants = {
        hidden : {},
        visible : {
            transition : {
                staggerChildren : 0.1
            }
        }
    }
    const childVariants = {
        hidden : {
            opacity : 0,
            filter : 'blur(1px)',
            transform : 'skewY(7deg)  translateY(100px)',
        },
        visible : {
            opacity : 1,
            filter : 'blur(0px)',
            transform : 'skewY(0deg) translateY(0px)',
            transition : {
                duration : 1,
                ease : 'easeInOut',
            }
        }
    }

    return (
        <div id='about' className='block lg:flex lg:justify-between pt-32 md:pt-40 w-full min-h-screen relative z-10'> 
            <motion.div 
                initial='hidden'
                animate='visible'
                variants={parentVariants}
                className='text-center lg:text-left md:ml-10 lg:ml-16 xl:ml-36'>
                <motion.h1
                    variants={childVariants}
                    className='dark:text-slate-300 text-slate-800 font-bold text-4xl md:text-5xl'
                >
                    Hi
                    <motion.span 
                        className='inline-flex mx-5'
                        initial={{rotate:-30}}
                        animate={{rotate:[-30,30,-30,30,-30]}}
                        transition={{duration : 1.5, repeat:Infinity,repeatDelay:1}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 md:size-12 md:pt-1">
                            <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
                        </svg>
                    </motion.span>
                    , I'm
                    <span className='dark:text-blue-300 text-blue-500 ml-3'>Ganapathi.</span>
                </motion.h1>
                <motion.h2 
                variants={childVariants}
                    className='pr-2 pt-3 text-2xl md:pt-6 md:text-3xl font-semibold dark:text-blue-400 text-blue-500'
                >
                    Full Stack Developer/Software engineer
                </motion.h2>
                <motion.p 
                    variants={childVariants}
                    className='relative z-50 text-lg text-left dark:text-white text-slate-950 font-thin px-8 pt-7 md:px-0 md:pt-0 md:mt-10 md:mr-10 lg:mr-8 xl:mr-6  xl:w-11/12'
                >
                    I am a <span className='text-blue-700 dark:text-blue-500 italic'>graduate</span> from <span className='text-blue-700 dark:text-blue-500 italic'>JNTUH College of Engineering Sultanpur</span> with a degree in <span className='text-blue-700 dark:text-blue-500 italic'>Computer Science and Engineering</span>. I graduated in mid-2024 and am seeking opportunities as a <span className='text-blue-700 dark:text-blue-500 italic'>Full-Stack Developer/Software engineer</span>. I specialize in building <span className='text-blue-700 dark:text-blue-500 italic'>responsive</span> and <span className='text-blue-700 dark:text-blue-500 italic'>dynamic</span> web applications using <span className='text-blue-700 dark:text-blue-500 italic'>Next.js</span>, <span className='text-blue-700 dark:text-blue-500 italic'>shadcn</span>, <span className='text-blue-700 dark:text-blue-500 italic'>MERN stack (MongoDB, Express.js, React, and Node.js)</span>.

                    I have <span className='text-blue-700 dark:text-blue-500 italic'>hands-on experience</span> with <span className='text-blue-700 dark:text-blue-500 italic'>Firebase Authentication</span>,<span className='text-blue-700 dark:text-blue-500 italic'>NextAuth</span>  and <span className='text-blue-700 dark:text-blue-500 italic'>Amazon S3</span> for storage and <span className='text-blue-700 dark:text-blue-500 italic'>Motion</span> animation library for creating smooth, interactive UI animations. I’m also <span className='text-blue-700 dark:text-blue-500 italic'>familiar</span> with <span className='text-blue-700 dark:text-blue-500 italic'>high-level system design</span> and <span className='text-blue-700 dark:text-blue-500 italic'>containerization using Docker.</span>

                    I am passionate about solving real-world problems through technology and constantly stay updated with the latest web development trends. Whether it's frontend design, backend architecture, or cloud integration, I enjoy building scalable and impactful applications.
                    <p className="relative z-50 mt-2 text-lg mb-4 animate-pulse text-black font-normal dark:text-white">I'm actively looking for opportunities. You can check out my resume.
                        <span>
                            <a
                                href="/O_V_V_S_Ganapathi_Resume.pdf"  
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-600  hover:text-blue-300 ml-3"
                            >
                                click here
                            </a>
                        </span>
                    </p>
                    
                </motion.p>
                <a>
                    <motion.div 
                        initial={{
                            opacity : 0.5,
                            scale : 0,
                        }}
                        animate={{
                            opacity : 1,
                            scale : 1,
                        }}
                        transition={{
                            delay : 0.2,
                            duration : 1,
                            ease : 'easeInOut'
                        }}
                        className='group relative mt-4 inline-flex p-1.5'
                    >
                        <div className='absolute inset-0 hover:bg-gradient-to-r group-hover:from-green-700 group-hover:via-fuchsia-500 group-hover:to-blue-400 bg-gradient-to-r from-fuchsia-700 via-blue-500 to-green-400 rounded-full transition duration-600'></div>
                        <button onClick={() => {
                             const element = document.getElementById('contact')
                             const targetY = element.offsetTop
                             animate(window.scrollY,targetY,{
                                 duration : 2,
                                 ease : 'easeInOut',
                                 onUpdate : (latest) => window.scrollTo(0,latest)
                               })
                            }}
                            className='relative z-30 text-slate-800 bg-white rounded-full flex justify-center items-center px-5 py-3 active:scale-105 active:tranform active:transition active:duration-100'
                        >
                            <span className='text-md font-semibold tracking-wide'>Contact me</span>
                        </button> 
                    </motion.div>
                </a>
               
            </motion.div>
            <div className='flex justify-center mt-2 md:mt-24 lg:mt-0'>
                <motion.div 
                    className='relative w-80 h-96 rounded-lg z-50 mt-24 lg:mr-16 xl:mr-36 md:mt-0'
                    initial={{
                        filter : 'none'
                    }} 
                    animate={{
                        filter : 'drop-shadow(0 0 10px rgba(0,0,255,1))',
                    }}
                    transition={{
                        repeat : Infinity,
                        duration : 2,
                    }}
                >
                    <motion.img 
                        initial={{
                            opacity : 0,
                            filter : 'blur(2px)',
                            transform : 'skewY(10deg)  translateY(100px)',
                        }}
                        animate={{
                            opacity : 1,
                            filter : 'blur(0px)',
                            transform : 'skewY(0deg) translateY(0px)',
                        }}
                        transition={{
                            duration : 1,
                            ease : 'easeInOut'
                        }}
                        src={profileImage} 
                        className="absolute z-50 left-0 top-0 h-full w-full rounded-lg" 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black  z-50 rounded-xl '></div>
                </motion.div>
            </div>
            <HomeWaves />
        </div> 
    );
}
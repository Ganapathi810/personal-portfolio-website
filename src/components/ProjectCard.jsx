import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useResize } from '../hooks/useResize';

export const ProjectCard = ({ title,description,skills,githubLink,websiteLink,video }) => {
    const containerRef = useRef();
    const videoRef = useRef();
    const isInView = useInView(videoRef)
    const { isMobile } = useResize()

    useEffect(() => {
        if(!videoRef.current)
            return

        if(isInView)
            videoRef.current.play()
        else
            videoRef.current.pause()

    },[isInView])

    console.log(isMobile)
    return (
        <motion.div 
            initial={{
                skewY : 7,
                y : 100
            }}
            whileInView={{
                skewY : 0,
                y : 0
            }}
            transition={{
                duration : 1
            }}
            viewport={{
                once : true,
                amount : 'some'
            }}
            whileHover={{
                scale : 1.01,
                y : -5
            }}
            ref={containerRef} 
            className="relative z-10 before:absolute before:-inset-1 before:-z-40 before:opacity-70 before:transition before:duration-700 before:hover:opacity-100 before:blur before:bg-gradient-to-r  grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto justify-between md:p-1 bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-green-500 rounded-lg m-5 md:m-7"
        >
            <motion.div 
                className='flex items-center'
            >
                <motion.video
                    initial={{
                        scale : isMobile ? 1.4 : 2,
                        x : isMobile ? -400 : -300,
                        y : isMobile ? 300 : 700
                    }}
                    whileInView={{
                        scale : 1,
                        x : 0,
                        y : 0
                    }}
                    transition={{
                        duration : 1.5
                    }}
                    viewport={{
                        once : true,
                        amount : 'some'    
                    }}
                    ref={videoRef} 
                    src={video}
                    autoPlay
                    loop
                    muted
                    preload='auto'
                    className='rounded'
                    onContextMenu={(e) => e.preventDefault()}
                />
            </motion.div>
            <motion.div 
                initial={{
                    scale : isMobile ? 1.4 : 2,
                    x : isMobile ? 400 : 600,
                    y : isMobile ? 500 : 700
                }}
                whileInView={{
                    scale : 1,
                    x : 0,
                    y : 0
                }}
                transition={{
                    duration : 1.5
                }}
                viewport={{
                    once : true,
                    amount : 'some'    
                }}
                className='flex flex-col justify-between p-2'
            >
                <div>
                    <h2 className="font-thin pt-2 md:pt-3 text-2xl md:text-3xl text-white">{title}</h2>
                    <p className="font-normal text-md text-violet-200 pt-2 md:pt-4">{description}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {skills.map((skill) => (
                            <div key={skill} className="bg-black px-2 py-0.5 rounded-md shadow-blue-900 shadow-md">
                                <span className="text-blue-400 font-semibold">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-evenly mb-2 lg:mb-8 mt-6 ">
                    <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
                        <motion.button
                            whileTap={{scale : 0.8}}
                            transition={{ duration : 0.1}}
                            className=' text-slate-950 font-semibold border-black shadow-lg shadow-violet-900 hover:bg-violet-700 bg-violet-500 w-40 h-10 rounded-full '
                        >
                            Try it
                        </motion.button>
                    </a>
                    <div className='rounded-full mt-0.5'>
                        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                            <svg className='h-8 w-8 sm:h-9 sm:w-9 fill-current stroke-slate-900 hover:stroke-violet-600' stroke='currentColor' strokeWidth='0.5' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24" id="github">
                                <path d="M14.5 23.862a.5.5 0 0 1-.5-.5v-3.72c0-.899-.115-1.537-.363-2.005a.5.5 0 0 1 .329-.72C16.93 16.233 19 14.064 19 11.642c0-1.2-.493-2.345-1.425-3.312a.5.5 0 0 1-.094-.558c.372-.802.293-1.894-.148-2.549-.583.228-1.34.705-1.832 1.289a.496.496 0 0 1-.554.147 8.67 8.67 0 0 0-5.893 0 .5.5 0 0 1-.554-.146c-.492-.584-1.249-1.061-1.833-1.289-.441.655-.52 1.747-.148 2.549a.498.498 0 0 1-.094.557C5.493 9.297 5 10.443 5 11.642c0 2.307 1.863 4.385 4.636 5.17a.501.501 0 0 1 .364.482v.349c0 .626-.251.979-.462 1.166-.452.397-1.036.337-1.1.33h-.01c-.824 0-1.444-.459-2.043-.903-.301-.223-.606-.45-.961-.638.077.104.153.211.23.318.75 1.043 1.599 2.226 2.847 2.226h1a.5.5 0 0 1 .5.5v2.72a.5.5 0 0 1-.608.488C3.95 22.642 0 17.719 0 12.142c0-6.617 5.383-12 12-12s12 5.383 12 12c0 5.576-3.95 10.5-9.392 11.708a.497.497 0 0 1-.108.012zm.258-6.121c.164.517.242 1.137.242 1.901v3.078c4.671-1.326 8-5.677 8-10.578 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 4.901 3.329 9.252 8 10.578v-1.578h-.5c-1.76 0-2.813-1.465-3.659-2.643-.479-.667-.975-1.357-1.341-1.357a.5.5 0 0 1 0-1c1.74 0 2.705.715 3.48 1.29.536.397.958.71 1.52.71.056.003.263.018.379-.086.095-.086.119-.257.121-.392-3.006-.987-5-3.368-5-6.021 0-1.364.512-2.66 1.484-3.766-.429-1.243-.164-2.761.662-3.588a.494.494 0 0 1 .481-.13c.668.177 1.66.696 2.401 1.451a9.706 9.706 0 0 1 5.941 0c.741-.755 1.733-1.274 2.401-1.451a.493.493 0 0 1 .481.13c.827.827 1.091 2.345.662 3.587C19.488 8.983 20 10.279 20 11.642c0 2.728-2.127 5.17-5.242 6.099z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.div> 
        </motion.div>
    );
}




import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { motion } from 'motion/react'

export const Footer = () => {

    const CONTACT_LINKS = [
        {
            id : 'email',
            name : 'othojuganapathi123@gmail.com',
            icon : <MdEmail className="size-8 fill-white group-hover:fill-blue-300 transition duration-400 ease-in"/>,
            link : 'mailto:othojuganapathi123@gmail.com'
        },
        {
            id : 'linkedin',
            name : 'linkedin.com/in/ovvsganapathi/',
            icon : <FaLinkedin className="size-7 fill-white group-hover:fill-blue-800 transition duration-400 ease-in"/>,
            link : 'https://www.linkedin.com/in/ovvsganapathi/'
        },
        {
            id : 'github',
            name : 'github.com/Ganapathi810',
            icon : <BsGithub className="size-7 fill-white group-hover:fill-black transition duration-400 ease-in"/>,
            link : 'https://github.com/Ganapathi810'
        },
    ]

    const containerVariants = {
        hidden : { opacity : 0},
        show : {
            opacity : 1,
            transition : {
                staggerChildren : 0.1
            }
        }
    }

    const childVariants = {
        hidden : { opacity : 0, y : 100},
        show : {
            opacity : 1,
            y : 0,
            transition : {
                type : 'spring',
                stiffness : 50,
                damp : 4,
                duration : 0.5,
            }
        }
    }

    return (
        <footer id='contact' className="relative h-80 md:h-96 mt-20 md:mt-40 block md:flex md:items-center md:justify-around p-5 xl:pb-10">
            <motion.svg 
                initial={{
                    y : '50%'
                 }}
                 whileInView={{
                   y : '0%'
                 }}
                 viewport={{
                    amount : 0.1
                 }}
                 transition={{
                   duration : 1,
                   type : 'spring'
                 }}
                className='absolute bottom-0 -left-52 w-[200%] h-[350px] sm:h-[340px] sm:w-[200%] sm:-left-64  md:h-[280px] md:-left-44 lg:h-[300px] lg:-left-24 xl:w-[120%] xl:-left-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id='customcolorgradient'>
                        <stop offset='0%' stopColor="blue"/>
                        <stop offset='50%' stopColor="red"/>
                        <stop offset='100%' stopColor="green"/>
                    </linearGradient>
                </defs>
                <path fill="url(#customcolorgradient)" fill-opacity="0.3" d="M0,96L60,80C120,64,240,32,360,16C480,0,600,0,720,16C840,32,960,64,1080,74.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </motion.svg>
        <div className="mb-4 md:mb-0 relative z-30 md:mt-24 lg:mt-20 xl:mt-20">
            <motion.div
                initial={{
                    opacity : 0,
                    y : -100
                }}
                whileInView={{
                    opacity : 1,
                    y : 0,
                }}
                viewport={{
                    // once : true,
                    amount : 0.1
                }}
                transition={{
                    type : 'spring',
                    duration : 2,
                    ease : 'easeInOut'
                }}
            >
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{
                            backgroundPosition : '100% 0%',
                        }} 
                        animate={{
                            backgroundPosition : '-120% 0%',
                        }}
                        transition={{
                            delay : '2',
                            duration : 10,
                            repeat : Infinity,
                            ease : 'linear'
                        }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent italic"
                        style={{
                            backgroundImage : 'linear-gradient(to right,cyan 30%,violet 60%,red 100%)',
                            backgroundSize : '400% 100%',
                        }}    
                    >
                        Get in Touch
                    </motion.h1>
                </div>
                <h3 className="text-2xl md:text-3xl text-black dark:text-blue-300 font-normal">Feel free to reach out.</h3>
            </motion.div>
        </div>
        <motion.ul 
            variants={containerVariants} 
            initial='hidden' 
            whileInView='show' 
            viewport={{
                amount : 'all'
            }}
            className="flex flex-col gap-2 overflow-hidden relative z-20 md:mt-32 xl:mt-28"
        >
            {CONTACT_LINKS.map((contact) => {
                return (
                    <motion.li key={contact.id}  variants={childVariants} className="group">
                        <a href={contact.link} target='_blank' rel='noopener noreferrer'>
                            <div>{contact.icon}</div>
                            <span className="italic text-black dark:text-blue-300 text-lg group-hover:text-blue-200 dark:group-hover:text-blue-500 transition duration-400 ease-in">{contact.name}</span>
                        </a>
                    </motion.li>
                );
            })}
        </motion.ul>
    </footer>
    );
}
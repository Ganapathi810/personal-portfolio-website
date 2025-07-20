import { motion } from 'framer-motion'
import { FaReact } from "react-icons/fa6";
import { SiExpress,SiMongodb  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt,FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript,SiShadcnui,SiFastapi,SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const Skills = () => {

  const SKILL_ICONS = [
    {
      category : 'Frontend:',
      direction : 'forward',
      icons : [

        <RiNextjsFill className='size-10 sm:size-10 md:size-12 dark:fill-white fill-black'/>,
        <FaReact className='size-10 sm:size-10 md:size-12 dark:fill-blue-400 fill-blue-600'/>,
        <SiTypescript className='size-10 sm:size-10 md:size-10 dark:fill-blue-600 text-white fill-blue-600' />,
        <IoLogoJavascript className='size-10 sm:size-10 dark:fill-yellow-400 fill-yellow-500'/>,
        <RiTailwindCssFill className='size-10 sm:size-10 dark:fill-blue-400 fill-blue-600' />,
        <SiShadcnui className='size-10 sm:size-10 dark:fill-white fill-black' />,
        <TbBrandFramerMotion className='size-10 sm:size-12 dark:fill-yellow-500 fill-yellow-600 text-yellow-600 dark:text-black' />
      ],
      initial : { x : '-100%'},
      animate : {
        x : 470
      },
      transition : {
        duration : 15,
        repeat : Infinity,
        ease : 'linear'
      }
    },
    {
      category : 'Backend:',
      direction : 'backward',
      icons : [
        <SiExpress className='size-9 sm:size-10 md:size-12 dark:fill-white fill-black'/>,
        <SiFastapi  press className='size-9 sm:size-10 md:size-11 dark:fill-green-500 fill-green-600'/>,
      ],
      initial : { x : '550%' },
      animate : {
        x : '-110%'
      },
      transition : {
        duration : 14,
        repeat : Infinity,
        ease : 'linear'
      }
    },
    {
      category : 'Database:',
      direction : 'backward',
      icons : [
        <SiMongodb className='size-9 sm:size-10 md:size-12 dark:fill-green-400 fill-green-500'/>,
        <BiLogoPostgresql className='size-9 sm:size-10 md:size-12 dark:fill-cyan-700 fill-cyan-800'/>,
        <SiPrisma className='size-9 sm:size-10 md:size-12 dark:fill-cyan-700 fill-cyan-800'/>,
      ],
      initial : { x : '200%' },
      animate : {
        x : '-110%'
      },
      transition : {
        duration : 13,
        repeat : Infinity,
        ease : 'linear'
      }
    },
    {
      category : 'Version Control:',
      direction : 'forward',
      icons : [
        <FaGitAlt className='size-9 sm:size-10 md:size-12 fill-orange-500'/>,
        <FaGithub className='size-9 sm:size-10 md:size-12 dark:fill-white fill-black'/>,
      ],
      initial : { x : '-100%'},
      animate : {
        x : '350%'
      },
      transition : {
        duration : 6,
        repeat : Infinity,
        ease : 'linear'
      }
    }
  ]


  return (
      <div id='skills' className="relative z-20 h-[600px] pt-2 md:pt-2 mt-10 xl:mt-24 md:mt-2">
          <div className='text-3xl sm:text-4xl md:text-5xl font-semibold text-white flex justify-center mt-14 italic'>
              <div className='relative z-0'>
                <motion.h1 
                  initial='hidden' 
                  whileInView='show' 
                  style={{
                    WebkitTextStroke : '1.5px blue'
                  }}
                  className='dark:text-black text-white font-bold '
                >
                  {"Skills".split('').map((letter,index) => (
                    <motion.span
                    key={index}
                    initial={{
                      filter : 'blur(7px)',
                      x : index < 3 ? -(240 - (index + 1)*40) : (index + 1)*30
                    }}
                    whileInView={{
                      filter : 'blur(0px)',
                      type : 'spring',
                      x : 0,
                    }}
                    viewport={{
                      once : true,
                      amount : 'some'
                    }}
                    transition={{
                      duration : 2,
                    }}
                    className="relative z-10 inline-block before:absolute before:inset-0 before:z-30 before:rounded-lg before:blur-md before:bg-blue-800/60"
                  >
                    {letter}
                  </motion.span>
                  ))}
                </motion.h1>
              </div>
          </div>
          <div className='grid md:grid-cols-1 gap-5 xl:grid-cols-2 p-3 pr-10 sm:pr-4 md:pr-5 lg:p-5 lg:pr-10 mt-16'>
            {SKILL_ICONS.map((skillGroup,index) => (
              <motion.div 
                key={index} 
                className='flex gap-3 items-center justify-start md:justify-center'
                initial={{
                  opacity : 0,
                  rotate : -90,
                  scale : 0.1
                }}
                whileInView={{
                  opacity : 1,
                  rotate : 0,
                  scale : 1
                }}
                transition={{
                  delay : 0.5,
                  duration : 2
                }}
                viewport={{
                  once : true,
                  amount : 'some'
                }}
              >
                <div className='text-transparent w-20  bg-clip-text ml-2  sm:w-40 lg:w-44  bg-gradient-to-r dark:from-violet-600 from-violet-700 dark:via-blue-400 via-blue-600  dark:to-green-700 to-green-800 tracking-wide md:text-2xl lg:text-3xl text-center'>
                  {skillGroup.category}
                </div>
                <div className='w-[70vw] overflow-hidden bg-white/40 dark:bg-white/5 rounded-lg p-4'>
                  <motion.div
                    initial={skillGroup.initial}
                    animate={skillGroup.animate}
                    transition={skillGroup.transition}
                    className='inline-flex gap-9'
                  >
                    {skillGroup.icons.map((icon,index) => (
                    <div key={index} className='w-14 p-2 sm:w-16  border-y-4 dark:border-blue-400 border-blue-500 rounded-lg flex items-center justify-center'>
                      {icon}
                    </div> 
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))} 
          </div> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute w-full left-0 -bottom-20 sm:-bottom-28 md:-bottom-44 lg:-bottom-52 xl:-bottom-12 -z-10'>
            <defs>
                  <linearGradient id='customwave'>
                          <stop offset='0%' stopColor='red'/>
                          <stop offset='50%' stopColor='blue'/>
                          <stop offset='100%' stopColor='green'/>
                  </linearGradient>
            </defs>
            <path fill="url(#customwave)" fill-opacity="0.5" d="M0,96L21.8,117.3C43.6,139,87,181,131,218.7C174.5,256,218,288,262,266.7C305.5,245,349,171,393,165.3C436.4,160,480,224,524,234.7C567.3,245,611,203,655,208C698.2,213,742,267,785,250.7C829.1,235,873,149,916,149.3C960,149,1004,235,1047,266.7C1090.9,299,1135,277,1178,256C1221.8,235,1265,213,1309,170.7C1352.7,128,1396,64,1418,32L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
          </svg>
      </div>
    );
}


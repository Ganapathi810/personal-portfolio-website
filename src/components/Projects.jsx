import { useResize } from "../hooks/useResize";
import { ProjectCard } from "./ProjectCard";
import { motion } from 'motion/react'

export const Projects = () => {
    const { isMobile } = useResize()

    const PROJECTS_INFO = [
      {
        id : 'Blogging-website',
        title : 'Blogging website',
        description : 'Blogging Website is a responsive and dynamic web application designed with a clean UI that allows users to create, read, update, and delete blogs on any topic. It features secure authentication using providers like Google or GitHub, an intuitive editor for writing blogs, and a "clap" feature for readers to show appreciation. Users have personalized profiles showcasing their published blogs, and a built-in search functionality makes it easy to discover content.',
        githubLink : 'https://github.com/Ganapathi810/blogging-website',
        websiteLink : 'https://blogging-website-w7uh.vercel.app',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/blogging-app.mp4',
        skills : ['Next.js','NextAuth','Shadcn','TailwindCSS','PostgreSQL','Prisma ORM']
      },
      {
        id : 'techvibe',
        title : 'Tech Vibe',
        description : 'Tech Vibe is a responsive web app where users can share and explore short videos focused entirely on technology—whether it’s the latest news, quick tutorials, or personal insights. It features a smooth, scrollable UI for seamless content discovery, along with user authentication, profiles, comments, and the ability to follow other creators. Built to foster a focused, engaging space for tech enthusiasts to connect and create.',
        githubLink : 'https://github.com/Ganapathi810/tech-vibe',
        websiteLink : 'https://tech-vibe-weld.vercel.app/',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/techvibeDemo.mp4',
        skills : ['React.js','TailwindCSS','Express.js','Node.js','MongoDB','Firebase Auth','AWS S3']
      },
      {
        id : 'todoapp',
        title : 'Todo Application',
        description : 'A dynamic and responsive Todo App featuring CRUD Operations - Create, Read, Update, and Delete todos, user authentication, session handling, priority-based task management through drag and drop, and filtering options.',
        githubLink : 'https://github.com/Ganapathi810/todo-app',
        websiteLink : 'https://todoappfree.vercel.app/',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/todoappDemo.mp4',
        skills : ['React.js','TailwindCSS','Express.js','Node.js','MongoDB']
      },
      {
        id : 'portfolio',
        title : 'Portfolio Website',
        description : 'A personal portfolio with a clean, responsive design and smooth animations. Built to introduce who I am and highlight my skills through a modern, visually engaging interface. It includes dedicated sections for About, Projects, Skills, and Contact, all designed for clear and seamless navigation.',
        githubLink : 'https://github.com/Ganapathi810/personal-portfolio-website/',
        websiteLink : 'https://personal-portfolio-website-iota-mauve.vercel.app/',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/ganapathi-portfolio.mp4',
        skills : ['React.js','TailwindCSS','Express.js','Node.js','MongoDB','Motion'],
      },
    ]


    return (
      <div id='projects' className="mt-36 sm:mt-44 md:mt-64 lg:mt-72 xl:mt-52">
        <div className='text-3xl sm:text-4xl md:text-5xl font-semibold  flex justify-center mt-14 italic'>
            <h1 className="relative dark:text-black font-bold text-white"
              style={{
                WebkitTextStroke : '1.5px blue'
              }}
            >
              {"Projects".split('').map((letter,index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter : 'blur(7px)',
                    x : index < 4 
                      ? (isMobile ?  -(90 - (index + 1)*15) : -(240 - (index + 1) * 30)) 
                      : (isMobile ? (index + 1) * 15 : (index + 1) * 30)

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
                  className="inline-block relative before:absolute before:inset-0 before:z-30 before:rounded-lg before:blur-md before:bg-blue-800/60"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 mt-8 md:mt-14 gap-y-12'>
          {PROJECTS_INFO.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              skills={project.skills} 
              websiteLink={project.websiteLink} 
              githubLink={project.githubLink}
              video={project.video}
            />
          ))}
        </div>
      </div>
    );
}
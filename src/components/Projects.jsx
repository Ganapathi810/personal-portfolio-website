import { useResize } from "../hooks/useResize";
import { ProjectCard } from "./ProjectCard";
import { motion } from 'motion/react'

export const Projects = () => {
    const { isMobile } = useResize()

    const PROJECTS_INFO = [
      {
        id : 'Shortly',
        title : 'Shortly',
        description: 'It is a highly responsive and dynamic URL shortener application that converts long URLs into clean, shareable short links and automatically redirects users to the original destination. The platform includes a powerful dashboard to manage all short links, view detailed analytics, track clicks, and analyze location data. Each short link has its own dedicated information page, and features like OAuth authentication (Neon Auth), filtering, searching, and full create/delete management make the experience smooth and efficient.',
        githubLink : 'https://github.com/Ganapathi810/shortly/',
        websiteLink : 'https://shortly-urlshortner-new.vercel.app/',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/shortly.mp4',
        skills : ["Next.js","TailwindCSS","Shadcn UI","Neon(PostgreSQL)","Neon Auth", "Prisma ORM" ]
      },
      {
        id : 'Social AI',
        title : 'Social AI',
        description: 'It is an AI-powered social media management platform that helps users effortlessly create, publish, and track posts across LinkedIn and Twitter (X) from a single dashboard. It features an AI chat interface powered by the Gemini API for generating engaging post content, and integrates OAuth 2.0 for secure social account connections with one-click publishing. The platform also includes aggregated and individual post analytics to monitor engagement.',
        githubLink : 'https://github.com/Ganapathi810/AI-powered-social-media-poster',
        websiteLink : 'https://ai-powered-social-media-poster.vercel.app/',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/social-ai.mp4',
        skills : ['React.js','TypeScript','TailwdindCSS','Express.js','Node.js','MongoDB']
      },
      {
        id : 'ChatMind AI',
        title : 'ChatMind AI',
        description: 'A highly responsive real-time chatbot application designed for secure and interactive messaging. It features email-based authentication with strict access controls, ensuring users can only manage their own chats and messages. The system allows users to create chats, send and receive messages, and view conversations with instant updates. Each message triggers a workflow that validates ownership, processes the request through the OpenRouter ChatGPT model, stores the generated response, and returns it instantly to the chat interface, delivering a seamless and dynamic user experience.',
        githubLink : 'https://github.com/Ganapathi810/chatbot',
        websiteLink : 'https://chatbot-by-ganapathi.netlify.app/',
        video : 'https://portfolio-project-videos.s3.us-east-1.amazonaws.com/Recording+2025-08-22+232245.mp4',
        skills : ['React.js','TypeScript','TailwdindCSS','Hasura','PostgreSQL','n8n automation platform','Nhost']
      },
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
        skills : ['React.js','TailwindCSS','Framer Motion'],
      },
    ]


    return (
      <div id='projects' className="mt-52 sm:mt-44 md:mt-64 lg:mt-72 xl:mt-52">
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
import { motion } from 'motion/react'
import ReactLenis from 'lenis/react'
import { Topbar } from './components/Topbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

function App() {
 
  return (
    <motion.div 
      id='top' 
      className='min-h-screen bg-gradient-to-br from-blue-100 to-blue-400 dark:from-black dark:to-black overflow-hidden'
    >
      <ReactLenis root options={{ duration : 1.5 }}>
        <Topbar />
        <Home />
        <Skills />
        <Projects />
        <Footer />
      </ReactLenis>
    </motion.div>
  );
}



export default App




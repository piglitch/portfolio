import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, online_app_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", 
    index * .5, .75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
        className="bg-tertiary p-5 rounded-2xl
        sm:w-[360px] w-full"
      >
        <div 
        onClick={() => window.open(online_app_link, '_blank')}
        className='relative w-full h-[230px] cursor-pointer'>
          <img src={image} alt={name} 
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, '_blank') }
              className='black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer'
            >
              <img src={github} alt="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div> 
  )
} 
const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>This is what I've been upto</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
   
    <div className='w-full flex'>
      <motion.p 
        variants={fadeIn("", "", .1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Marvel at the astonishing compendium of coding wizardry that I shall now unveil before your incredulous eyes. 
        Brace yourself for an immersive journey through a labyrinth of algorithmic symphonies and meticulously crafted lines of code. 
    
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard 
        key = {`project-${index}`}
        {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "");
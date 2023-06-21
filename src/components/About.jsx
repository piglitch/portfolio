import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >With a repertoire spanning JavaScript, TypeScript, Go, and Python, I'm a programming virtuoso. 
    Armed with frameworks like NodeJS, ReactJS, ThreeJS, and the nifty Vite build tool, 
    I bring more than just technical prowess to the table. 
    Picture me as a code-slinging jester, armed with an arsenal of problem-solving 
    skills and a knack for attention to detail. 
    Bugs quiver in fear as I swiftly pluck them from their hiding spots, 
    transforming chaos into harmony. 
    </motion.p>
    div
    </>
  )
}

export default About
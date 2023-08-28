import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from "../assets/backend.png";


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
      >
        Hello! I'm a Cognitive Science student at UCSD with experience in Front-End languages and frameworks like JavaScript, React, Three.js, and Node.js. I also have experience with more backend languages such as Python, Java, and C. I'm a very adaptable person who is eager to expand my skillset, utilizing it to help create better designs and solutions to create a more accomodating and accessible environment! 
      </motion.p>
   
    </>
  );
};

export default SectionWrapper(About, "about");
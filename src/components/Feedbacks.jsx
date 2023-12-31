import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaFileAlt } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ContactCard = ({ icon, text, href }) => (
  <motion.a
    variants={textVariant()}
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='bg-black-200 p-6 rounded-xl w-full flex items-center justify-start gap-4 hover:bg-blue-500 transition-colors'
  >
    {icon}
    <span className='text-white text-lg'>{text}</span>
  </motion.a>
);

const ContactLinks = () => (
  <div className='grid grid-cols-1 gap-4'>
    <ContactCard 
      icon={<FaFileAlt className="text-white text-2xl" />} 
      text="View Resume" 
      href="../../public/UmairAhmedResume.pdf"
    />
    <ContactCard 
      icon={<FaEnvelope className="text-white text-2xl" />} 
      text="Email Me" 
      href="mailto:u.ahmed.24377@khi.iba.edu.pk" 
    />
    <ContactCard 
      icon={<FaPhone className="text-white text-2xl" />} 
      text="Call Me" 
      href="tel:+923172003570" 
    />
    <ContactCard 
      icon={<FaGithub className="text-white text-2xl" />} 
      text="GitHub" 
      href="https://github.com/UMAIRAHMED-111/" 
    />
    {/* Add other cards as needed */}
  </div>
);

const ContactSection = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] ${styles.paddingX} ${styles.paddingY}`}>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={styles.sectionSubText}>Lets connect</p>
        <h2 className={styles.sectionHeadText}>Quick Links</h2>
      </motion.div>
      <ContactLinks />
    </div>
  );
};

export default SectionWrapper(ContactSection, "");

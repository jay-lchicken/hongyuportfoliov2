"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {useRef, useState} from "react";
import { Github, Linkedin, Mail, Code, Terminal, FileText, ChevronDown, ExternalLink, Cpu, Globe, Database, Smile, NotebookText } from "lucide-react";
import {ScrollTriggered} from "@/components/scrolltrigger";

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y:50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({title, description, tags, delay, link}) =>{

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return(
      <motion.div
      ref={ref}
      initial={{ opacity: 0, scale:0.5}}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5}}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      className="bg-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-teal-900/20 transition-all border border-slate-700"
    >
      <h3 className={"text-xl font-bold mb-3"}>{title}</h3>
      <p className={"text-slate-300 "}>{description}</p>
      <motion.div>
        
      </motion.div>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-slate-700 rounded-full text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <motion.button
        className="mt-4 flex items-center gap-1 text-teal-400 hover:text-teal-300"
        whileHover={{ x: 5 }}
        onClick={( ) => window.open(link, "_blank")}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        View Project <ExternalLink size={14} />
      </motion.button>
      </motion.div>
  )
}

const SkillItem = ({ icon, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <span className="text-xs sm:text-sm text-slate-200">{label}</span>
    </motion.div>
  );
};

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);

  const skills = [
    "Software Development",
    "Hardware Engineering",
    "AI",
    "Web Development",
    "3D Modelling"
  ];

  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight * 1.5,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#A2A392] text-slate-100">

      <nav className="w-full flex justify-between items-center fixed z-10 p-4 sm:p-6 backdrop-blur-md bg-slate-800 bg-opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl sm:text-2xl"
        >
          Lai Hong Yu
        </motion.div>
        <div className="flex space-x-3 sm:space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/jay-lchicken"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/hong-yu-lai-108771358/"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:joyjay606@gmail.com"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://hyblog.techtime.coffee/"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="Blog"
          >
            <NotebookText size={18} className="sm:w-5 sm:h-5" />
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 overflow-hidden py-20 md:py-0">
        <motion.div
          className="relative mb-6 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-3xl overflow-hidden shadow-xl"
            initial={{ scale: 0.1, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/IMG_0927.jpeg"
              alt="Lai Hong Yu"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="md:ml-8 lg:ml-12 max-w-lg px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:items-start items-center text-center md:text-left"
          >
            <motion.h2
              className="text-teal-600 font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 text-slate-800"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              Lai Hong Yu
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl text-slate-700 mb-4 md:mb-6"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 }}
            >
              Tech Enthusiast, Software/Hardware Engineer
            </motion.h2>

            <motion.div
              className="mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-slate-700 mb-4">
                Passionate about building innovative solutions that bridge hardware and software.
              </p>

              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-teal-700 bg-opacity-70 px-3 py-1 rounded-full text-xs sm:text-sm border border-teal-600 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(13, 148, 136, 0.8)",
                      boxShadow: "0 0 8px rgba(13, 148, 136, 0.5)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <motion.button
                className="bg-teal-700 hover:bg-teal-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-lg text-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(13, 148, 136, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
              >
                <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={scrollToAbout}
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <ChevronDown
            size={28}
            className={`${isHovering ? 'text-teal-600' : 'text-slate-700'} transition-colors sm:w-8 sm:h-8`}
          />
        </motion.div>
      </div>

      <div ref={scrollRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 bg-slate-800">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-16 sm:w-20 bg-teal-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="max-w-2xl mx-auto text-slate-300 px-4">
              I'm a passionate engineer with expertise in both software and hardware development.
              With experience across multiple domains, I enjoy creating solutions that solve real-world problems.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
            <SkillItem
              icon={<Code size={28} className="text-teal-400" />}
              label="Software Development"
              delay={0.1}
            />
            <SkillItem
              icon={<Cpu size={28} className="text-teal-400" />}
              label="Hardware Engineering"
              delay={0.2}
            />
            <SkillItem
              icon={<Globe size={28} className="text-teal-400" />}
              label="Web Development"
              delay={0.3}
            />
            <SkillItem
              icon={<Database size={28} className="text-teal-400" />}
              label="AI & Machine Learning"
              delay={0.4}
            />
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-10 bg-[#A2A392]">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">Featured Projects</h2>
            <div className="h-1 w-16 sm:w-20 bg-teal-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="max-w-2xl mx-auto text-slate-700 px-4">
              Check out some of my recent work and personal projects.
            </p>
          </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ">
            <ProjectCard
              title="Clicker Game"
              description="A fun and addictive clicker game built with NextJS."
              tags={["NextJS", "React", "Socket"]}
              delay={0.1}
              link={"https://clicks.techtime.coffee/"}
            />
            <ProjectCard
              title="XO Frenzy"
              description="A multiplayer tic-tac-toe game aimed to make the game more fair."
              tags={["Swift", "SwiftUI", "Algorithm"]}
              delay={0.2}
              link={"https://apple.co/4jdZj2T"}
            />
            <ProjectCard
              title="SpaceSync"
              description="A announcement app for the school, built with Next.js and Firebase. Web Version, Mobile Versions are available"
              tags={["Next.js", "Swift", "Firebase"]}
              delay={0.3}
                link={"https://apple.co/3Py3KYG"}
            />
            <ProjectCard
              title="Portfolio Website"
              description="Responsive portfolio website built with Next.js and Framer Motion for smooth animations."
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              delay={0.4}
                link={"/"}
            />
            <ProjectCard
              title="Rollwise"
              description="A attendance system for the school to streamline attendance taking, built with Next.js and Firebase. "
              tags={["Next.js", "Firebase", "ReactQR"]}
              delay={0.5}
              link={"https://attendance.techtime.coffee/"}
            />
          </div>
      </div>

      <div className="bg-slate-800 py-16 sm:py-20 px-4 sm:px-8 justify-center items-center flex flex-col">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Languages</h2>
            <div className="h-1 w-16 sm:w-20 bg-teal-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="max-w-2xl mx-auto text-slate-300 px-4">
              The languages and frameworks I am proficient in.
            </p>
          </AnimatedSection>
        <ScrollTriggered/>
        <p>Note: This portfolio was built by me with some help from AI</p>

      </div>
    </div>

  );
}
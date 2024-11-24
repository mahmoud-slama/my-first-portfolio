import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAngular,
  SiSpringboot,
  SiExpress,
  SiTypescript,
  SiDocker,
  SiC,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const skillsData = [
  { icon: <FaHtml5 className="w-20 h-20 mx-auto text-orange-500" />, label: 'HTML' },
  { icon: <FaCss3Alt className="w-20 h-20 mx-auto text-blue-500" />, label: 'CSS' },
  { icon: <FaJs className="w-20 h-20 mx-auto text-yellow-500" />, label: 'JavaScript' },
  { icon: <FaReact className="w-20 h-20 mx-auto text-blue-300" />, label: 'React' },
  { icon: <SiAngular className="w-20 h-20 mx-auto text-red-500" />, label: 'Angular' },
  { icon: <SiTypescript className="w-20 h-20 mx-auto text-blue-400" />, label: 'TypeScript' },
  { icon: <FaNodeJs className="w-20 h-20 mx-auto text-green-500" />, label: 'Node.js' },
  { icon: <SiExpress className="w-20 h-20 mx-auto text-gray-500" />, label: 'Express' },
  { icon: <SiSpringboot className="w-20 h-20 mx-auto text-green-600" />, label: 'Spring Boot' },
  { icon: <DiJava className="w-20 h-20 mx-auto text-orange-600" />, label: 'Java' },
  { icon: <SiMongodb className="w-20 h-20 mx-auto text-green-700" />, label: 'MongoDB' },
  { icon: <SiMysql className="w-20 h-20 mx-auto text-blue-700" />, label: 'MySQL' },
  { icon: <SiPostgresql className="w-20 h-20 mx-auto text-blue-500" />, label: 'PostgreSQL' },
  { icon: <SiC className="w-20 h-20 mx-auto text-blue-600" />, label: 'C' },
  { icon: <FaPython className="w-20 h-20 mx-auto text-yellow-400" />, label: 'Python' },
  { icon: <SiDocker className="w-20 h-20 mx-auto text-blue-400" />, label: 'Docker' },
  { icon: <FaGitAlt className="w-20 h-20 mx-auto text-orange-400" />, label: 'Git' },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#11587c] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* Technologies Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              aria-label={skill.label}
            >
              {skill.icon}
              <p className="my-4">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

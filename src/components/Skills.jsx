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

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#11587c] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I've worked with
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {/* Frontend */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaHtml5 className="w-20 h-20 mx-auto text-orange-500" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaCss3Alt className="w-20 h-20 mx-auto text-blue-500" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaJs className="w-20 h-20 mx-auto text-yellow-500" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaReact className="w-20 h-20 mx-auto text-blue-300" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiAngular className="w-20 h-20 mx-auto text-red-500" />
            <p className="my-4">Angular</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiTypescript className="w-20 h-20 mx-auto text-blue-400" />
            <p className="my-4">TypeScript</p>
          </div>

          {/* Backend */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaNodeJs className="w-20 h-20 mx-auto text-green-500" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiExpress className="w-20 h-20 mx-auto text-gray-500" />
            <p className="my-4">Express</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiSpringboot className="w-20 h-20 mx-auto text-green-600" />
            <p className="my-4">Spring Boot</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiJava className="w-20 h-20 mx-auto text-orange-600" />
            <p className="my-4">Java</p>
          </div>

          {/* Databases */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiMongodb className="w-20 h-20 mx-auto text-green-700" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiMysql className="w-20 h-20 mx-auto text-blue-700" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiPostgresql className="w-20 h-20 mx-auto text-blue-500" />
            <p className="my-4">PostgreSQL</p>
          </div>

          {/* Languages */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiC className="w-20 h-20 mx-auto text-blue-600" />
            <p className="my-4">C</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaPython className="w-20 h-20 mx-auto text-yellow-400" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiDocker className="w-20 h-20 mx-auto text-blue-400" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaGitAlt className="w-20 h-20 mx-auto text-orange-400" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

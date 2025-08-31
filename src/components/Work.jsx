import React from 'react'
import realEstate from '../assests/image.png'
import car from '../assests/car.jpeg'
import pfeProject from '../assests/rahma.png'
import recruitApp from '../assests/MS4.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#11587c] py-16' >
            <div className='max-w-[1000px] mx-auto px-4 sm:px-6 flex flex-col justify-center w-full h-full'>
            <div className='text-center sm:text-left pb-8'>
              <p className='text-3xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
              <p className='py-6 text-base sm:text-lg'>{'// Check out some of my recent work'}</p>
            </div>
            {/*container*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

{/* Grid Item*/}
           
            
            
{/* Grid Item*/}
<div style={{backgroundImage:`url(${realEstate})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div min-h-[200px] sm:min-h-[250px] bg-cover bg-center transform hover:scale-105 transition-all duration-300'>
                {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100 bg-[#11587c]/90 w-full h-full rounded-lg flex flex-col justify-center items-center p-4 transition-all duration-300'>
                    <span className='text-xl sm:text-2xl font-bold text-white text-center mb-4'>
                        Credit APP Frontend Application
                    </span>
                    <a href="https://github.com/nadiajazi/CreditApplicationFrontend" target="_blank" rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-base sm:text-lg hover:bg-pink-600 hover:text-white transition-all duration-300">
                            View Code
                        </button>
                    </a>
                </div>
            </div>
            <div style={{backgroundImage:`url(${realEstate})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div min-h-[200px] sm:min-h-[250px] bg-cover bg-center transform hover:scale-105 transition-all duration-300'>
                {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100 bg-[#11587c]/95 w-full h-full rounded-lg flex flex-col justify-center items-center p-4 transition-all duration-300'>
                    <span className='text-xl sm:text-2xl font-bold text-white text-center mb-4'>
                        Credit App Backend Application
                    </span>
                    <p className='text-sm sm:text-base text-gray-200 text-center mb-4'>
                        Backend API pour l'application de gestion des crédits avec authentification sécurisée et gestion des données.
                    </p>
                    <a href="https://github.com/mahmoud-slama/Creditappbackend" target="_blank" rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold hover:bg-pink-600 hover:text-white transition-all duration-300">
                            Code
                        </button>
                    </a>
                </div>
            </div>
            
{/* Grid Item - Rentweels */}
            <div style={{backgroundImage:`url(${car})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div min-h-[200px] sm:min-h-[250px] bg-cover bg-center transform hover:scale-105 transition-all duration-300'>
                {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100 bg-[#11587c]/95 w-full h-full rounded-lg flex flex-col justify-start items-center p-6 transition-all duration-300 overflow-y-auto'>
                    <span className='text-xl sm:text-2xl font-bold text-white text-center mb-4'>
                        Rentweels Mobile App 
                    </span>
                    <p className='text-sm sm:text-base text-gray-200 text-justify mb-4'>
                        Application mobile de location de voitures développée avec React Native, Express.js et MongoDB. Simplifie le processus de location en permettant aux clients de :
                    </p>
                    <div className='space-y-2 text-sm sm:text-base text-gray-300'>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>Sélectionner un véhicule</li>
                            <li>Remplir un formulaire en ligne</li>
                            <li>Télécharger les documents requis (ID, passeport)</li>
                            <li>Choisir les dates de location</li>
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <a href="https://github.com/mahmoud-slama/NEW-Rentweels" target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold hover:bg-pink-600 hover:text-white transition-all duration-300">
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

{/* Grid Item - Easy-Recruit */}
            <div style={{backgroundImage:`url(${recruitApp})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div min-h-[200px] sm:min-h-[250px] bg-cover bg-center transform hover:scale-105 transition-all duration-300'>
                {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100 bg-[#11587c]/95 w-full h-full rounded-lg flex flex-col justify-start items-center p-6 transition-all duration-300 overflow-y-auto'>
                    <span className='text-xl sm:text-2xl font-bold text-white text-center mb-4'>
                        Easy-Recruit AI App
                    </span>
                    <p className='text-sm sm:text-base text-gray-200 text-justify mb-4'>
                        Application web intelligente de recrutement conçue pour les entreprises, intégrant des fonctionnalités avancées d'IA.
                    </p>
                    <div className='space-y-2 text-sm sm:text-base text-gray-300'>
                        <p className='font-semibold'>Caractéristiques principales :</p>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>Filtrage automatique des CV par IA</li>
                            <li>Analyse intelligente des candidats</li>
                            <li>Planification automatisée des entretiens</li>
                            <li>Interface intuitive pour les recruteurs</li>
                        </ul>
                    </div>
                    <div className='mt-4 flex gap-4'>
                        <a href="https://github.com/mahmoud-slama/Easy-recruitApp" target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold hover:bg-pink-600 hover:text-white transition-all duration-300">
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
{/* Grid Item - PFE Project */}
            <div style={{backgroundImage:`url(${pfeProject})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div min-h-[200px] sm:min-h-[250px] bg-cover bg-center transform hover:scale-105 transition-all duration-300'>
                {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100 bg-[#11587c]/95 w-full h-full rounded-lg flex flex-col justify-start items-center p-6 transition-all duration-300 overflow-y-auto'>
                    <span className='text-xl sm:text-2xl font-bold text-white text-center mb-4'>
                        Application Web de Gestion des Associations
                    </span>
                    <p className='text-sm sm:text-base text-gray-200 text-justify mb-4'>
                        Projet de fin d'études réalisé chez Devwise pour l'obtention du diplôme d'ingénieur en génie informatique à l'ENISo. Cette application web centralisée et automatisée permet la gestion efficace des donateurs, bénéficiaires, familles et dons.
                    </p>
                    <div className='space-y-2 text-sm sm:text-base text-gray-300'>
                        <p className='font-semibold'>Technologies clés :</p>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>Gestion des profils et suivi des dons</li>
                            <li>Paiements en ligne et gestion des parrainages</li>
                            <li>Communication instantanée</li>
                            <li>DevOps : Docker, Kubernetes, AWS</li>
                            <li>CI/CD avec GitLab</li>
                        </ul>
                    </div>
                    <div className='mt-4 flex gap-4'>
                      
                        <a href="http://51.38.51.70:4201/" target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg px-4 py-2 bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-gray-700 transition-all duration-300">
                                Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Work

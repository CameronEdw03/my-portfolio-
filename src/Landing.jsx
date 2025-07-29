import { useState, useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [hasClickedNext, setHasClickedNext] = useState(false);

  const handleGithubClick = () => {
    window.open('https://github.com/CameronEdw03');
  };

  const projects = [
    {
      title: '/CodingTrackerHeader.svg',
      description: `I created this code tracker using React JS with TailwindCSS. It allows users to track their coding
      progress by adding projects, tracking time spent on each project, and viewing their overall coding statistics.`,
      techStack: 'React JS, TailwindCSS',
      codeLink: 'https://github.com/CameronEdw03/code-tracker',
      image: '/CodeTrackerScreenShot.svg',
    },
    {
      title: '/CoffeeTrackerHeader.svg',
      description: `This coffee tracker app allows users to log their coffee consumption, track their caffeine intake, and view their coffee history. The front-end was built using React JS with tailwindCSS and the back end was made using fastAPI.`,
      techStack: 'React JS, TailwindCSS, FastAPI',
      codeLink: 'https://github.com/CameronEdw03/Coffee-Log-?tab=readme-ov-file',
      image: '/CoffeeTrackerScreenshot.svg',
    }
  ];

  const handleNext = () => {
    setHasClickedNext(true);
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setFade(false);
    }, 300);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='fixed top-6 left-8 z-50 '>
        <button className='flex items-center gap-2 px-4 py-2 text-black' onClick={handleGithubClick}>
          <FaGithub className='text-[25px] text-stone-400 transition-all duration-300 hover:text-orange-500 cursor-pointer' />
          <span className='font-semibold'>Cam Edwards</span>
        </button>
      </div>

      <div className='fixed top-6 right-20 z-50'>
        <button className='bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-black hover:scale-110 transition-all duration-300 cursor-pointer w-30 h-10'>
          Contact
        </button>
      </div>

      <img
        src='/MainContent.svg'
        alt='Main Content'
        className='w-170 mt-50 object-cover'
      />
      <img
        src='/LandingBio.svg'
        alt='Landing Bio'
        className='mt-8'
      />

      <div className="flex flex-row items-center justify-center gap-6 mt-8">
        <button className='bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 hover:scale-110 transition-all duration-300 cursor-pointer w-40 h-12' onClick={() => document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' })}>
          About Me
        </button>
        <button className='bg-none border-2 text-black px-4 py-2 rounded-full hover:bg-black hover:border-none hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer w-40 h-12' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
          See Projects
        </button>
      </div>

      <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white mt-32" id='about-me'>
        <img
          src='/AboutMe.svg'
          alt='About Me'
        />
      </div>

      <div className='w-full flex flex-col items-center justify-center min-h-screen bg-white -mt-50 -ml-140' id='projects'>
        <img
          src='/ProjectsHeader.svg'
          alt='Projects Header'
        />

        <img
          src={currentProject.image}
          alt="project image"
          className={`w-200 mt-8 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />

        <div className="flex gap-6 mt-8">
          {hasClickedNext && (
            <button
              className="text-stone-400 flex items-center gap-2 font-semibold text-[20px] transition-all duration-300 hover:text-orange-500 cursor-pointer hover:scale-110"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          <button
            className="text-stone-400 flex items-center gap-2 font-semibold text-[20px] transition-all duration-300 hover:text-orange-500 cursor-pointer hover:scale-110"
            onClick={handleNext}
          >
            Next <IoIosArrowRoundForward className="text-[30px]" />
          </button>
        </div>

        <div className='flex flex-col items-start justify-center ml-380 -mt-140'>
          <img
            src={currentProject.title}
            alt="Project Title"
            className='-ml-10'
          />
          <h1 className='text-black font-semibold mt-8 -ml-30'>Description</h1>
          <p className='text-stone-600 mt-2 -ml-30'>
            {currentProject.description}
          </p>
          <h1 className='text-black font-semibold mt-10 -ml-30'>Tech Stack</h1>
          <p className='text-stone-600 mt-2 -ml-30'>{currentProject.techStack}</p>
          <button className='bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-black hover:scale-110 transition-all duration-300 cursor-pointer w-30 h-10 mt-15' onClick={() => window.open(currentProject.codeLink)}>
            View Code
          </button>
          <button className='bg-none border-2 text-black px-4 py-2 rounded-full hover:bg-black hover:border-none hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer w-30 h-10 ml-40 -mt-10'>
            View Demo
          </button>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center bg-stone-100 py-20 mt-20'>
        <div className='flex flex-row items-start justify-between w-full max-w-6xl px-8'>
          <div className='flex flex-col items-start'>
            <h1 className='text-black font-semibold text-[24px] mb-4'>Contact</h1>
            <p className='text-stone-600 mb-2'>
              Email: 
              <span className='text-orange-500 hover:text-black transition-all duration-300 cursor-pointer ml-2'>
                Camedwards70@gmail.com
              </span>
            </p>
            <p className='text-stone-600 mb-2'>
              Location: 
              <span className='text-stone-800 ml-2'>Available Remotely</span>
            </p>
          </div>
          
          <div className='flex flex-col items-start'>
            <h1 className='text-black font-semibold text-[24px] mb-4'>Quick Links</h1>
            <button 
              className='text-stone-600 hover:text-orange-500 transition-all duration-300 cursor-pointer mb-2'
              onClick={() => document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </button>
            <button 
              className='text-stone-600 hover:text-orange-500 transition-all duration-300 cursor-pointer mb-2'
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Projects
            </button>
            <button 
              className='text-stone-600 hover:text-orange-500 transition-all duration-300 cursor-pointer'
              onClick={handleGithubClick}
            >
              GitHub
            </button>
          </div>
          
          <div className='flex flex-col items-start'>
            <h1 className='text-black font-semibold text-[24px] mb-4'>Skills</h1>
            <p className='text-stone-600 mb-2'>JavaScript</p>
            <p className='text-stone-600 mb-2'>Python</p>
            <p className='text-stone-600 mb-2'>MySQL</p>
            <p className='text-stone-600'>Java</p>
          </div>
        </div>
        
        <div className='w-full max-w-6xl px-8 mt-12 pt-8 border-t border-stone-300'>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-stone-600 text-[14px]'>
              © {new Date().getFullYear()} Cameron Edwards. All rights reserved.
            </p>
            <p className='text-stone-600 text-[14px]'>
              Built with React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
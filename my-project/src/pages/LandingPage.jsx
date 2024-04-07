import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const delay = 150; 
  const pauseDuration = 2500; 
  const textToType = 'Welcome To LingoLadder';
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setText(textToType.substring(0, index));

        if (index === textToType.length) {
          setPaused(true); 
          setTimeout(() => {
            setIndex(0); 
            setPaused(false); 
          }, pauseDuration);
        } else {
          setIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [index, paused]);

  return (
    <div className='bg-gradient-to-br h-screen w-full flex flex-col justify-center items-center from-blue-500 via-blue-700 to-blue-900'>
      <div className="text-center mb-10 text-6xl font-bold text-white">
        {text}
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className="flex flex-row justify-center gap-8 align-middle items-center mt-10">
          <button
            className="h-12 w-32 text-xl text-center rounded-2xl border-2 border-double border-white bg-black bg-opacity-70  px-5 py-2 text-white backdrop-blur-20 font-bold uppercase tracking-wide transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="h-12 w-42 text-xl text-center rounded-2xl border-2 border-double border-white bg-black bg-opacity-70 px-5 py-2 text-white backdrop-blur-20 font-bold uppercase tracking-wide transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            onClick={() => navigate('/signup')}
          >
            Sign-up
          </button>
        </div>   
        <div className='justify-between mt-10'>
          <button 
            className="h-12 w-42 text-xl text-center rounded-2xl border-2 border-double border-white bg-black bg-opacity-70 px-5 py-2 text-white backdrop-blur-20 font-bold uppercase tracking-wide transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            onClick={() => navigate('/language')}
          >
            Get started
          </button>
        </div> 
      </div>
    </div>
  );
};

export default LandingPage;

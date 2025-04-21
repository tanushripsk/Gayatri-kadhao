import React from "react";
import Particles from "react-tsparticles";
import CountUp from "react-countup";
import { loadSlim } from "tsparticles-slim";

const SpaceBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative w-full h-screen bg-[#0b0c2a] overflow-hidden">
      {/* Star particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0b0c2a" },
          particles: {
            number: {
              value: 400,
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.7,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
            },
            size: {
              value: 1.5,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Nebula glows */}
      <div className="absolute w-full h-full pointer-events-none z-[-1]">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-purple-900 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] bg-blue-800 opacity-20 rounded-full blur-2xl"></div>
      </div>

      {/* Centered text content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 text-white text-center">
        {/* <div className="space-y-4 animate-float">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Cosmos</h1>
          <p className="text-lg md:text-xl text-gray-300">Exploring the universe of creativity and code</p>
        </div> */}
        <h2 className="absolute text-[200px] font-bold text-white/10 -top-10 left-10 select-none z-0">
          Gayatri
        </h2>
        <h2 className="absolute text-[200px] font-bold text-white/10 -bottom-10 left-0 rotate-90 select-none z-0">
          Kadhao
        </h2>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
          {/* Left Text Side */}
          <div className="text-white space-y-5 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Hello I'm</h2>
            <h1 className="text-5xl font-bold">Gayatri Kadhao</h1>
            <h3 className="text-xl font-semibold">
              Co-Direactor Of PSk Technologies Pvt. Ltd IT Company Nagpur
            </h3>
            <p className="text-white/90 max-w-md mx-auto md:mx-0">
              A designer and developer passionate about merging creativity with
              Technologies
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold">
                Get a Quote
              </button>
              <button className="text-white hover:underline font-semibold">
                About Me
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-4 relative">
              <img
                src="/images/Gayatri-kadhao.png"
                alt="Gayatri Kadhao"
                className="w-65 h-96 object-cover rounded-md"
              />

              {/* 12 Years Badge */}
              <div className="absolute -top-8 -left-8 bg-white px-4 py-2 rounded-md shadow-md flex items-center gap-2">
                <span className="text-blue-600 text-2xl font-bold">
                  <CountUp end={12} duration={3} />
                </span>
                <span className="text-sm font-semibold text-gray-700 leading-tight">
                  Years of
                  <br />
                  Success
                </span>
              </div>

              {/* Trophy Icon */}
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-md shadow-md">
                <span className="text-yellow-500 text-3xl">🏆</span>
              </div>

              {/* Projects Completed Badge */}
              <div className="absolute -bottom-8 right-0 bg-white px-4 py-2 rounded-md shadow-md flex items-center gap-2">
                <span className="text-pink-600 text-3xl font-bold">
                  <CountUp end={800} duration={3} />+
                </span>
                <span className="text-sm font-semibold text-gray-700 leading-tight">
                  Projects
                  <br />
                  Completed
                </span>
              </div>

              {/* Circular Text Ring (mock) */}
              <div className="absolute bottom-4 left-4 w-32 h-32 border border-dashed rounded-full flex items-center justify-center text-xs text-white/110 text-center animate-spin-slow">
                <div className="animate-spin-reverse">
                  Co-Director Of Psk Technologies Pvt. Ltd
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SpaceBackground;

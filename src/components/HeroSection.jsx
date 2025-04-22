import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#1d1c3b] min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side - Images and icons */}
        <div className="relative flex flex-col items-center gap-6">
          <div className="relative z-10">
            <img
              src="/images/main-person-yellow.png"
              alt="Main Person"
              className="rounded-lg w-80 h-auto shadow-lg"
            />
            <img
              src="/images/wordpress-icon.png"
              alt="WordPress Icon"
              className="absolute top-0 -right-12 w-14 h-14 bg-[#00749C] rounded-md p-2 shadow-md"
            />
            <img
              src="/images/drupal-icon.png"
              alt="Drupal Icon"
              className="absolute bottom-0 right-0 w-14 h-14 bg-[#00749C] rounded-md p-2 shadow-md"
            />
          </div>

          <div className="relative z-0 -mt-10">
            <img
              src="/images/Gayatri-kadhao.png"
              alt="Gamer Person"
              className="rounded-lg w-60 h-auto shadow-lg"
            />
            <img
              src="/images/joomla-icon.png"
              alt="Joomla Icon"
              className="absolute top-1/2 -left-10 w-14 h-14 bg-[#333] rounded-md p-2 shadow-md"
            />
            <img
              src="/images/laravel-icon.png"
              alt="Laravel Icon"
              className="absolute top-0 left-1/2 w-14 h-14 bg-[#F55247] rounded-md p-2 shadow-md"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="text-white space-y-6">
          <h4 className="text-red-400 text-lg font-semibold">I'm a Developer</h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I Develop Application that Help People
          </h1>
          <p className="text-gray-300 text-base">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat.
          </p>
          <p className="text-gray-300 text-base">
            Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-full">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

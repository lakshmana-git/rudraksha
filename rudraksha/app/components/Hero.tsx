const Hero = () => {
    return (
      <div id='home' className="flex flex-col items-center justify-center h-screen text-white text-center px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        With the direction of the stars and divine blessings, discover the true path of your life
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl">By Ganesh Babu Tadiparthy</p>
      <button className="px-6 py-2 bg-amber-500 text-zinc-900 rounded-full hover:bg-amber-400 transition mt-2">
      <a
                href="tel:+919876543210"
              >
                Consult Now
              </a>
      </button>
    </div>
    
    );
  };
  
  export default Hero;
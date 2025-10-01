import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToRegistration = () => {
    const element = document.querySelector('#registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-6">
            <p className="text-yellow-400 text-sm font-semibold tracking-wider">OCTOBER 10-11, 2025</p>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text animate-gradient">
            GEO CODE INDIA
          </span>
          <br />
          <span className="text-white text-4xl md:text-5xl mt-4 block">Hackathon 2025</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          Code. Create. Conquer.
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-400 text-lg italic">
            "The best way to predict the future is to invent it." – Alan Kay
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 text-gray-300">
            <Calendar className="text-yellow-400" size={24} />
            <span className="text-lg">22 Hours of Innovation</span>
          </div>
          <div className="hidden sm:block w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin className="text-orange-500" size={24} />
            <span className="text-lg">CE Kidangoor, Kottayam</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToRegistration}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
          >
            <span className="relative z-10 flex items-center justify-center">
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <a
            href="#about"
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <p className="text-3xl font-bold text-yellow-400 mb-2">₹15K</p>
            <p className="text-gray-400 text-sm">Prize Pool</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <p className="text-3xl font-bold text-orange-400 mb-2">25</p>
            <p className="text-gray-400 text-sm">Teams Max</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <p className="text-3xl font-bold text-yellow-400 mb-2">22h</p>
            <p className="text-gray-400 text-sm">Hackathon</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <p className="text-3xl font-bold text-orange-400 mb-2">2-4</p>
            <p className="text-gray-400 text-sm">Team Size</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

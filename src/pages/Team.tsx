import { Users,  MapPin, Shield, User } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Hackathon Theme
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">Meet the brilliant minds behind this hackathon</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/20">
          <div className="text-center mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Prepare yourself for one of the most thrilling hackathon events of the year—22 hours of innovation, coding, and teamwork!
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Bright young minds from across colleges will come together to tackle real-world{' '}
              <a 
                href="http://digipin.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-orange-400 font-semibold underline transition-colors"
              >
                DIGIPIN
              </a>{' '}
              challenges spanning:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Geolocation Services</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Drive innovation in logistics, e-commerce, and urban planning with cutting-edge geolocation technologies
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Digital Addressing</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Build secure and scalable digital addressing systems for the modern digital landscape
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <User className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Citizen Applications</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Create citizen-centric applications that leverage DIGIPIN APIs for enhanced public services
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-6 py-3 border border-yellow-500/30">
              <Users className="text-yellow-400 mr-2" size={20} />
              <span className="text-gray-300 font-semibold">22 Hours of Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

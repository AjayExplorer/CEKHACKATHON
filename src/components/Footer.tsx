import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-4">
              GEO CODE INDIA
            </h3>
            <p className="text-gray-400 text-sm">
              Code. Create. Conquer.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Hackathon 2025
            </p>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About Event
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Register Now
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  College of Engineering Kidangoor, Kottayam
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:geocodeindiahackathon@gmail.com" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  geocodeindiahackathon@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+91 6238128951" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                +91 6238 128 951
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Geo Code India Hackathon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <p className="text-gray-500 text-sm">
                Powered by <span className="text-yellow-400">Eallisto</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

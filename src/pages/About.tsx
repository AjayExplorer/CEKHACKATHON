import { Target, Users, Trophy, Briefcase, Award, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-yellow-400" size={32} />,
      title: '22-Hour Marathon',
      description: '22 hours of intense coding + 3.5 hours for presentation and evaluation',
    },
    {
      icon: <Trophy className="text-orange-500" size={32} />,
      title: 'Prize Pool',
      description: '₹15,000 total (₹10,000 First Place, ₹5,000 Second Place)',
    },
    {
      icon: <Briefcase className="text-yellow-400" size={32} />,
      title: 'Internship Opportunities',
      description: 'Gain exposure to business partners and potential internship offers',
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: 'Team Competition',
      description: 'Teams of 2-4 members, up to 25 teams from various colleges',
    },
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: 'Certificates',
      description: 'All participants receive certificates of participation',
    },
    {
      icon: <Coffee className="text-orange-500" size={32} />,
      title: 'Full Amenities',
      description: 'Refreshments and meals provided throughout the event',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              About the Hackathon
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Prepare yourself for one of the most exciting hackathon events of the year—22 hours of creativity, code, and teamwork! Bright young minds come together for this inter-college competition to tackle real-world DIGIPIN-focused issue statements, which range from geolocation-driven services in logistics, e-commerce, and urban planning to digital addressing systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              After competing in an intense marathon, participants will present, be evaluated, and get their prizes in front of a panel of faculty judges, Eallisto representatives, and industry professionals.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Event Highlights
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{highlight.title}</h4>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/30">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Registration Details</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">
                  <span className="font-semibold text-yellow-400">₹200</span> per participant
                </span>
              </div>
              <div className="hidden md:block w-px h-8 bg-yellow-500/30"></div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">
                  Open to <span className="font-semibold text-orange-400">all college students</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
            One concept, one line of code, one innovation at a time—come help us shape the digital future!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

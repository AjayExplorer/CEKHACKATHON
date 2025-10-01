import { useState } from 'react';
import { Users, CreditCard } from 'lucide-react';

const Registration = () => {
  const [members, setMembers] = useState(2);
  const pricePerMember = 200;
  const total = members * pricePerMember;
  const registrationLink = 'https://example.com/register';

  return (
    <section id="registration" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Register Now
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">Secure your spot in the hackathon</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/20 space-y-8">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
              <Users className="mr-3 text-yellow-400" size={28} />
              Team Members
            </h3>
            <p className="text-gray-400 text-sm mb-4">Teams must have 2-4 members</p>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Number of Members</label>
              <select
                value={members}
                onChange={(e) => setMembers(parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              >
                <option value={2}>2 Members</option>
                <option value={3}>3 Members</option>
                <option value={4}>4 Members</option>
              </select>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-6 border border-orange-500/50">
            <div className="flex items-start space-x-4">
              <CreditCard className="text-orange-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Registration Fee</h4>
                <p className="text-gray-300 mb-2">
                  ₹{pricePerMember} per participant × {members} members ={' '}
                  <span className="text-yellow-400 font-bold text-2xl">₹{total}</span>
                </p>
                <p className="text-gray-400 text-sm">Pay online after clicking Register.</p>
              </div>
            </div>
          </div>

          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;

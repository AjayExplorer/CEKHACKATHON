import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0 text-yellow-400">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can participate in the hackathon?',
      answer:
        'The hackathon is open to all college students from any institution. Teams can be inter-college, giving you the opportunity to collaborate with students from different backgrounds and disciplines.',
    },
    {
      question: 'What is the team size requirement?',
      answer:
        'Teams must consist of 2-4 members. You can form your own team or join one during the registration process. Solo participation is not allowed as we emphasize teamwork and collaboration.',
    },
    {
      question: 'What is the registration fee?',
      answer:
        'The registration fee is ₹200 per participant. This fee covers meals, refreshments, certificates, and access to all hackathon facilities and mentorship throughout the event.',
    },
    {
      question: 'What problem statements will we work on?',
      answer:
        'Teams will tackle real-world DIGIPIN-focused challenges ranging from geolocation-driven services in logistics, e-commerce, and urban planning to digital addressing systems. Detailed problem statements will be provided at the start of the hackathon.',
    },
    {
      question: 'What are the prizes?',
      answer:
        'The total prize pool is ₹15,000. First place receives ₹10,000 and second place receives ₹5,000. Additionally, winners may receive internship opportunities from our business partners, and all participants receive certificates.',
    },
    {
      question: 'Do I need to bring my own equipment?',
      answer:
        'Yes, participants must bring their own laptops, chargers, and any other hardware they might need. We will provide power outlets, internet connectivity, and workspace for all teams.',
    },
    {
      question: 'Will food and beverages be provided?',
      answer:
        'Yes! All participants will receive meals (breakfast, lunch, dinner) and refreshments (snacks and beverages) throughout the 22-hour hackathon period.',
    },
    {
      question: 'How will projects be evaluated?',
      answer:
        'Projects will be evaluated by a panel of faculty judges, Eallisto representatives, and industry professionals. Criteria include innovation, technical implementation, presentation quality, and practical applicability to the problem statement.',
    },
    {
      question: 'Can we use existing code or libraries?',
      answer:
        'Yes, you can use existing libraries, frameworks, and APIs. However, the core solution must be developed during the hackathon period. Pre-built complete solutions are not allowed.',
    },
    {
      question: 'What happens after the 22-hour coding period?',
      answer:
        'After the 22-hour hackathon concludes, teams will have 3.5 hours for presentations and evaluation. Each team will present their solution to the judges, followed by a Q&A session and final evaluation.',
    },
    {
      question: 'Is accommodation provided?',
      answer:
        'The hackathon is a continuous 22-hour event, so participants typically stay overnight at the venue. We provide a comfortable workspace where you can rest if needed, but formal accommodation is not provided.',
    },
    {
      question: 'How many teams can participate?',
      answer:
        'We are accepting up to 25 teams for this hackathon. Registration is on a first-come, first-served basis, so we recommend registering early to secure your spot.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">Everything you need to know about the hackathon</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Feel free to reach out to us directly. We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

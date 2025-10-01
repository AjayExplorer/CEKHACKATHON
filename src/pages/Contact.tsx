import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const result = document.getElementById('result') as HTMLDivElement;

    if (form && result) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait...";
        result.style.color = "#fbbf24"; // yellow color

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        })
        .then(async (response) => {
          const json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.style.color = "#10b981"; // green color for success
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.style.color = "#ef4444"; // red color for error
          }
        })
        .catch(error => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
          result.style.color = "#ef4444"; // red color for error
        })
        .then(function() {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 3000);
        });
      });
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">We're here to answer any questions you may have</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">
                      College of Engineering Kidangoor
                      <br />
                      Kottayam, Kerala
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:geocodeindiahackathon@gmail.com"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      info@geocodeindia.com
                    </a>
                    <br />
                    <a
                      href="mailto:geocodeindiahackathon@gmail.com"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      geocodeindiahackathon@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:916238128951"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      +91 6238 128 951
                    </a>
                    <br />
                    <a
                      href="tel:+918138977809"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                     +91 81389 77809
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Event Dates</h4>
                    <p className="text-gray-400">
                      October 10-11, 2025
                      <br />
                      Registration: 9:00 AM, Day 1
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
              <p className="text-gray-400 mb-4">
                For immediate assistance, please reach out via WhatsApp or call us directly. We typically
                respond to emails within 24 hours.
              </p>
              <a
                href="https://wa.me/8138977809"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form id="contact-form" className="space-y-4" method="POST">
                <input type="hidden" name="access_key" value="b6afdc64-deec-49ba-bef4-999afa5b93a5" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Hackathon Website" />
                <input type="checkbox" name="botcheck" id="" style={{display: 'none'}} />
                
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
                >
                  Send Message
                </button>
                <div id="result" className="mt-4 text-center"></div>
              </form>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1644240883043!2d76.61783997478896!3d9.666988590422111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d293a982ceeb%3A0xd62bf193983589fe!2sCollege%20of%20Engineering%20Kidangoor!5e0!3m2!1sen!2sin!4v1759320892800!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College of Engineering Kidangoor Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

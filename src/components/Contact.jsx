import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <a
            href="https://github.com/nguyenvanlamm"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center text-center group py-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-800 border-2 border-gray-700 flex items-center justify-center 
                          group-hover:border-accent mb-4 transition-all duration-300">
              <FaGithub className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
              GitHub
            </h3>
            <p className="text-gray-400 text-sm mt-1">@nguyenvanlamm</p>
          </a>

          <a
            href="https://linkedin.com/in/nguyen-van-lam-454361271"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center text-center group py-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-800 border-2 border-gray-700 flex items-center justify-center 
                          group-hover:border-accent mb-4 transition-all duration-300">
              <FaLinkedin className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
              LinkedIn
            </h3>
            <p className="text-gray-400 text-sm mt-1">Nguyen Van Lam</p>
          </a>

          <a
            href="mailto:lamnv260398@gmail.com"
            className="card flex flex-col items-center text-center group py-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-800 border-2 border-gray-700 flex items-center justify-center 
                          group-hover:border-accent mb-4 transition-all duration-300">
              <FaEnvelope className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
              Email
            </h3>
            <p className="text-gray-400 text-sm mt-1 truncate w-full">lamnv260398@gmail.com</p>
          </a>

          <div className="card flex flex-col items-center text-center group py-8">
            <div className="w-14 h-14 rounded-xl bg-gray-800 border-2 border-gray-700 flex items-center justify-center 
                          mb-4">
              <FaMapMarkerAlt className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-white">
              Location
            </h3>
            <p className="text-gray-400 text-sm mt-1">Vietnam</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="mailto:lamnv260398@gmail.com"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaEnvelope className="w-4 h-4" />
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Nguyen Van Lam. Built with ReactJS & TailwindCSS.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nguyenvanlamm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nguyen-van-lam-454361271"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#home"
              className="text-gray-500 hover:text-accent transition-colors text-sm"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-accent font-mono text-sm mb-4 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Nguyen Van Lam
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 animate-slide-up-delayed">
            IT Developer / Unity Developer / Web Developer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up-delayed">
            Passionate about creating innovative digital experiences. 
            Specializing in game development, web applications, and exploring the world of AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delayed">
            <a
              href="#contact"
              className="btn-outline"
            >
              <span className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" />
                Get In Touch
              </span>
            </a>
            <a
              href="https://github.com/nguyenvanlamm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-gray-400 font-semibold rounded-lg border-2 border-gray-700 
                       hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in">
            <a
              href="https://github.com/nguyenvanlamm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nguyen-van-lam-454361271"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lamnv260398@gmail.com"
              className="text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-accent transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

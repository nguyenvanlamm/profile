const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              I'm an IT Developer with a passion for creating innovative solutions and exploring 
              new technologies. My journey in software development started with curiosity about 
              how things work, and it has evolved into a deep love for building impactful applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently, I'm focused on expanding my expertise in AI and Machine Learning while 
              continuing to develop robust web applications and engaging games. I believe in 
              continuous learning and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or working on personal development goals.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="skill-tag">
                Curious
              </span>
              <span className="skill-tag">
                Passionate
              </span>
              <span className="skill-tag">
                Dedicated
              </span>
              <span className="skill-tag">
                Always Learning
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 shadow-3d">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">4+</div>
                  <div className="text-gray-400 text-sm">Years Unity Dev</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">2+</div>
                  <div className="text-gray-400 text-sm">Years Web Dev</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">2+</div>
                  <div className="text-gray-400 text-sm">Months AI/ML</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">∞</div>
                  <div className="text-gray-400 text-sm">Curiosity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

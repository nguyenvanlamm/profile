const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
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
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20">
                Curious
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20">
                Passionate
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20">
                Dedicated
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono border border-accent/20">
                Always Learning
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl p-8 border border-accent/30">
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
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              I'm an <span className="text-white font-semibold">IT Developer</span> passionate about 
              building <span className="text-white font-semibold">innovative solutions</span>. 
              Currently focusing on <span className="text-white font-semibold">AI/ML</span>, 
              <span className="text-white font-semibold">web applications</span>, and 
              <span className="text-white font-semibold">game development</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              4+ years with Unity, 6+ months in AI/ML. I believe in 
              <span className="text-white font-semibold"> continuous learning</span> and 
              staying ahead with the latest tech.
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
                  <div className="text-4xl font-bold text-accent mb-2">6+</div>
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

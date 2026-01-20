import { FaGamepad, FaGlobe, FaBrain } from 'react-icons/fa';

const experiences = [
  {
    icon: FaGamepad,
    title: 'Unity Development',
    duration: '4+ Years',
    details: [
      'Developed interactive 3D games and applications',
      'Created VR experiences with immersive gameplay',
      'Built cross-platform games for multiple devices',
      'Optimized performance and user experience',
    ],
  },
  {
    icon: FaGlobe,
    title: 'Web Development',
    duration: '2+ Years',
    details: [
      'Built responsive web applications using ReactJS',
      'Developed full-stack solutions with modern frameworks',
      'Implemented responsive designs for all devices',
      'Created RESTful APIs and integrated services',
    ],
  },
  {
    icon: FaBrain,
    title: 'AI / Machine Learning',
    duration: '2+ Months',
    details: [
      'Exploring AI concepts and implementations',
      'Learning machine learning algorithms',
      'Working on AI-powered application projects',
      'Staying updated with latest AI developments',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gray-800 border-2 border-gray-700 
                              flex items-center justify-center mb-6 
                              group-hover:border-accent group-hover:-translate-y-1 transition-all duration-300">
                <exp.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-accent font-mono text-sm mb-4">{exp.duration}</p>
              
              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { 
  FaUnity, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3, 
  FaGitAlt,
  FaBrain,
  FaCode,
  FaHashtag
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Game Development',
    icon: FaUnity,
    skills: [
      { name: 'Unity', icon: FaUnity, level: 90 },
      { name: 'C#', icon: FaHashtag, level: 85 },
    ],
  },
  {
    title: 'Web Development',
    icon: FaCode,
    skills: [
      { name: 'ReactJS', icon: FaReact, level: 85 },
      { name: 'JavaScript', icon: FaJs, level: 80 },
      { name: 'HTML5', icon: FaHtml5, level: 90 },
      { name: 'CSS3', icon: FaCss3, level: 85 },
      { name: 'TailwindCSS', icon: FaCode, level: 80 },
    ],
  },
  {
    title: 'AI & Other',
    icon: FaBrain,
    skills: [
      { name: 'AI/ML', icon: FaBrain, level: 40 },
      { name: 'Python', icon: FaCode, level: 60 },
      { name: 'Git', icon: FaGitAlt, level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-accent" />
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-gray-500 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                      <div
                        className="h-full bg-accent rounded-full 
                                   transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Unity', 'C#', 'ReactJS', 'JavaScript', 'TypeScript',
              'HTML', 'CSS', 'TailwindCSS', 'Node.js',
              'Python', 'Git', 'GitHub', 'AI', 'Machine Learning',
              'VR/AR', '3D Modeling', 'Game Design'
            ].map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

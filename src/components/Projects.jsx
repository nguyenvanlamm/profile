import { FaGithub, FaExternalLinkAlt, FaGamepad, FaGlobe, FaRobot } from 'react-icons/fa';

const projects = [
  {
    title: '3D Game Project',
    description: 'An immersive 3D game built with Unity featuring advanced gameplay mechanics, interactive environments, and optimized performance.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop',
    tags: ['Unity', 'C#', '3D', 'Game Dev'],
    github: 'https://github.com/nguyenvanlamm',
    demo: '#',
    category: 'game',
  },
  {
    title: 'Web Application',
    description: 'A modern web application built with ReactJS featuring responsive design, dynamic components, and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['ReactJS', 'JavaScript', 'CSS', 'Web'],
    github: 'https://github.com/nguyenvanlamm',
    demo: '#',
    category: 'web',
  },
  {
    title: 'AI Project',
    description: 'An exploration into AI and machine learning, implementing basic algorithms and exploring neural network concepts.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    tags: ['Python', 'AI', 'ML', 'TensorFlow'],
    github: 'https://github.com/nguyenvanlamm',
    demo: '#',
    category: 'ai',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card group overflow-hidden p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden border-b border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                           transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gray-800 text-accent text-xs font-mono rounded-full border border-accent">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.category === 'game' && <FaGamepad className="text-gray-400" />}
                  {project.category === 'web' && <FaGlobe className="text-gray-400" />}
                  {project.category === 'ai' && <FaRobot className="text-gray-400" />}
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent 
                               transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded 
                               border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-accent 
                             transition-colors text-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-accent 
                             transition-colors text-sm"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

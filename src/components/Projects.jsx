import { FaGithub, FaExternalLinkAlt, FaGamepad, FaGlobe, FaRobot } from 'react-icons/fa';

const projects = [
  {
    title: 'Monkey Junior - English for kids',
    description: 'Monkey Junior is a super English learning app designed for children ages 3-8, providing a comprehensive learning pathway to help children build a solid vocabulary bank and develop all four language skills: Listening, Speaking, Reading, and Writing.',
    image: 'https://play-lh.googleusercontent.com/VEoH8YWkAGsSFuqY9mZU-tX3837MwfzIhozW06IsCIF2YT00j0w1LROlAtJxQvIfeg=w240-h480-rw',
    tags: ['Android', 'iOS', 'AI', 'Education'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://play.google.com/store/apps/details?id=com.earlystart.android.monkeyjunior',
    category: 'game',
  },
  {
    title: 'Vui Học Gia Sư',
    description: 'A comprehensive online tutoring platform connecting students with expert tutors. Features personalized learning paths, progress tracking, and real-time teacher reviews.',
    image: 'https://giasu.vuihoc.vn/_nuxt/img/logo_tutor.59e4d77.png',
    tags: ['ReactJS', 'Node.js', 'MongoDB', 'Web'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://giasu.vuihoc.vn/',
    category: 'web',
  },
  {
    title: 'Étudier Français',
    description: "DELF, DALF, TCF exam preparation platform with automatic AI grading.",
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    tags: ['React', 'AI', 'NLP', 'Education'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://etudier.lamnv.com/en',
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-white group-hover:text-accent 
                             transition-colors cursor-pointer"
                  >
                    {project.title}
                  </a>
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

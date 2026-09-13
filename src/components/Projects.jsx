import { FaGithub, FaExternalLinkAlt, FaGamepad, FaGlobe, FaRobot, FaShieldAlt } from 'react-icons/fa';

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
  {
    title: 'SecureLens',
    description: "Website security posture scanner. Analyzes publicly observable configurations (HTTPS, TLS, security headers, cookies, CSP, CORS) and produces an explainable score with fix recommendations and a PDF report.",
    image: 'https://securelen.lamnv.com/shield.svg',
    tags: ['React', 'FastAPI', 'Security', 'Web'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://securelen.lamnv.com',
    category: 'security',
  },
  {
    title: 'Time Echo',
    description: "Puzzle game where you cooperate with your past self. Each time loop, your previous run becomes an echo replaying its moves — hold buttons, push boxes, and bridge gaps to reach the exit across 80 levels.",
    image: 'https://timecho.lamnv.com/icons/Icon-192.png',
    tags: ['Flutter', 'Game', 'Puzzle'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://timecho.lamnv.com',
    category: 'game',
  },
  {
    title: 'Cạm Bẫy',
    description: "Hidden-trap platformer in the spirit of Trap Adventure 2. Guide a little robot out of a scrap factory where every trap strikes when you least expect it — the only way through is to die enough to learn the level.",
    image: 'https://cambay.lamnv.com/icons/Icon-192.png',
    tags: ['Flutter', 'Game', 'Platformer'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://cambay.lamnv.com',
    category: 'game',
  },
  {
    title: 'Express Emotion',
    description: "An interactive 3D emotional companion that listens to your feelings and acts them out through body language — a little character rendered in real-time 3D that reacts to what you share.",
    image: 'https://emotion.lamnv.com/favicon.svg',
    tags: ['React', 'Three.js', 'R3F', '3D'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://emotion.lamnv.com/',
    category: 'ai',
  },
  {
    title: 'Travel Memory Book',
    description: "A personal travel journal that turns each trip into a digital photo book you can flip through years later. Offline-first with photo timelines, per-day journals, and a book-style page viewer — private by design, no social feed.",
    image: 'https://travelbook.lamnv.com/icons/Icon-192.png',
    tags: ['Flutter', 'Riverpod', 'Offline-first'],
    github: 'https://github.com/nguyenvanlamm',
    demo: 'https://travelbook.lamnv.com',
    category: 'web',
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
                  {project.category === 'security' && <FaShieldAlt className="text-gray-400" />}
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

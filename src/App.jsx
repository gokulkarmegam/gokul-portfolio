import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "React Router",
      "Redux",
      "Context API",
    ],
    styling: ["Tailwind CSS", "Material UI", "Responsive Design"],
    apis: ["REST APIs", "Axios"],
    testing: ["Jest", "React Testing Library", "ESLint", "Prettier"],
    performance: [
      "Lazy Loading",
      "Code Splitting",
      "React.memo",
      "useMemo",
      "useCallback",
    ],
    tools: ["Git", "GitHub", "VS Code", "Jira"],
  };

  const projects = [
    {
      title: "HealthCare Management System",
      type: "Professional Project",
      tech: [
        "React.js",
        "React Router",
        "Context API",
        "Firebase Auth",
        "Material-UI",
        "Axios",
      ],
      description:
        "Developed a responsive healthcare service platform enabling 1,000+ users to explore experts, services, and subscriptions.",
      achievements: [
        "Integrated Firebase Authentication securing 100% of user logins",
        "Reduced redundant API calls by 25% with Context API",
        "Improved subscription interaction rates by 20%",
        "Cut average page load time by 30%",
      ],
    },
    {
      title: "Movie Library",
      type: "Personal Project",
      tech: [
        "React.js",
        "React Router",
        "Context API",
        "Tailwind CSS",
        "TMDB API",
        "Axios",
      ],
      description:
        "Engineered a responsive web application for movie discovery and management.",
      achievements: [
        "Implemented CRUD operations with localStorage for 100+ movies",
        "Developed filtering by 10+ genres and sorting capabilities",
        "Optimized loading with lazy loading and skeleton UI states",
      ],
      liveLink: "https://gokul-movie-library.netlify.app/",
    },
    {
      title: "Personal Finance Tracker",
      type: "Personal Project",
      tech: ["React.js", "Chart.js", "Tailwind CSS", "LocalStorage"],
      description:
        "Built a React-based finance tracker for spending analytics and budget management.",
      achievements: [
        "Designed 100% responsive UI with Tailwind CSS",
        "Improved user decision-making by 30% with interactive dashboards",
        "Deployed on Netlify with fast, secure hosting",
      ],
      liveLink: "https://gokul-personal-finance-tracker.netlify.app/",
    },
  ];

  const experience = {
    company: "INVENTZO SYSTEMS (INDIA) PVT.LTD",
    positions: [
      {
        title: "Software Developer",
        period: "Jan 2025 - Present",
      },
      {
        title: "Associate Software Developer",
        period: "Dec 2022 - Jan 2025",
      },
    ],
  };

  const certificates = [
    "React.js Certification | Scaler Topics",
    "JavaScript Certification | Namaste JavaScript by Akshay Saini",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-800 dark:text-white animate-wave"
            >
              👋
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
            >
              <div className="px-4 py-2 space-y-2">
                {[
                  "home",
                  "about",
                  "skills",
                  "experience",
                  "projects",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 px-4 capitalize text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
              GokulaKannan
              <span className="block text-blue-600 dark:text-blue-400">
                KarMegam
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              React.js Developer | Front-End Engineer | JavaScript Developer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-4xl mx-auto">
              Front-End Developer with 2.9 years of experience building
              responsive, high-performance web apps using React.js, JavaScript
              (ES6+), and REST APIs. Skilled in custom hooks, Redux, TypeScript,
              Tailwind, and Material UI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:gokul.karmegham@gmail.com"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gokul-karmegham/"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/gokulkarmegam"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I am a passionate Front-End Developer with nearly 3 years of
                experience in creating responsive, high-performance web
                applications. My expertise lies in React.js ecosystem, where I
                have successfully delivered projects that serve thousands of
                users.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                I specialize in building user-focused solutions with clean,
                maintainable code. My experience spans from healthcare
                management systems to personal finance applications, always
                focusing on performance optimization and exceptional user
                experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code
                      className="text-blue-600 dark:text-blue-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Clean Code
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Writing maintainable, scalable, and efficient code following
                    best practices.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase
                      className="text-green-600 dark:text-green-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Problem Solving
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Analyzing complex requirements and delivering innovative
                    solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe
                      className="text-purple-600 dark:text-purple-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    User Experience
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Creating intuitive interfaces that delight users and drive
                    engagement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="capitalize text-slate-800 dark:text-white">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Professional Experience
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-white">
                  {experience.company}
                </CardTitle>
                <CardDescription className="text-lg">
                  {experience.positions.map((pos, index) => (
                    <div key={index} className="mb-2">
                      <span className="font-semibold">{pos.title}</span> •{" "}
                      {pos.period}
                    </div>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      <li>
                        • Developed a responsive healthcare service platform
                        enabling 1,000+ users
                      </li>
                      <li>
                        • Integrated Firebase Authentication securing 100% of
                        user logins
                      </li>
                      <li>
                        • Reduced redundant API calls by 25% with efficient
                        state management
                      </li>
                      <li>
                        • Improved user engagement and subscription rates by 20%
                      </li>
                      <li>
                        • Optimized performance, cutting average page load time
                        by 30%
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                    <GraduationCap size={24} />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Bachelor of Engineering
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Automobile Engineering
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      KLN College of Engineering • 2021
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      CGPA: 6.8
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                    <Award size={24} />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certificates.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 dark:text-slate-300">
                          {cert}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills
              in React.js development and problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm" className="p-2">
                            <ExternalLink size={1000} />
                          </Button>
                        </a>
                      )}
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can work together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail
                      className="text-blue-600 dark:text-blue-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Drop me a line anytime
                  </p>
                  <a
                    href="mailto:gokul.karmegham@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    gokul.karmegham@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone
                      className="text-green-600 dark:text-green-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Call me for urgent matters
                  </p>
                  <a
                    href="tel:+918667700803"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +91 8667700803
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="mailto:gokul.karmegham@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gokul-karmegham"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/gokulkarmegam"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                <span className="font-semibold">Languages:</span> Tamil
                (Native), English (Professional Proficiency)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Gokulakannan Karmegam. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

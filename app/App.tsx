import { ThemeToggle } from './components/ThemeToggle';
import profileImage from 'figma:asset/b5810a2299e82a69555fe968888f3ee716b729d7.png';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
          </div>
          <h1 className="mb-2">Rafnwel Nazh Sienes</h1>
          <p className="text-muted-foreground">IT Student & Developer</p>
        </header>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="mb-4 pb-2 border-b-2 border-primary">Education</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-1">Bachelor of Science in Information Technology</h3>
              <p className="text-muted-foreground mb-2">Ateneo de Davao University | 2024 - Present</p>
              <p>Currently pursuing a degree in Information Technology with focus on software development and system design.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="mb-4 pb-2 border-b-2 border-primary">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="mb-2">POS System</h3>
              <p className="text-muted-foreground mb-4">
                Point of Sale system for retail management with inventory tracking and sales reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">MySQL</span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="mb-2">Inventory System</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive inventory management system with stock tracking and reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">NetBeans</span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="mb-2">Enrollment System</h3>
              <p className="text-muted-foreground mb-4">
                Student enrollment management system with course registration and student records management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">MySQL</span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="mb-2">Portfolio Website</h3>
              <p className="text-muted-foreground mb-4">
                Personal portfolio website showcasing projects and skills with responsive design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">HTML</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="mb-4 pb-2 border-b-2 border-primary">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="mb-3 text-primary">Programming Languages</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  HTML5 & CSS3
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-primary">Databases</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Database Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  SQL Queries
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-primary">Tools & IDEs</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  NetBeans
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  System Development
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2026 Rafnwel Nazh Sienes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

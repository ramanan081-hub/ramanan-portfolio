import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, Mail, Phone, MapPin, Hexagon, ArrowRight, 
  Monitor, Smartphone, LayoutDashboard, Database, Bot, 
  LineChart, Search, Globe, Mic, Sparkles, Code2
} from 'lucide-react';

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'AI', href: '#ai-automation' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream-100/80 backdrop-blur-xl shadow-glass py-3.5 sm:py-4 border-b border-white/60' : 'bg-transparent py-5 sm:py-8'}`}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl border border-sage-500/30 flex items-center justify-center bg-white/70 backdrop-blur-md shadow-xs group-hover:border-sage-500 transition-all duration-300">
            <span className="font-serif font-bold text-sage-600 text-lg leading-none pr-[1px]">R</span>
          </div>
          <div>
            <h1 className="font-sans font-bold text-ink-900 leading-none text-base sm:text-lg tracking-wide uppercase">Ramanan Murugan</h1>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">Business Analyst</p>
          </div>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white/80 shadow-xs">
            {links.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-ink-500 hover:text-ink-900 hover:bg-white/80 transition-all duration-200 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Action Button */}
        <div className="hidden lg:block">
          <a href="./RAMANAN_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Resume &rarr;
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-ink-900 p-2.5 rounded-full bg-white/70 backdrop-blur-md border border-white shadow-xs hover:bg-white transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden fixed inset-x-4 top-[70px] sm:top-[80px] bg-white/90 backdrop-blur-2xl shadow-glass-hover rounded-3xl py-6 px-6 flex flex-col items-center gap-4 border border-white/90 z-50"
        >
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-ink-700 hover:text-ink-900 text-sm font-bold uppercase tracking-widest py-2 w-full text-center rounded-xl hover:bg-cream-100/70 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="./RAMANAN_RESUME.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-2 w-full text-center"
          >
            Resume &rarr;
          </a>
        </motion.div>
      )}
    </nav>
  );
}

// ==========================================
// 2. HERO COMPONENT
// ==========================================
function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-20 lg:pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1536px] mx-auto overflow-hidden">
      
      {/* Ambient Liquid Gradient Blobs */}
      <div className="absolute top-12 right-12 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-gradient-to-tr from-sage-500/10 via-sage-400/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-12 left-10 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-gradient-to-br from-cream-300/40 via-white/50 to-transparent rounded-full blur-2xl -z-10"></div>
      
      {/* Subtle Liquid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#6E7A68_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12 xl:gap-20">
        
        {/* Left Content */}
        <motion.div 
          className="lg:w-7/12 xl:w-3/5 w-full text-left z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/90 shadow-xs mb-6">
            <Sparkles size={14} className="text-sage-500" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sage-600">Data Driven Decisions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-ink-900 leading-[1.12] mb-6 sm:mb-8">
            I build data <br className="hidden sm:inline" />
            systems that are <br className="hidden sm:inline" />
            <span className="italic font-light text-sage-600">intuitive, intelligent</span> <br className="hidden sm:inline" />
            and impactful.
          </h1>
          
          <p className="text-ink-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl font-light">
            I'm Ramanan Murugan, a dedicated Business and Data Analyst. My core focus is advanced data management, leveraging AI to automate tasks, simplify complex workflows, and engineer high-quality reports. I am deeply committed to continuous upskilling, improving my analytics expertise every single day to drive real business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#work" className="btn-primary">
              View My Work &rarr;
            </a>
            <a href="#contact" className="btn-outline">
              Let's Work Together &rarr;
            </a>
          </div>
        </motion.div>

        {/* Right Profile Graphic (Liquid Glass Frame) */}
        <motion.div 
          className="lg:w-5/12 xl:w-2/5 w-full relative flex justify-center lg:justify-end mt-4 lg:mt-0 z-10"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full max-w-[290px] sm:max-w-sm lg:max-w-md xl:max-w-lg aspect-[4/5] bg-white/40 backdrop-blur-xl rounded-[36px] sm:rounded-[48px] rounded-br-[100px] sm:rounded-br-[140px] p-3.5 border border-white/90 shadow-glass-hover group transition-all duration-500">
             <div className="w-full h-full rounded-[28px] sm:rounded-[40px] rounded-br-[90px] sm:rounded-br-[130px] overflow-hidden relative z-10 shadow-inner">
               <img 
                 src="./profile.jpg" 
                 alt="Ramanan Murugan" 
                 loading="eager"
                 fetchpriority="high"
                 decoding="async"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
             </div>
             {/* Glossy Liquid Highlight */}
             <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-[36px] sm:rounded-t-[48px]"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ==========================================
// 3. ABOUT COMPONENT
// ==========================================
function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-12 md:p-16 border border-white/90"
      >
        <span className="section-label">Background</span>
        <h2 className="section-title">About Me</h2>
        <div className="text-ink-500 text-base sm:text-lg leading-relaxed space-y-5 sm:space-y-6 w-full max-w-5xl">
          <p>
            I am a Business Analyst with a strong focus on data management and strategic business development planning. Currently, my role centers on data handling, pipeline management, and creating impactful reports that drive organizational growth.
          </p>
          <p>
            I actively implement AI agents and automation to improve data quality and streamline data handling processes. A core part of my expertise involves bridging the gap between operational systems and modern analytics—specifically by engineering direct connections between ERP systems and Power BI data pipelines. I utilize SQL for robust data extraction, transformation, and loading (ETL) to build reliable, automated reporting architectures.
          </p>
          <p>
            Beyond traditional analytics, I embrace the future of technology by using agentic AI for rapid web development and "vibe coding". I continuously leverage multiple AI systems and modern software tools to solve complex data alignment problems, ensure data integrity, and adapt to emerging technological trends. I am deeply committed to continuous learning, skill enhancement, and aggressive AI adaptation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 4. PROJECTS COMPONENT
// ==========================================
function Projects() {
  const projects = [
    {
      title: "Technical Analysis & Classic Charts",
      description: "Analysed interest rates of house loans, verification processes, and the relevance of classic charts in the banking sector using T-Tests and ANOVA.",
      tech: "IBM SPSS, Statistical Analysis",
      date: "Aug 2024 - Sep 2024",
      bgColor: "bg-white/80",
      accentColor: "bg-sage-500/10 text-sage-700 border-sage-500/20"
    },
    {
      title: "Rural Innovation Project (RIP)",
      description: "Analyzed data to introduce economic and social value to rural life in Theni. Built data visualizations and dashboards to highlight findings.",
      tech: "Advanced Excel, Power BI",
      date: "Mar 2024",
      bgColor: "bg-ink-900",
      dark: true
    },
    {
      title: "Social Immersion Project (SIP)",
      description: "Focused on improving communication and emotional support at an old age home, collaborating with a new organization to provide social value.",
      tech: "Social Immersion, Field Research",
      date: "Dec 2023",
      bgColor: "bg-cream-200/80",
      accentColor: "bg-sage-500/10 text-sage-700 border-sage-500/20"
    }
  ];

  return (
    <section id="work" className="section-container">
      <div className="flex justify-between items-end mb-10 sm:mb-16">
        <div>
          <span className="section-label">Selected Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900">College Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i} 
            className="group block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={`p-6 sm:p-8 ${project.bgColor} rounded-2xl flex flex-col justify-between mb-4 sm:mb-6 relative overflow-hidden transition-all duration-300 min-h-[240px] sm:aspect-[4/3] backdrop-blur-md border ${project.dark ? 'border-ink-800 shadow-lg' : 'border-white/90 shadow-glass group-hover:shadow-glass-hover group-hover:-translate-y-1.5'}`}>
              <div className="flex justify-between items-start z-10 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${project.dark ? 'text-white/60' : 'text-ink-500'}`}>
                  {project.date}
                </span>
                <span className={`px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase border rounded-full ${project.dark ? 'text-white/50 border-white/20 bg-white/5' : 'text-sage-700 border-sage-500/30 bg-sage-500/10'}`}>
                  Academic
                </span>
              </div>
              <h3 className={`text-base sm:text-xl font-serif leading-relaxed sm:leading-tight max-w-[280px] z-10 mb-2 ${project.dark ? 'text-white' : 'text-ink-900'}`}>
                {project.description}
              </h3>
              {project.dark ? (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rotate-45 transform pointer-events-none"></div>
              ) : (
                <div className="absolute -bottom-4 -right-4 w-36 h-36 border border-sage-500/10 rounded-full pointer-events-none"></div>
              )}
            </div>

            <div className="flex justify-between items-start pb-4 border-b border-cream-300/80 px-1">
              <div>
                <h4 className="font-bold text-ink-900 text-sm sm:text-base mb-1 max-w-[280px]">{project.title}</h4>
                <p className="text-xs text-ink-500 font-medium">{project.tech}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ==========================================
// 4.1. FEATURED PROJECTS COMPONENT
// ==========================================
function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section-container border-t border-cream-300/70">
      <div className="flex justify-between items-end mb-10 sm:mb-16">
        <div>
          <span className="section-label">Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900">Featured Work</h2>
        </div>
      </div>

      <div className="flex flex-col gap-12 sm:gap-16">
        {/* Project 1 */}
        <motion.div 
          className="flex flex-col xl:flex-row gap-8 items-center bg-white/60 p-6 sm:p-10 rounded-3xl backdrop-blur-md border border-white/90 shadow-glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full xl:w-3/5 rounded-2xl overflow-hidden shadow-lg border border-white/50 relative group">
            <div className="absolute inset-0 bg-ink-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="./cotton-dashboard.png" alt="BASML Cotton & Yarn Analysis Dashboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full xl:w-2/5 flex flex-col justify-center">
            <span className="px-3 py-1 text-[10px] font-bold uppercase border rounded-full text-sage-700 border-sage-500/30 bg-sage-500/10 w-fit mb-4">Web Application</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-ink-900 mb-4">BASML Cotton & Yarn Analysis Dashboard</h3>
            <p className="text-sm sm:text-base text-ink-500 mb-6 leading-relaxed">
              A real-time analytics web application designed for tracking, analyzing, and forecasting global and national price movements of multiple cotton and yarn varieties. It leverages API integrations for live data syncing and predictive AI modeling to support management in making highly accurate trading and purchasing decisions.
            </p>
            <div className="flex gap-4">
              <a href="https://ramanan081-hub.github.io/basml-cotton-yarn-dashboard/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                View Live Site <Globe size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="flex flex-col xl:flex-row-reverse gap-8 items-center bg-white/60 p-6 sm:p-10 rounded-3xl backdrop-blur-md border border-white/90 shadow-glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full xl:w-3/5 rounded-2xl overflow-hidden shadow-lg border border-white/50 relative group">
            <div className="absolute inset-0 bg-ink-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img src="./n8n-workflow.png" alt="AI Agent Workflow Automation" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full xl:w-2/5 flex flex-col justify-center">
            <span className="px-3 py-1 text-[10px] font-bold uppercase border rounded-full text-sage-700 border-sage-500/30 bg-sage-500/10 w-fit mb-4">AI Automation</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-ink-900 mb-4">Agentic AI Workflow Automation</h3>
            <p className="text-sm sm:text-base text-ink-500 mb-6 leading-relaxed">
              A sophisticated n8n workflow implementing multi-agent AI automation. This system is capable of executing complex, multi-step tasks by scraping real-time web data (like daily news and stock prices), processing it through custom LLM agents (Google Gemini), and autonomously orchestrating email deliveries via scheduled triggers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// 4.5. GITHUB PROJECTS COMPONENT
// ==========================================
function GithubProjects() {
  const repos = [
    {
      name: "basml-cotton-yarn-dashboard",
      description: "A real-time cotton and yarn price monitoring dashboard with AI-powered predictive forecasting for global and Indian markets. Quick Overview Tech: React 18, Vite, JavaScript (98.2%). Purpose: Real-time price tracking, market analysis, AI forecast.",
      url: "https://github.com/ramanan081-hub/basml-cotton-yarn-dashboard"
    },
    {
      name: "sql-project-powerbi-dashboard",
      description: "An end-to-end e-commerce database design and sales analytics project using MySQL for transactional data storage and Power BI for interactive dashboard reporting (analyzing sales, customers, and payment methods).",
      url: "https://github.com/ramanan081-hub/sql-project-powerbi-dashboard"
    },
    {
      name: "Agentic_AI_Automation_Workflow",
      description: "This project implements an agentic AI automation workflow where autonomous agents can plan, make decisions, and execute tasks dynamically. It supports tool integration, multi-step reasoning, and adaptive workflows to automate complex real-world processes efficiently.",
      url: "https://github.com/ramanan081-hub/Agentic_AI_Automation_Workflow"
    },
    {
      name: "COMPETITOR_ANALYSIS_AI_AGENT",
      description: "Financial Intelligence & Competitor Benchmarking Agent specialized in the Indian textile and spinning mills industry. Analyzes competitive position using structured financial data.",
      url: "https://github.com/ramanan081-hub/COMPETITOR_ANALYSIS_AI_AGENT"
    },
    {
      name: "Artificial_Intelligence_Report",
      description: "A comprehensive AI Development Report covering the fundamentals of Artificial Intelligence, Machine Learning concepts, AI applications, tools, technologies, real-world use cases, advantages, challenges, and future scope.",
      url: "https://github.com/ramanan081-hub/Artificial_Intelligence_Report."
    },
    {
      name: "MySQL-database-project",
      description: "MySQL database designed for an international export company to manage customers, products, orders, order items, and payments, using real-world business queries and SQL functions.",
      url: "https://github.com/ramanan081-hub/MySQL-database-project"
    },
    {
      name: "Power_BI_dashboard_development",
      description: "Data analysis, business intelligence, and Power BI dashboard development. Transforming raw business data into meaningful insights that support strategic decision-making and operational improvement.",
      url: "https://github.com/ramanan081-hub/Power_BI_dashboard_development-"
    },
    {
      name: "MySQL-learning-practice",
      description: "A personal MySQL learning repository for practicing SQL queries, joins, aggregations, subqueries, and real-world database concepts through hands-on examples.",
      url: "https://github.com/ramanan081-hub/MySQL-learning-practice"
    }
  ];

  return (
    <section id="github" className="section-container border-t border-cream-300/70 pb-10 sm:pb-16">
      <div className="flex justify-between items-end mb-10 sm:mb-16">
        <div>
          <span className="section-label">Open Source</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900">GitHub Projects</h2>
        </div>
        <a href="https://github.com/ramanan081-hub" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-sage-600 hover:text-ink-900 transition-colors uppercase tracking-widest">
          View GitHub <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {repos.map((repo, i) => (
          <motion.div 
            key={i} 
            className="group block h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.08 }}
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/60 rounded-2xl flex flex-col mb-4 sm:mb-6 relative overflow-hidden transition-all duration-300 h-full backdrop-blur-md border border-white/90 shadow-glass group-hover:shadow-glass-hover group-hover:-translate-y-1 group-hover:bg-white/90 group-hover:border-sage-400/30">
              <div className="flex justify-between items-start z-10 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center text-sage-600 shrink-0">
                  <Code2 size={18} strokeWidth={1.5} />
                </div>
                <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase border rounded-full text-sage-700 border-sage-500/30 bg-sage-500/10 group-hover:bg-sage-500 group-hover:text-white transition-colors duration-300">
                  Repository
                </span>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-sm font-bold text-ink-900 leading-tight mb-2 truncate" title={repo.name}>
                  {repo.name}
                </h3>
                <p className="text-xs text-ink-500 line-clamp-4 leading-relaxed flex-1">
                  {repo.description}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <a href="https://github.com/ramanan081-hub" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
          View All on GitHub &rarr;
        </a>
      </div>
    </section>
  );
}

// ==========================================
// 5. SERVICES COMPONENT
// ==========================================
function Services() {
  const services = [
    {
      icon: <Database size={22} strokeWidth={1.5} />,
      title: "Data Pipelines",
      desc: "Connecting SQL Server ERP data to live Power BI models for real-time tracking."
    },
    {
      icon: <LayoutDashboard size={22} strokeWidth={1.5} />,
      title: "BI Dashboards",
      desc: "Designing intuitive, interactive Power BI reports that leadership actually uses."
    },
    {
      icon: <Monitor size={22} strokeWidth={1.5} />,
      title: "Business Analytics",
      desc: "Mining business data to surface operational problems and data-driven solutions."
    },
    {
      icon: <Smartphone size={22} strokeWidth={1.5} />,
      title: "UI/UX & Web Dev",
      desc: "Building internal web tools and interfaces using AI-assisted vibe coding."
    },
    {
      icon: <Bot size={22} strokeWidth={1.5} />,
      title: "Agentic AI & Automation",
      desc: "Leveraging MCP protocols and APIs to connect multiple AI agents to collaborate and execute complex workflows."
    },
    {
      icon: <LineChart size={22} strokeWidth={1.5} />,
      title: "Python Data Analysis",
      desc: "Utilizing Python, Pandas, NumPy, and Matplotlib for advanced data manipulation, statistical modeling, and visualization."
    }
  ];

  return (
    <section id="services" className="border-t border-cream-300/70">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/4">
            <span className="section-label">What I Do</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Expertise</h2>
          </div>
          
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-6 sm:p-8 flex flex-col group hover:-translate-y-1.5 duration-300"
              >
                <div className="h-12 w-12 rounded-2xl border border-sage-500/20 flex items-center justify-center text-sage-600 mb-6 bg-sage-500/10 group-hover:bg-sage-500 group-hover:text-white transition-all duration-300 shadow-xs">
                  {service.icon}
                </div>
                <h3 className="font-bold text-ink-900 text-base sm:text-lg mb-2.5">{service.title}</h3>
                <p className="text-xs sm:text-sm text-ink-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5.5. AI AGENT & AUTOMATION COMPONENT
// ==========================================
function AiAutomation() {
  const points = [
    {
      title: "Create Brain Function (Agentic AI Data & Prompt Engineering)",
      icon: <Bot size={20} strokeWidth={1.5} />,
      desc: (
        <div className="space-y-4">
          <p>Focused on creating custom "brains" (AI Agents) specialized for specific tasks by engineering precise prompts and data structures. Successfully created over 6 custom AI brains for dedicated workflows.</p>
          <div className="pl-4 border-l-2 border-sage-500/20 space-y-3">
            <div>
              <strong className="text-ink-900 block mb-1">INDAY (Stock Market Agent):</strong>
              <p className="text-sm">A specialized brain built exclusively for stock market technical analysis and trading. Provided with technical analysis data, tools, and strategies. Connected to a trading platform via MCP (Model Context Protocol). Allowed access to direct live charts to utilize Fibonacci, trend channels, VWAP, and other strategies to provide trading plans and analysis. While standard generative AI cannot access live data, this agent accesses and processes real-time data to autonomously develop its own skills and reasoning.</p>
            </div>
            <div>
              <strong className="text-ink-900 block mb-1">BASML Web (Development Agent):</strong>
              <p className="text-sm">A brain created solely for website development utilizing "vibe coding". Leverages multi-MCP connections to orchestrate a multi-agent workflow that handles UI/UX development, web searching/scraping, quality testing, bug fixing, and auto-updating GitHub files.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "MCP and API Integration",
      icon: <Database size={20} strokeWidth={1.5} />,
      desc: (
        <p>Connected MCP (Model Context Protocol) and API keys to enable seamless multi-agent workflows (website-to-website and website-to-AI). Orchestrating multi-step workflows from a single prompt significantly saves time and delivers high-speed, accurate outputs.</p>
      )
    },
    {
      title: "Vibe Coding",
      icon: <Code2 size={20} strokeWidth={1.5} />,
      desc: (
        <p>Leveraging advanced prompt engineering ("vibe coding") to develop comprehensive websites and applications. Utilizing AI agents for multi-step development architectures, handling everything from UI/UX design and core coding to bug fixing, testing, debugging, user experience enhancement, and final publishing.</p>
      )
    },
    {
      title: "Deep Research",
      icon: <Search size={20} strokeWidth={1.5} />,
      desc: (
        <p>Employing AI to conduct deep research and collect high-quality information. Bypassing the noise of fake or unreliable information on the internet by utilizing deep research models specifically designed to find real, factual, and real-time data from disparate sources.</p>
      )
    },
    {
      title: "AI Automation and Scheduling",
      icon: <Sparkles size={20} strokeWidth={1.5} />,
      desc: (
        <p>Utilizing AI for automated task scheduling and execution. For example, prompting AI to automatically generate a daily news summary and send it via email every morning at 09:00 AM. Additionally, setting up autonomous trackers for stock and gold prices that automatically send email or mobile notifications when specific price targets are triggered. I also leverage AI automation via direct prompts to seamlessly access, manage, load, and remove local system files and folders.</p>
      )
    }
  ];

  const softwares = [
    {
      name: "Google Antigravity",
      desc: "Used for vibe coding, code development, and building custom AI brain functions. Seamlessly connects multiple AI agents, simplifies prompt management, and integrates via MCP."
    },
    {
      name: "Claude AI",
      desc: "Go-to for creating advanced reports and generating business dashboards. Actively utilized in web development for robust code testing and debugging workflows."
    },
    {
      name: "Microsoft Copilot 365",
      desc: "Integrated across the Microsoft ecosystem for daily office operations, including Power BI development (formula generation and mathematical calculations). Leveraged in VS Code to construct, correct, and optimize queries to save time."
    },
    {
      name: "Google Stitch",
      desc: "Specialized in UI/UX design generation. Develops necessary website designs and seamlessly connects via MCP to Antigravity to share design code for instant frontend implementation."
    },
    {
      name: "Google Gemini / Perplexity",
      desc: "Dedicated to deep research. Delivers highly accurate, factual information. Integrated with Gmail and mobile devices to automate scheduled data-sharing processes."
    },
    {
      name: "n8n",
      desc: "The core engine for AI automation and agentic workflow management. Orchestrates multi-agent AI systems and executes complex custom workflows efficiently."
    }
  ];

  return (
    <section id="ai-automation" className="section-container border-t border-cream-300/70">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4 sticky top-8">
          <span className="section-label">Future Tech</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900 leading-tight">AI Agent &<br />Automation</h2>
        </div>
        
        <div className="lg:w-3/4 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-5 sm:gap-6 items-start group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center text-sage-600 group-hover:bg-sage-500 group-hover:text-white transition-all duration-300 shadow-xs">
                  {point.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-3">{point.title}</h3>
                  <div className="text-sm text-ink-500 leading-relaxed">
                    {point.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Software Stack */}
          <div className="pt-8 border-t border-cream-300/60">
            <h3 className="text-xl sm:text-2xl font-serif text-ink-900 mb-6">AI Software Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwares.map((software, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/50 backdrop-blur-sm border border-white/80 p-5 rounded-xl hover:bg-white/80 transition-colors"
                >
                  <strong className="text-ink-900 block mb-1.5">{software.name}</strong>
                  <p className="text-xs sm:text-sm text-ink-500 leading-relaxed">{software.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. EXPERIENCE COMPONENT
// ==========================================
function Experience() {
  const experiences = [
    {
      num: "01",
      icon: <Search size={18} strokeWidth={1.5} />,
      title: "Finance Intern",
      company: "Grihum Housing Finance Limited",
      date: "Mar 2025 – Apr 2025",
      desc: (
        <div className="space-y-3 sm:space-y-4">
          <p>Focused primarily on developing advanced Power BI reports to drive financial development and analytics. Supported the lending team by performing CIBIL credit score verification and building Excel financial models for variance analysis.</p>
          <div>
            <span className="font-bold text-ink-900 block mb-1.5">Key Dashboards Developed:</span>
            <ul className="list-disc pl-4 space-y-1 text-ink-500 text-xs sm:text-sm">
              <li>Customer Outstanding Analysis</li>
              <li>New Customer Information Dashboard</li>
              <li>Employee Assignment Dashboard</li>
            </ul>
          </div>
          <p>Engineered Power BI dashboards utilizing customer data to track monthly payments and outstanding balances. Leveraged these reports to systematically grade customers and identify high-risk, non-paying accounts, significantly improving collection strategies.</p>
        </div>
      )
    },
    {
      num: "02",
      icon: <Database size={18} strokeWidth={1.5} />,
      title: "MIS Trainee",
      company: "Bannari Amman Spinning Mills Limited, Coimbatore",
      date: "Dec 2025 - Apr 2026",
      desc: (
        <div className="space-y-3 sm:space-y-4">
          <p>Extracted raw operational data from the company ERP system into Excel formats to develop advanced Power BI reports for management across three manufacturing units.</p>
          <div>
            <span className="font-bold text-ink-900 block mb-2">Key Dashboards Developed:</span>
            <ul className="list-disc pl-4 space-y-2.5 text-ink-500 text-xs sm:text-sm">
              <li><strong className="text-ink-900">Monthly Sales:</strong> Conducted comprehensive sales analysis (monthly and year-over-year), tracking pre-tax and post-tax revenue. Segmented data by customer, agent, day, and manufacturing unit.</li>
              <li><strong className="text-ink-900">Outstanding Receivables:</strong> Tracked customer and trader outstanding balances against average sales. Implemented a grading system based on payment holding days.</li>
              <li><strong className="text-ink-900">Maintenance Cost Analysis:</strong> Monitored electrical and mechanical maintenance expenses to identify high-spending areas and root causes of excess expenditure.</li>
              <li><strong className="text-ink-900">Unmoved Stock & Factory Ageing:</strong> Analyzed inventory to identify unmoved stock categories, tracking day-wise ageing for stagnant product lines.</li>
              <li><strong className="text-ink-900">Booking to Delivery Performance:</strong> Tracked the order lifecycle from booking date to delivery, calculating fulfillment timeframes and identifying shipping delays.</li>
              <li><strong className="text-ink-900">Cross-Divisional Top Sellers & Buyers:</strong> Profiled the top 5 buyers and sellers across Spinning, Weaving, Knitting, Processing, and Home Textiles divisions with full metrics.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      num: "03",
      icon: <Database size={18} strokeWidth={1.5} />,
      title: "Business Analyst",
      company: "Bannari Amman Spinning Mills Limited, Coimbatore",
      date: "May 2026 - Present",
      desc: (
        <div className="space-y-4 sm:space-y-6">
          {/* Project 1 */}
          <div>
            <p><strong className="text-ink-900 block mb-1">Manpower Planning & Development:</strong> Collaborated with the HR team and Directors to develop comprehensive Power BI dashboards for employee/worker analysis, HR planning, and development. Engineered data pipelines to monitor workforce trends and support strategic decisions regarding manpower management, welfare activities, and resource allocation across the Head Office and manufacturing units.</p>
            <div className="mt-3 sm:mt-4">
              <span className="font-bold text-ink-900 block mb-2">Key Dashboards Developed:</span>
              <ul className="list-disc pl-4 space-y-2.5 text-ink-500 text-xs sm:text-sm">
                <li><strong className="text-ink-900">Attrition & Resignation Analysis:</strong> Developed multi-dimensional reports to analyze employee turnover by month, year, gender, age, department, and recruitment agent. Identified key drivers behind worker outflow and tracked tenure from joining to resignation.</li>
                <li><strong className="text-ink-900">Recruitment & Joining Analysis:</strong> Monitored monthly factory worker recruitment metrics, segmenting data by recruitment agent, location, and demographic profiles.</li>
                <li><strong className="text-ink-900">Workforce Dynamics (Joining vs. Resignation):</strong> Engineered a comparative dashboard analyzing the total influx and outflow of workers. Evaluated recruitment agent performance by tracking total headcount provided versus retention and active availability.</li>
                <li><strong className="text-ink-900">Comprehensive Salary & Increment Planning:</strong> Created salary analysis reports spanning the Head Office and factory units to track overall payroll expenditure, PF, ESI, and insurance. Facilitated increment planning and visualized salary distributions by division, department, designation, experience, and gender.</li>
                <li><strong className="text-ink-900">Attendance Analysis:</strong> Tracked month-over-month and year-over-year overall attendance percentages, analyzing trends across various divisions and departments to improve workforce reliability.</li>
              </ul>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="pt-4 sm:pt-5 border-t border-cream-300/60">
            <p><strong className="text-ink-900 block mb-1">Cotton & Yarn Market Analysis Web Application:</strong> Engineered an automated, AI-driven web application to track, analyze, and forecast global and national price movements of multiple cotton and yarn varieties to support management trading decisions.</p>
            <div className="mt-3 sm:mt-4">
              <span className="font-bold text-ink-900 block mb-2">Key Features & Capabilities:</span>
              <ul className="list-disc pl-4 space-y-2.5 text-ink-500 text-xs sm:text-sm">
                <li><strong className="text-ink-900">Automated Data Scraping & API Integration:</strong> Utilized multi-agentic AI, MCP protocols, and API connections (via "vibe coding") to build a system that scrapes real-time market data, pricing, and industry news from multiple sources, auto-updating every 30 minutes.</li>
                <li><strong className="text-ink-900">Price Forecasting Models:</strong> Implemented advanced technical analysis and forecasting methods to help management anticipate cotton and yarn price movements day-to-day and time-to-time.</li>
                <li><strong className="text-ink-900">Global & National Market Tracking:</strong> Tracked macroeconomic factors affecting the business, including import/export changes and market fluctuations for different types of cotton and yarn across global and national markets.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="experience" className="section-container border-b border-cream-300/70">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Career Progression</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Experience</h2>
        </div>
        
        <div className="lg:w-3/4 w-full">
          <div className="flex flex-col gap-10 sm:gap-14 relative">
            <div className="absolute top-6 bottom-4 left-[23px] sm:left-[27px] w-[2px] bg-sage-500/20 z-0">
              <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 border-b border-r border-sage-500/40 transform rotate-45"></div>
            </div>

            {experiences.map((step, i) => (
              <motion.div 
                key={i}
                className="relative z-10 flex flex-row gap-4 sm:gap-8 items-start text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-glass flex items-center justify-center text-sage-600 shrink-0 relative z-10">
                    {step.icon}
                  </div>
                </div>
                
                <div className="glass-card p-6 sm:p-8 flex-1 border border-white/90">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5">
                    <span className="text-[10px] sm:text-xs font-bold text-sage-600 uppercase tracking-widest">{step.num}</span>
                    <h3 className="font-bold text-lg sm:text-2xl text-ink-900">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-sage-600 uppercase tracking-wider mb-1">{step.company}</p>
                  <p className="text-[11px] sm:text-xs text-ink-400 font-mono mb-4">{step.date}</p>
                  <div className="text-xs sm:text-sm text-ink-500 leading-relaxed max-w-3xl">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. PROGRAMMES COMPONENT
// ==========================================
function Programmes() {
  const programmes = [
    {
      num: "01",
      icon: <Globe size={18} strokeWidth={1.5} />,
      title: "Global Immersion Programme",
      company: "know skills TVES college, Kuala Lumpur, Malaysia",
      date: "Sep 2024",
      desc: "Gained insights into international business protocols, cross-cultural communication skills, cultural etiquette, table manners, and advanced AI business intelligence."
    },
    {
      num: "02",
      icon: <Mic size={18} strokeWidth={1.5} />,
      title: "Conference Presenter",
      company: "International & National Conference",
      date: "Dec 2024",
      desc: "Presented a research paper on 'The Study on explore classic chart and their relevance in technical analysis' at an international-level academic conference organized in Malaysia."
    }
  ];

  return (
    <section id="process" className="section-container border-b border-cream-300/70">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">International Exposure</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Programmes</h2>
        </div>
        
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 relative">
            {programmes.map((step, i) => (
              <motion.div 
                key={i}
                className="glass-card p-6 sm:p-8 flex flex-col items-start text-left border border-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-sage-600 uppercase tracking-widest">{step.num}</span>
                  <div className="w-11 h-11 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center text-sage-600 shrink-0">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-ink-900 text-base sm:text-lg mb-1">{step.title}</h3>
                <p className="text-xs font-bold text-sage-600 uppercase tracking-wider mb-1.5">{step.company}</p>
                <p className="text-[11px] text-ink-400 font-mono mb-3">{step.date}</p>
                <p className="text-xs sm:text-sm text-ink-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. EDUCATION COMPONENT
// ==========================================
function Education() {
  const education = [
    {
      degree: "Master of Business Administration",
      major: "Business Analytics and Finance",
      school: "Hindustan College of Arts & Science, Coimbatore",
      date: "2023 - 2025",
      score: "63%"
    },
    {
      degree: "Bachelor of Business Administration",
      major: "Business Administration",
      school: "Hajee Karutha Rowther Howdia College, Theni",
      date: "2019 - 2022",
      score: "59%"
    },
    {
      degree: "Higher Secondary (HSC)",
      major: "High School",
      school: "St. Aloysius higher secondary school, Theni",
      date: "2018 - 2019",
      score: "60%"
    }
  ];

  return (
    <section id="education" className="section-container border-b border-cream-300/70">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Background</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Education</h2>
        </div>
        
        <div className="lg:w-3/4 w-full">
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                className="glass-card p-6 sm:p-8 border border-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-ink-900">{edu.degree}</h3>
                  <span className="text-[11px] font-mono text-ink-600 self-start sm:self-auto bg-white/80 border border-white/90 shadow-xs px-3 py-1 rounded-full">{edu.date}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-sage-600 mb-1.5">{edu.major}</p>
                <p className="text-xs sm:text-sm text-ink-500">{edu.school}</p>
                <p className="text-xs text-ink-400 mt-2 font-medium">Score: {edu.score}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 9. SKILLS COMPONENT
// ==========================================
function Skills() {
  const technicalSkills = [
    "Business Analytics", "Web Scraping", "Share Market Analysis", 
    "Data Analysis", "Big Data Analysis", "Cloud Computing", 
    "SQL", "Data Visualization", "Data Management", 
    "Business Intelligence", "Marketing Analysis", "Financial & Market Analysis", 
    "Social Media Analytics", "Vibe Coding", "MCP / API", "Data Pipelines",
    "Report Creation", "Dashboard Development", "AI Automation", "ERP Data Loading",
    "Relational Databases", "Database Relationship Management", "Data Quality Development",
    "Technical Analysis", "KPI Analysis"
  ];

  const softwareSkills = [
    "Microsoft Office", "Excel", "IBM SPSS", "Google Forms", 
    "Zoho Recruit", "Tableau", "Power BI", "AWS", 
    "MySQL", "Zoho CRM", "Canva", "Google Analytics", 
    "AI Tools", "Python"
  ];

  return (
    <section id="skills" className="section-container border-b border-cream-300/70">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">Capabilities</span>
        <h2 className="section-title">Skills & Software</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-serif text-ink-900 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {technicalSkills.map((skill, i) => (
              <motion.div 
                key={skill} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-white/60 backdrop-blur-sm border border-white/90 p-4 rounded-xl flex items-center justify-center text-center shadow-glass hover:-translate-y-1 hover:bg-white/80 transition-all duration-300 group"
              >
                <span className="text-xs sm:text-sm font-bold text-ink-800 group-hover:text-sage-700 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif text-ink-900 mb-6">Software & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {softwareSkills.map((skill, i) => (
              <motion.div 
                key={skill} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-white/60 backdrop-blur-sm border border-white/90 p-4 rounded-xl flex items-center justify-center text-center shadow-glass hover:-translate-y-1 hover:bg-white/80 transition-all duration-300 group"
              >
                <span className="text-xs sm:text-sm font-bold text-ink-800 group-hover:text-sage-700 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 10. CERTIFICATIONS COMPONENT
// ==========================================
function Certifications() {
  const certifications = [
    "Learning Zoho CRM",
    "Data Visualization",
    "Marketing Analytics: Digital Marketing",
    "Cloud Computing",
    "Power BI Desktop",
    "Data Mining",
    "Tableau for Data scientists",
    "Data Analytics",
    "Web Scraping"
  ];

  return (
    <section id="certifications" className="section-container border-b border-cream-300/70">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">Continuous Learning</span>
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="glass-card p-5 sm:p-6 border border-white/90 flex items-center gap-4 group hover:-translate-y-1 duration-200">
               <div className="w-2.5 h-2.5 rounded-full bg-sage-500/40 group-hover:bg-sage-600 transition-colors shrink-0 shadow-xs"></div>
               <p className="text-xs sm:text-sm font-bold text-ink-800">{cert}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 11. STATS COMPONENT
// ==========================================
function Stats() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/90 shadow-glass">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-0 divide-x-0 sm:divide-x divide-cream-300/50 text-center">
            <div className="px-2 sm:px-4">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">3</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sage-600">Major Projects</p>
            </div>
            <div className="px-2 sm:px-4">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">9</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sage-600">Certifications</p>
            </div>
            <div className="px-2 sm:px-4">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">30+</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sage-600">Tools Mastered</p>
            </div>
            <div className="px-2 sm:px-4">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">MBA</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sage-600">Finance & Business Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 12. CONTACT COMPONENT
// ==========================================
function Contact() {
  return (
    <section id="contact" className="section-container pb-0">
      <div className="bg-gradient-to-br from-cream-200/80 via-white/80 to-cream-100/80 backdrop-blur-xl border border-white shadow-glass-hover p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 rounded-3xl">
        
        <div className="lg:w-1/2 text-center lg:text-left w-full">
          <span className="section-label">Let's Create Something Great</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink-900 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Have a project in mind? I'd love to hear about it.
          </h2>
          <a href="mailto:ramananmurugan081@gmail.com" className="btn-primary">
            Let's Talk &rarr;
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-5 w-full max-w-md mx-auto lg:mx-0">
          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md p-4 border border-white/90 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center text-sage-600 shrink-0">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] sm:text-xs font-bold text-ink-900 uppercase tracking-wider">Email</p>
              <p className="text-xs sm:text-sm text-ink-500 truncate">ramananmurugan081@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md p-4 border border-white/90 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center text-sage-600 shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-ink-900 uppercase tracking-wider">Phone</p>
              <p className="text-xs sm:text-sm text-ink-500">+91 8682016038</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md p-4 border border-white/90 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sage-500/10 border border-sage-500/20 flex items-center justify-center text-sage-600 shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-ink-900 uppercase tracking-wider">Location</p>
              <p className="text-xs sm:text-sm text-ink-500">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 13. FOOTER COMPONENT
// ==========================================
function Footer() {
  return (
    <footer className="pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-cream-300/70 mt-16 sm:mt-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 mb-16 sm:mb-24">
        
        {/* Brand */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-9 h-9 rounded-xl border border-sage-500/30 flex items-center justify-center bg-white/70 backdrop-blur-md shadow-xs">
              <Hexagon className="text-sage-600 shrink-0" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="font-sans font-bold text-ink-900 leading-none text-base sm:text-lg tracking-wide uppercase">Ramanan Murugan</h1>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-ink-500 mt-1">Business Analyst</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 flex-1">
          <div>
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-4 sm:mb-6">Navigation</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-ink-500">
              <li><a href="#" className="hover:text-sage-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sage-600 transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-sage-600 transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-sage-600 transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-4 sm:mb-6">Follow</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-ink-500">
              <li><a href="https://linkedin.com/in/ram-mur-024281213" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 transition-colors">LinkedIn</a></li>
              <li><a href="mailto:ramananmurugan081@gmail.com" className="hover:text-sage-600 transition-colors">Email</a></li>
              <li><a href="./RAMANAN_RESUME.pdf" target="_blank" className="hover:text-sage-600 transition-colors">Resume</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-4 sm:mb-6">Stay Inspired</h4>
            <p className="text-xs sm:text-sm text-ink-500 mb-3 sm:mb-4">Get analytics insights and updates straight to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="bg-white/70 backdrop-blur-md border border-white/90 px-4 py-2.5 text-xs sm:text-sm w-full outline-none focus:border-sage-500 text-ink-900 rounded-l-full shadow-xs" />
              <button className="bg-sage-500 text-white px-5 hover:bg-sage-600 transition-colors rounded-r-full shrink-0 shadow-xs" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-6 sm:pt-8 border-t border-cream-300/70 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-ink-500 text-center sm:text-left">
        <p>© 2026 Ramanan Murugan. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-ink-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  return (
    <div className="bg-cream-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <FeaturedProjects />
        <GithubProjects />
        <Services />
        <AiAutomation />
        <Experience />
        <Programmes />
        <Education />
        <Skills />
        <Certifications />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

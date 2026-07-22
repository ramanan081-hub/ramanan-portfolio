import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, Mail, Phone, MapPin, Hexagon, ArrowRight, 
  Monitor, Smartphone, LayoutDashboard, Database, Bot, 
  LineChart, Search, Globe, Mic 
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
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-100/95 backdrop-blur-md shadow-sm py-3.5 sm:py-4 border-b border-cream-300/50' : 'bg-transparent py-5 sm:py-8'}`}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded border-2 border-sage-500 flex items-center justify-center bg-sage-500/10 shrink-0">
            <span className="font-serif font-bold text-sage-600 text-lg leading-none pr-[1px]">R</span>
          </div>
          <div>
            <h1 className="font-sans font-bold text-ink-900 leading-none text-base sm:text-lg tracking-wide uppercase">Ramanan Murugan</h1>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink-500 mt-1">Business Analyst</p>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 xl:gap-12 text-xs font-bold uppercase tracking-widest text-ink-500">
            {links.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-ink-900 transition-colors pb-2 border-b-2 border-transparent hover:border-sage-500">{link.name}</a>
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
          className="lg:hidden text-ink-900 p-2 rounded-md hover:bg-cream-200/60 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[72px] bg-cream-100/98 backdrop-blur-xl shadow-2xl py-6 px-6 flex flex-col items-center gap-5 border-b border-cream-300 z-50"
        >
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-ink-700 hover:text-ink-900 text-sm font-bold uppercase tracking-widest py-1.5 w-full text-center"
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
    <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 lg:pb-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1536px] mx-auto overflow-hidden">
      <div className="absolute top-20 right-20 w-72 sm:w-96 h-72 sm:h-96 bg-sage-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-cream-300/20 rounded-full blur-2xl -z-10"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
        
        {/* Left Content */}
        <motion.div 
          className="lg:w-7/12 xl:w-3/5 w-full text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Data Driven Decisions</span>
          
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

        {/* Right Profile Graphic */}
        <motion.div 
          className="lg:w-5/12 xl:w-2/5 w-full relative flex justify-center lg:justify-end mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md xl:max-w-lg aspect-[4/5] bg-cream-200 rounded-[30px] sm:rounded-[40px] rounded-br-[80px] sm:rounded-br-[120px] overflow-hidden border-4 sm:border-8 border-white shadow-xl sm:shadow-2xl flex items-center justify-center group">
             <img 
               src="./profile.jpg" 
               alt="Ramanan Murugan" 
               loading="eager"
               fetchpriority="high"
               decoding="async"
               className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#737C6C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
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
      >
        <span className="section-label">Background</span>
        <h2 className="section-title">About Me</h2>
        <div className="text-ink-500 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 w-full max-w-5xl">
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
      bgColor: "bg-[#E6E8E3]"
    },
    {
      title: "Rural Innovation Project (RIP)",
      description: "Analyzed data to introduce economic and social value to rural life in Theni. Built data visualizations and dashboards to highlight findings.",
      tech: "Advanced Excel, Power BI",
      date: "Mar 2024",
      bgColor: "bg-[#1A1A1A]",
      dark: true
    },
    {
      title: "Social Immersion Project (SIP)",
      description: "Focused on improving communication and emotional support at an old age home, collaborating with a new organization to provide social value.",
      tech: "Social Immersion, Field Research",
      date: "Dec 2023",
      bgColor: "bg-[#F0EEEB]"
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
            <div className={`p-6 sm:p-8 ${project.bgColor} rounded-sm flex flex-col justify-between mb-4 sm:mb-6 relative overflow-hidden transition-transform group-hover:-translate-y-1.5 duration-300 min-h-[220px] sm:aspect-[4/3]`}>
              <div className="flex justify-between items-start z-10 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${project.dark ? 'text-white/50' : 'text-ink-500/50'}`}>
                  {project.date}
                </span>
                <span className={`px-2 py-0.5 text-[9px] sm:text-[10px] uppercase border rounded-sm ${project.dark ? 'text-white/40 border-white/20' : 'text-ink-500/40 border-ink-500/20'}`}>
                  Academic
                </span>
              </div>
              <h3 className={`text-base sm:text-xl font-serif leading-relaxed sm:leading-tight max-w-[280px] z-10 mb-2 ${project.dark ? 'text-white' : 'text-ink-900'}`}>
                {project.description}
              </h3>
              {project.dark ? (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rotate-45 transform pointer-events-none"></div>
              ) : (
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-black/5 rounded-full pointer-events-none"></div>
              )}
            </div>

            <div className="flex justify-between items-start pb-4 border-b border-cream-300">
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
    <section id="services" className="border-t border-cream-300">
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
                className="flex flex-col bg-white p-6 sm:p-8 rounded-sm border border-cream-300/80 shadow-sm hover:border-sage-500 transition-colors"
              >
                <div className="h-11 w-11 rounded-full border border-cream-300 flex items-center justify-center text-sage-500 mb-5 bg-cream-50">
                  {service.icon}
                </div>
                <h3 className="font-bold text-ink-900 text-base sm:text-lg mb-2">{service.title}</h3>
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
      desc: "Promoted to lead business analytics. Focused on preparing monthly management reports, verifying overall data accuracy across SQL Server and Power BI, monitoring inter-division transfers, and coordinating with multiple departments to ensure reliable data reporting."
    }
  ];

  return (
    <section id="experience" className="section-container border-b border-cream-300">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Career Progression</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Experience</h2>
        </div>
        
        <div className="lg:w-3/4 w-full">
          <div className="flex flex-col gap-10 sm:gap-16 relative">
            <div className="absolute top-6 bottom-4 left-[23px] sm:left-[27px] w-[2px] bg-cream-300 z-0">
              <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 border-b border-r border-cream-300 transform rotate-45"></div>
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-cream-200 shadow-sm flex items-center justify-center text-ink-500 shrink-0 relative z-10">
                    {step.icon}
                  </div>
                </div>
                
                <div className="pt-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-bold text-cream-400 uppercase tracking-widest">{step.num}</span>
                    <h3 className="font-bold text-lg sm:text-2xl text-ink-900">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-sage-500 uppercase tracking-wider mb-1">{step.company}</p>
                  <p className="text-[11px] sm:text-xs text-ink-400 font-mono mb-3">{step.date}</p>
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
    <section id="process" className="section-container border-b border-cream-300">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">International Exposure</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Programmes</h2>
        </div>
        
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 relative">
            <div className="hidden md:block absolute top-[28px] left-8 right-8 h-[1px] bg-cream-300 z-0"></div>

            {programmes.map((step, i) => (
              <motion.div 
                key={i}
                className="relative z-10 flex flex-col items-start text-left bg-white p-6 sm:p-8 rounded-sm border border-cream-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-cream-400 uppercase tracking-widest">{step.num}</span>
                  <div className="w-11 h-11 rounded-full bg-cream-100 border border-cream-300 flex items-center justify-center text-sage-500 shrink-0">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-ink-900 text-base sm:text-lg mb-1">{step.title}</h3>
                <p className="text-xs font-bold text-sage-500 uppercase tracking-wider mb-1.5">{step.company}</p>
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
    <section id="education" className="section-container border-b border-cream-300">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Background</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-900">Education</h2>
        </div>
        
        <div className="lg:w-3/4 w-full">
          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                className="relative pb-8 sm:pb-12 border-b border-cream-300 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-ink-900">{edu.degree}</h3>
                  <span className="text-[11px] font-mono text-ink-500 self-start sm:self-auto bg-cream-200 px-3 py-1 rounded-sm">{edu.date}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-sage-500 mb-1.5">{edu.major}</p>
                <p className="text-xs sm:text-sm text-ink-500">{edu.school}</p>
                <p className="text-xs text-ink-400 mt-1.5">Score: {edu.score}</p>
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
  const skillGroups = [
    {
      category: "Technical Skills",
      skills: [
        "Business Analytics", "Web Scraping", "Share Market Analysis", 
        "Data Analysis", "Big Data Analysis", "Cloud Computing", 
        "SQL", "Data Visualization", "Data Management", 
        "Business Intelligence", "Marketing Analysis", "Financial & Market Analysis", 
        "Social Media Analytics", "Vibe Coding", "MCP / API", "Data Pipelines",
        "Report Creation", "Dashboard Development", "AI Automation", "ERP Data Loading",
        "Relational Databases", "Database Relationship Management", "Data Quality Development",
        "Technical Analysis", "KPI Analysis"
      ]
    },
    {
      category: "Software & Tools",
      skills: [
        "Microsoft Office", "Excel", "IBM SPSS", "Google Forms", 
        "Zoho Recruit", "Tableau", "Power BI", "AWS", 
        "MySQL", "Zoho CRM", "Canva", "Google Analytics", 
        "AI Tools", "Python"
      ]
    }
  ];

  return (
    <section id="skills" className="section-container border-b border-cream-300">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">Capabilities</span>
        <h2 className="section-title">Skills & Software</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {skillGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-sm p-6 sm:p-8 border border-cream-300 hover:border-sage-500 transition-colors">
              <h3 className="text-base sm:text-lg font-serif text-ink-900 mb-4 sm:mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {group.skills.map(skill => (
                  <span key={skill} className="px-2.5 sm:px-3 py-1 bg-cream-100 text-ink-800 text-[11px] sm:text-xs font-medium rounded-sm border border-cream-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
    <section id="certifications" className="section-container border-b border-cream-300">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">Continuous Learning</span>
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-white rounded-sm p-4 sm:p-6 border border-cream-300 hover:border-sage-500 transition-colors flex items-center gap-3 sm:gap-4 group">
               <div className="w-2 h-2 rounded-full bg-sage-500/30 group-hover:bg-sage-500 transition-colors shrink-0"></div>
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
    <div className="bg-cream-200 border-y border-cream-300">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-0 divide-x-0 sm:divide-x divide-cream-300/50 text-center">
          <div className="px-2 sm:px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">3</p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-ink-500">Major Projects</p>
          </div>
          <div className="px-2 sm:px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">9</p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-ink-500">Certifications</p>
          </div>
          <div className="px-2 sm:px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">30+</p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-ink-500">Tools Mastered</p>
          </div>
          <div className="px-2 sm:px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink-900 mb-1.5 sm:mb-2">MBA</p>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-ink-500">Finance & Business Analysis</p>
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
      <div className="bg-cream-200 border border-cream-300 p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 rounded-sm">
        
        <div className="lg:w-1/2 text-center lg:text-left w-full">
          <span className="section-label">Let's Create Something Great</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink-900 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Have a project in mind? I'd love to hear about it.
          </h2>
          <a href="mailto:ramananmurugan081@gmail.com" className="btn-primary">
            Let's Talk &rarr;
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto lg:mx-0">
          <div className="flex items-center gap-4 bg-white p-4 border border-cream-300 rounded-sm">
            <Mail className="text-sage-500 shrink-0" size={20} />
            <div className="overflow-hidden">
              <p className="text-[10px] sm:text-xs font-bold text-ink-900 uppercase">Email</p>
              <p className="text-xs sm:text-sm text-ink-500 truncate">ramananmurugan081@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-4 border border-cream-300 rounded-sm">
            <Phone className="text-sage-500 shrink-0" size={20} />
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-ink-900 uppercase">Phone</p>
              <p className="text-xs sm:text-sm text-ink-500">+91 8682016038</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 border border-cream-300 rounded-sm">
            <MapPin className="text-sage-500 shrink-0" size={20} />
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-ink-900 uppercase">Location</p>
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
    <footer className="pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-cream-300 mt-16 sm:mt-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 mb-16 sm:mb-24">
        
        {/* Brand */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Hexagon className="text-sage-500 shrink-0" size={28} strokeWidth={1.5} />
            <div>
              <h1 className="font-sans font-bold text-ink-900 leading-none text-base sm:text-lg tracking-wide uppercase">Ramanan Murugan</h1>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-ink-500 mt-1">Business Analyst</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 flex-1">
          <div>
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-4 sm:mb-6">Navigation</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-ink-500">
              <li><a href="#" className="hover:text-sage-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sage-500 transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-sage-500 transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-sage-500 transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-4 sm:mb-6">Follow</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-ink-500">
              <li><a href="https://linkedin.com/in/ram-mur-024281213" target="_blank" rel="noopener noreferrer" className="hover:text-sage-500 transition-colors">LinkedIn</a></li>
              <li><a href="mailto:ramananmurugan081@gmail.com" className="hover:text-sage-500 transition-colors">Email</a></li>
              <li><a href="./RAMANAN_RESUME.pdf" target="_blank" className="hover:text-sage-500 transition-colors">Resume</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-4 sm:mb-6">Stay Inspired</h4>
            <p className="text-xs sm:text-sm text-ink-500 mb-3 sm:mb-4">Get analytics insights and updates straight to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="bg-cream-200 border border-cream-300 px-3 sm:px-4 py-2 text-xs sm:text-sm w-full outline-none focus:border-sage-500 text-ink-900 rounded-l-sm" />
              <button className="bg-sage-500 text-white px-3 sm:px-4 hover:bg-sage-600 transition-colors rounded-r-sm shrink-0" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-6 sm:pt-8 border-t border-cream-300 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-ink-500 text-center sm:text-left">
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
        <Services />
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

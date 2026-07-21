import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Technical Analysis & Classic Charts",
      description: "Analysed interest rates of house loans, verification processes, and the relevance of classic charts in the banking sector using T-Tests and ANOVA.",
      tech: "IBM SPSS, Statistical Analysis",
      date: "Aug 2024 - Sep 2024",
      bgColor: "bg-[#E6E8E3]" // Sage light
    },
    {
      title: "Rural Innovation Project (RIP)",
      description: "Analyzed data to introduce economic and social value to rural life in Theni. Built data visualizations and dashboards to highlight findings.",
      tech: "Advanced Excel, Power BI",
      date: "Mar 2024",
      bgColor: "bg-[#1A1A1A]", // Dark
      dark: true
    },
    {
      title: "Social Immersion Project (SIP)",
      description: "Focused on improving communication and emotional support at an old age home, collaborating with a new organization to provide social value.",
      tech: "Social Immersion, Field Research",
      date: "Dec 2023",
      bgColor: "bg-[#F0EEEB]" // Warm cream
    }
  ];

  return (
    <section id="work" className="section-container">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="section-label">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ink-900">College Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i} 
            className="group block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Card Graphic Area */}
            <div className={`aspect-[4/3] ${project.bgColor} rounded-sm p-8 flex flex-col justify-between mb-6 relative overflow-hidden transition-transform group-hover:-translate-y-2 duration-300`}>
              <div className="flex justify-between items-start z-10">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${project.dark ? 'text-white/50' : 'text-ink-500/50'}`}>
                  {project.date}
                </span>
                <span className={`px-2 py-1 text-[10px] uppercase border rounded-sm ${project.dark ? 'text-white/30 border-white/20' : 'text-ink-500/30 border-ink-500/20'}`}>
                  Academic
                </span>
              </div>
              <h3 className={`text-xl font-serif leading-tight max-w-[220px] z-10 ${project.dark ? 'text-white' : 'text-ink-900'}`}>
                {project.description}
              </h3>
              
              {/* Abstract decorative element based on theme */}
              {project.dark ? (
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rotate-45 transform"></div>
              ) : (
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-black/5 rounded-full"></div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex justify-between items-start pb-4 border-b border-cream-300">
              <div>
                <h4 className="font-bold text-ink-900 mb-1 max-w-[250px]">{project.title}</h4>
                <p className="text-xs text-ink-500">{project.tech}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

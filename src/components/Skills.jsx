import { motion } from 'framer-motion';

export default function Skills() {
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Capabilities</span>
        <h2 className="section-title">Skills & Software</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-sm p-8 border border-cream-300 hover:border-sage-500 transition-colors">
              <h3 className="text-lg font-serif text-ink-900 mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-cream-100 text-ink-800 text-xs font-medium rounded-sm border border-cream-300">
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

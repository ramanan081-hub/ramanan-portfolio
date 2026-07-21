import { motion } from 'framer-motion';

export default function Certifications() {
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Continuous Learning</span>
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-white rounded-sm p-6 border border-cream-300 hover:border-sage-500 transition-colors flex items-center gap-4 group">
              <div className="w-2 h-2 rounded-full bg-sage-500/30 group-hover:bg-sage-500 transition-colors"></div>
              <p className="text-sm font-bold text-ink-800">{cert}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

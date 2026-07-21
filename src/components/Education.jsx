import { motion } from 'framer-motion';

export default function Education() {
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
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Background</span>
          <h2 className="text-4xl font-serif text-ink-900">Education</h2>
        </div>
        
        <div className="lg:w-3/4">
          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                className="relative pb-12 border-b border-cream-300 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-serif text-ink-900">{edu.degree}</h3>
                  <span className="text-xs font-mono text-ink-500 mt-2 md:mt-0 bg-cream-200 px-3 py-1 rounded-sm">{edu.date}</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-sage-500 mb-2">{edu.major}</p>
                <p className="text-sm text-ink-500">{edu.school}</p>
                <p className="text-xs text-ink-400 mt-2">Score: {edu.score}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Globe, Mic } from 'lucide-react';

export default function Programmes() {
  const programmes = [
    {
      num: "01",
      icon: <Globe size={20} strokeWidth={1.5} />,
      title: "Global Immersion Programme",
      company: "know skills TVES college, Kuala Lumpur, Malaysia",
      date: "Sep 2024",
      desc: "Gained insights into international business protocols, cross-cultural communication skills, cultural etiquette, table manners, and advanced AI business intelligence."
    },
    {
      num: "02",
      icon: <Mic size={20} strokeWidth={1.5} />,
      title: "Conference Presenter",
      company: "International & National Conference",
      date: "Dec 2024",
      desc: "Presented a research paper on 'The Study on explore classic chart and their relevance in technical analysis' at an international-level academic conference organized in Malaysia."
    }
  ];

  return (
    <section id="programmes" className="section-container border-b border-cream-300">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">International Exposure</span>
          <h2 className="text-4xl font-serif text-ink-900">Programmes</h2>
        </div>
        
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[28px] left-8 right-8 h-[1px] bg-cream-300 z-0"></div>

            {programmes.map((step, i) => (
              <motion.div 
                key={i}
                className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6 bg-cream-100 px-2">
                  <span className="text-[10px] font-bold text-cream-300 uppercase tracking-widest">{step.num}</span>
                  <div className="w-14 h-14 rounded-full bg-white border border-cream-300 flex items-center justify-center text-ink-500">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-ink-900 mb-1">{step.title}</h3>
                <p className="text-xs font-bold text-sage-500 uppercase tracking-wider mb-2">{step.company}</p>
                <p className="text-xs text-ink-500 font-mono mb-4">{step.date}</p>
                <p className="text-sm text-ink-500 leading-relaxed max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

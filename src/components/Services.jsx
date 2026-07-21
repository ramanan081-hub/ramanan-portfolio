import { Monitor, Smartphone, LayoutDashboard, Database, Bot, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Database size={24} strokeWidth={1.5} />,
      title: "Data Pipelines",
      desc: "Connecting SQL Server ERP data to live Power BI models for real-time tracking."
    },
    {
      icon: <LayoutDashboard size={24} strokeWidth={1.5} />,
      title: "BI Dashboards",
      desc: "Designing intuitive, interactive Power BI reports that leadership actually uses."
    },
    {
      icon: <Monitor size={24} strokeWidth={1.5} />,
      title: "Business Analytics",
      desc: "Mining business data to surface operational problems and data-driven solutions."
    },
    {
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      title: "UI/UX & Web Dev",
      desc: "Building internal web tools and interfaces using AI-assisted vibe coding."
    },
    {
      icon: <Bot size={24} strokeWidth={1.5} />,
      title: "Agentic AI & Automation",
      desc: "Leveraging MCP protocols and APIs to connect multiple AI agents to collaborate and execute complex workflows."
    },
    {
      icon: <LineChart size={24} strokeWidth={1.5} />,
      title: "Python Data Analysis",
      desc: "Utilizing Python, Pandas, NumPy, and Matplotlib for advanced data manipulation, statistical modeling, and visualization."
    }
  ];

  return (
    <section id="services" className="border-t border-cream-300">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <span className="section-label">What I Do</span>
            <h2 className="text-4xl font-serif text-ink-900">Expertise</h2>
          </div>
          
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="h-12 w-12 rounded-full border border-cream-300 flex items-center justify-center text-sage-500 mb-6 bg-white">
                  {service.icon}
                </div>
                <h3 className="font-bold text-ink-900 mb-3">{service.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

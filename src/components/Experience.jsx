import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, Database } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      num: "01",
      icon: <Search size={20} strokeWidth={1.5} />,
      title: "Finance Intern",
      company: "Grihum Housing Finance Limited",
      date: "Mar 2025 – Apr 2025",
      desc: (
        <div className="space-y-4">
          <p>Focused primarily on developing advanced Power BI reports to drive financial development and analytics. Supported the lending team by performing CIBIL credit score verification and building Excel financial models for variance analysis.</p>
          <div>
            <span className="font-bold text-ink-900">Key Dashboards Developed:</span>
            <ul className="list-disc pl-4 mt-2 space-y-1 text-ink-500">
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
      icon: <Database size={20} strokeWidth={1.5} />,
      title: "MIS Trainee",
      company: "Bannari Amman Group",
      date: "Dec 2025 - Apr 2026",
      desc: (
        <div className="space-y-4">
          <p>Extracted raw operational data from the company ERP system into Excel formats to develop advanced Power BI reports for management across three manufacturing units.</p>
          <div>
            <span className="font-bold text-ink-900">Key Dashboards Developed:</span>
            <ul className="list-disc pl-4 mt-2 space-y-3 text-ink-500 text-sm">
              <li><strong className="text-ink-900">Monthly Sales:</strong> Conducted comprehensive sales analysis (monthly and year-over-year), tracking pre-tax and post-tax revenue. Segmented data by customer, agent, day, and manufacturing unit for multidimensional performance tracking.</li>
              <li><strong className="text-ink-900">Outstanding Receivables:</strong> Tracked customer and trader outstanding balances against their annual and monthly average sales. Implemented a grading system to evaluate and categorize customers based on their payment holding days.</li>
              <li><strong className="text-ink-900">Maintenance Cost Analysis:</strong> Monitored electrical and mechanical maintenance expenses to identify high-spending areas, isolate cost drivers, and investigate the root causes of excess expenditure.</li>
              <li><strong className="text-ink-900">Unmoved Stock & Factory Ageing:</strong> Analyzed factory inventory to identify unmoved stock categories, tracking day-wise ageing to determine why specific product types were stagnant.</li>
              <li><strong className="text-ink-900">Booking to Delivery Performance:</strong> Tracked the complete order lifecycle from booking date to final product delivery, calculating exact fulfillment timeframes and identifying root causes for shipment delays.</li>
              <li><strong className="text-ink-900">Cross-Divisional Top Sellers & Buyers:</strong> Developed a comprehensive report across Spinning, Weaving, Knitting, Processing, and Home Textiles divisions. Profiled the top 5 buyers and sellers, analyzing complete company profiles alongside sales, purchases, and outstanding balance metrics.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      num: "03",
      icon: <Database size={20} strokeWidth={1.5} />,
      title: "Business Analyst",
      company: "Bannari Amman Group",
      date: "May 2026 - Present",
      desc: "Promoted to lead business analytics. Focused on preparing monthly management reports, verifying overall data accuracy across SQL Server and Power BI, monitoring inter-division transfers, and coordinating with multiple departments to ensure reliable data reporting."
    }
  ];

  return (
    <section id="experience" className="section-container border-b border-cream-300">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Career Progression</span>
          <h2 className="text-4xl font-serif text-ink-900">Experience</h2>
        </div>
        
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-16 relative">
            
            {/* Vertical Connecting Line with Down Arrow */}
            <div className="absolute top-8 bottom-4 left-[27px] w-[2px] bg-cream-300 z-0">
              {/* Arrow Head */}
              <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-3 h-3 border-b border-r border-cream-300 transform rotate-45"></div>
            </div>

            {experiences.map((step, i) => (
              <motion.div 
                key={i}
                className="relative z-10 flex flex-col sm:flex-row gap-6 md:gap-10 items-start text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-cream-200 shadow-sm flex items-center justify-center text-ink-500 shrink-0 relative z-10">
                    {step.icon}
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-cream-400 uppercase tracking-widest">{step.num}</span>
                    <h3 className="font-bold text-xl md:text-2xl text-ink-900">{step.title}</h3>
                  </div>
                  <p className="text-sm font-bold text-sage-500 uppercase tracking-wider mb-1">{step.company}</p>
                  <p className="text-xs text-ink-400 font-mono mb-4">{step.date}</p>
                  <div className="text-sm text-ink-500 leading-relaxed max-w-2xl">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="text-ink-500 text-lg leading-relaxed space-y-6 w-full">
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

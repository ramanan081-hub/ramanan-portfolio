import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-sage-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cream-300/20 rounded-full blur-2xl -z-10"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Content */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Data Driven Decisions</span>
          
          <h1 className="text-5xl md:text-7xl font-serif text-ink-900 leading-[1.1] mb-8">
            I build data <br/>
            systems that are <br/>
            <span className="italic font-light text-sage-600">intuitive, intelligent</span><br/>
            and impactful.
          </h1>
          
          <p className="text-ink-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
            I'm Ramanan Murugan, a dedicated Business and Data Analyst. My core focus is advanced data management, leveraging AI to automate tasks, simplify complex workflows, and engineer high-quality reports. I am deeply committed to continuous upskilling, improving my analytics expertise every single day to drive real business growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">
              View My Work &rarr;
            </a>
            <a href="#contact" className="btn-outline">
              Let's Work Together &rarr;
            </a>
          </div>
        </motion.div>

        {/* Right Image/Graphic Area */}
        <motion.div 
          className="lg:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Profile Image */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-cream-200 rounded-[40px] rounded-br-[120px] overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center group">
             <img src="/profile.jpg" alt="Ramanan Murugan" className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#737C6C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
          

        </motion.div>

      </div>
    </section>
  );
}

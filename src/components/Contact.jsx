import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-container pb-0">
      <div className="bg-cream-200 border border-cream-300 p-12 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-10">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="section-label">Let's Create Something Great</span>
          <h2 className="text-4xl font-serif text-ink-900 mb-8 max-w-sm mx-auto lg:mx-0">
            Have a project in mind? I'd love to hear about it.
          </h2>
          <a href="mailto:ramananmurugan081@gmail.com" className="btn-primary">
            Let's Talk &rarr;
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
          <div className="flex items-center gap-4 bg-white p-4 border border-cream-300 rounded-sm">
            <Mail className="text-sage-500" size={20} />
            <div>
              <p className="text-xs font-bold text-ink-900 uppercase">Email</p>
              <p className="text-sm text-ink-500">ramananmurugan081@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-4 border border-cream-300 rounded-sm">
            <Phone className="text-sage-500" size={20} />
            <div>
              <p className="text-xs font-bold text-ink-900 uppercase">Phone</p>
              <p className="text-sm text-ink-500">+91 8682016038</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 border border-cream-300 rounded-sm">
            <MapPin className="text-sage-500" size={20} />
            <div>
              <p className="text-xs font-bold text-ink-900 uppercase">Location</p>
              <p className="text-sm text-ink-500">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { Hexagon, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-cream-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-16 mb-24">
        
        {/* Brand */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-6">
            <Hexagon className="text-sage-500" size={28} strokeWidth={1.5} />
            <div>
              <h1 className="font-sans font-bold text-ink-900 leading-none text-lg tracking-wide uppercase">Ramanan Murugan</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mt-1">Business Analyst</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-1">
          <div>
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              <li><a href="#" className="hover:text-sage-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sage-500 transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-sage-500 transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-sage-500 transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-6">Follow</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              <li><a href="https://linkedin.com/in/ram-mur-024281213" target="_blank" rel="noopener noreferrer" className="hover:text-sage-500 transition-colors">LinkedIn</a></li>
              <li><a href="mailto:ramananmurugan081@gmail.com" className="hover:text-sage-500 transition-colors">Email</a></li>
              <li><a href="/RAMANAN_RESUME.pdf" target="_blank" className="hover:text-sage-500 transition-colors">Resume</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold text-ink-900 uppercase tracking-widest mb-6">Stay Inspired</h4>
            <p className="text-sm text-ink-500 mb-4">Get design insights and updates straight to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="bg-cream-200 border border-cream-300 px-4 py-2 text-sm w-full outline-none focus:border-sage-500 text-ink-900" />
              <button className="bg-sage-500 text-white px-4 hover:bg-sage-600 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-cream-300 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-500">
        <p>© 2026 Ramanan Murugan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

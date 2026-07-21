export default function Testimonials() {
  return (
    <section className="section-container border-b border-cream-300">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/4">
          <span className="section-label">Colleagues Say</span>
          <h2 className="text-4xl font-serif text-ink-900">Kind Words</h2>
        </div>
        
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-10 rounded-sm shadow-sm border border-cream-300 relative">
            <span className="absolute top-8 left-8 text-6xl font-serif text-cream-300 leading-none h-8">“</span>
            <p className="text-sm text-ink-500 leading-relaxed relative z-10 italic mb-8 mt-4">
              Ramanan is an exceptional analyst who truly understands how to translate complex ERP data into clear, actionable insights that leadership can actually use.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-sage-500 font-serif font-bold">M</div>
              <div>
                <p className="text-sm font-bold text-ink-900">Manager</p>
                <p className="text-xs text-ink-500">BASML</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-sm border border-cream-300 relative">
            <span className="absolute top-8 left-8 text-6xl font-serif text-cream-300 leading-none h-8">“</span>
            <p className="text-sm text-ink-500 leading-relaxed relative z-10 italic mb-8 mt-4">
              Professional, reliable, and incredibly talented. He transformed our reporting workflow into a beautiful, automated digital experience.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cream-300 flex items-center justify-center text-ink-500 font-serif font-bold">S</div>
              <div>
                <p className="text-sm font-bold text-ink-900">Stakeholder</p>
                <p className="text-xs text-ink-500">SPG Division</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Stats() {
  return (
    <div className="bg-cream-200 border-y border-cream-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-300/50 text-center">
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-serif text-ink-900 mb-2">3</p>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Major Projects</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-serif text-ink-900 mb-2">9</p>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Certifications</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-serif text-ink-900 mb-2">30+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Tools Mastered</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-serif text-ink-900 mb-2">MBA</p>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Finance & Business Analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

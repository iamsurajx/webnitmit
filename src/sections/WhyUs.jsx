export default function WhyUs() {
  const topTags = [
    "RESULT-DRIVEN CASE STUDIES",
    "SCALABLE FULL-STACK SOLUTIONS",
    "CLOUD & CYBER SECURITY EXPERTISE",
    "PREMIUM UI/UX DESIGN",
    "BUSINESS GROWTH THROUGH TECHNOLOGY",
  ];

  const bottomTags = [
    "DATA-POWERED DECISION MAKING",
    "FASTER TIME-TO-MARKET",
    "ROI-FOCUSED DEVELOPMENT",
    "MODERN TECH STACK (React + Node.js)",
    "TRUSTED BY STARTUPS & ENTERPRISES",
  ];

  return (
    <section id="whyus" className="bg-black text-white px-8 md:px-16 py-24 overflow-hidden">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16">WHY CHOOSE US</h2>

      {/* TOP MOVING ROW (Left → Right) */}
      <div className="flex gap-4 whitespace-nowrap animate-scroll-left mb-8">
        {[...topTags, ...topTags].map((tag, i) => (
          <div
            key={i}
            className="px-6 py-3 bg-neutral-800 text-sm text-neutral-300 rounded-md border border-neutral-700"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* BOTTOM MOVING ROW (Right → Left) */}
      <div className="flex gap-4 whitespace-nowrap animate-scroll-right">
        {[...bottomTags, ...bottomTags].map((tag, i) => (
          <div
            key={i}
            className="px-6 py-3 bg-neutral-900 text-sm text-neutral-300 rounded-md border border-neutral-700"
          >
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}

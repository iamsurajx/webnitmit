import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();

  const projects = {
    "ai-dashboard": {
      title: "AI Dashboard Case Study",
      intro: "How we built a scalable AI-powered dashboard for real-time insights.",
      preview: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      challenge: "Client needed a dashboard to process large datasets in real-time...",
      approach: [
        "React.js for fast, interactive charts",
        "Node.js APIs for real-time data streaming",
        "Integration with ML models for predictions",
      ],
      features: [
        "Dynamic chart rendering",
        "Role-based access control",
        "Real-time notifications",
      ],
      results: [
        "⚡ Data processing speed improved 3x",
        "📊 User engagement up by 62%",
        "💰 Reduced operational costs by 40%",
      ],
      testimonial:
        "Suraj’s team delivered an AI dashboard that transformed our decision-making. Real-time insights gave us a competitive edge.",
      conclusion:
        "This project proved how React + Node.js can power AI-driven analytics at scale.",
    },

// web-development case study data
    "web-development": {
  title: "Modern Web Development for a Tech Agency",
  intro: "A case study on how we rebuilt a legacy site into a fast, scalable platform.",
  preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  challenge: "They had a legacy website that was slow, non-responsive, and difficult to update...",
  approach: [
    "React.js for fast, reusable UI components",
    "Node.js + Express APIs for dynamic content",
    "CMS integration for easy updates",
    "SEO optimization for visibility",
  ],
  features: [
    "Responsive React UI",
    "Dynamic content management",
    "Secure backend APIs",
    "SEO-optimized structure",
    "Scalable architecture",
  ],
  results: [
    "⚡ Page load time: 3.8s → 1.0s",
    "📱 Mobile bounce rate: reduced by 55%",
    "📈 Lead generation: increased by 72%",
    "💰 Revenue: ₹12 lakh → ₹29 lakh",
  ],
  testimonial:
    "Suraj’s team gave us a modern, scalable website that our marketing team can manage without developers. The speed and SEO improvements directly boosted our leads.",
  conclusion:
    "This project showed how modern web development isn’t just about design — it’s about business growth.",
},

// Mobile App UI case study data
"mobile-app-ui": {
  title: "Redesigning a Mobile App UI for Better Engagement",
  intro: "A case study on how we modernized a lifestyle app’s interface and boosted retention.",
  preview: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  challenge: "Their mobile app had an outdated interface and poor user retention...",
  approach: [
    "React Native for modern UI",
    "Node.js APIs for faster sync",
    "Simplified onboarding flows",
    "Reusable design system",
  ],
  features: [
    "Clean, modern UI",
    "One-click onboarding",
    "Personalized dashboards",
    "Push notifications",
    "Dark mode support",
  ],
  results: [
    "⚡ App load time: 3.5s → 1.2s",
    "📱 User retention: +68%",
    "⭐ App store rating: 3.2 → 4.6",
    "💰 Monthly active users: 25k → 62k",
  ],
  testimonial:
    "Suraj’s team transformed our app experience. The new UI feels premium, and our users are finally sticking around.",
  conclusion:
    "This project proved that UI/UX design directly impacts business growth.",
},

// Data Analytics case study data
"data-analytics": {
  title: "Building a Scalable Data Analytics Platform",
  intro: "A case study on how we automated reporting and delivered real-time dashboards.",
  preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  challenge: "They were struggling with manual reporting and slow data processing...",
  approach: [
    "React.js dashboards with dynamic charts",
    "Node.js APIs for real-time aggregation",
    "MongoDB pipelines for fast queries",
    "Role-based access for secure usage",
  ],
  features: [
    "Real-time dashboards",
    "Automated reporting",
    "Secure role-based access",
    "External API integrations",
    "One-click export",
  ],
  results: [
    "⚡ Report generation: 2h → 15s",
    "📈 Decision-making speed: +80%",
    "🔍 Data accuracy: +95%",
    "💰 Efficiency savings: ₹10 lakh/month",
  ],
  testimonial:
    "Suraj’s team gave us a powerful analytics platform. Reports that used to take hours are now ready in seconds.",
  conclusion:
    "This project proved that data analytics is the backbone of smart business decisions.",
},

// Cyber Security case study data
"cyber-security": {
  title: "Strengthening Cyber Security for a FinTech Platform",
  intro: "A case study on how we secured sensitive data and achieved compliance.",
  preview: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
  challenge: "They were facing frequent security breaches and compliance issues...",
  approach: [
    "React.js secure login flows",
    "Node.js middleware for validation",
    "AES-256 encryption for data",
    "Real-time monitoring and alerts",
  ],
  features: [
    "Two-factor authentication",
    "End-to-end encryption",
    "Role-based access control",
    "Intrusion detection system",
    "Audit logs for compliance",
  ],
  results: [
    "🔐 Breaches reduced: 100%",
    "⚡ Login success rate: +45%",
    "📊 Compliance: ISO 27001 certified",
    "💰 Customer retention: +62%",
  ],
  testimonial:
    "Suraj’s team transformed our security posture. We went from constant breaches to full compliance.",
  conclusion:
    "Cyber security is the foundation of digital business. With React and Node.js, we delivered trust and compliance.",
},

// cloud-system case study data
"cloud-system": {
  title: "Migrating to a Scalable Cloud System",
  intro: "A case study on how we modernized infrastructure with cloud-native solutions.",
  preview: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  challenge: "They were running on on-premise servers that were expensive and prone to downtime...",
  approach: [
    "Node.js microservices for scalability",
    "React.js dashboard for monitoring",
    "Cloud integration with auto-scaling",
    "Automated backups and disaster recovery",
  ],
  features: [
    "Auto-scaling infrastructure",
    "Real-time monitoring",
    "Automated backup",
    "Secure role-based access",
    "Cost optimization",
  ],
  results: [
    "⚡ Downtime reduced: 95%",
    "📈 Scalability: 3x peak traffic",
    "💰 Costs reduced: 42%",
    "🔒 Compliance achieved",
  ],
  testimonial:
    "Suraj’s team helped us move to the cloud seamlessly. Our systems are faster, more reliable, and costs have dropped significantly.",
  conclusion:
    "Cloud migration is about resilience and growth. With React and Node.js, we delivered scalability, security, and efficiency.",
},


    // Add ecommerce-startup, saas-company, etc. here
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-gray-400 mb-6">{project.intro}</p>

        <div className="h-[300px] bg-gray-800 rounded-xl flex items-center justify-center mb-10 overflow-hidden">
          <img
            src={project.preview}
            alt="Project Preview"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p>{project.challenge}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.approach.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features Delivered</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Client Testimonial</h2>
          <blockquote className="italic text-gray-300">“{project.testimonial}”</blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>{project.conclusion}</p>
        </section>
      </div>
    </div>
  );
}

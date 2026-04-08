const services = [
  "End-to-End Product Delivery",
  "Creative Design Solutions",
  "Mobile App Development",
  "Web App Development",
  "Custom AI + ML Solutions",
  "Data Engineering & Governance Solutions",
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white px-8 md:px-16 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            OUR SERVICES
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            We offer a range of services to design, build and scale your products.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-6 py-6 border-b border-gray-800"
            >

              {/* Number */}
              <span className="text-red-500 text-sm font-medium w-6">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-medium">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
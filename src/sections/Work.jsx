import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "AI Dashboard",
    slug: "ai-dashboard",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    size: "row-span-2",
  },
  {
    id: 2,
    title: "Mobile App UI",
    slug: "mobile-app-ui",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    size: "row-span-1",
  },
  {
    id: 3,
    title: "Web Development",
    slug: "web-development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    size: "row-span-3",
  },
  {
    id: 4,
    title: "Cloud System",
    slug: "cloud-system",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    size: "row-span-1",
  },
  {
    id: 5,
    title: "Data Analytics",
    slug: "data-analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    size: "row-span-2",
  },
  {
    id: 6,
    title: "Cyber Security",
    slug: "cyber-security",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    size: "row-span-1",
  },
];


export default function Work() {
    const navigate = useNavigate(); // ✅ INSIDE component
  return (
    <section id="work" className="bg-black text-white px-8 md:px-16 py-24">

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16">
        OUR WORK
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[150px] gap-4 md:gap-6">

        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/work/${item.slug}`)}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.size}`}
          >

            {/* Image */}
            <img
              src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white text-sm font-semibold">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
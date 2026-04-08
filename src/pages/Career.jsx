import { useState } from "react";
import Navbar from "./../components/Navbar"; // path adjust karo jahan tumne Navbar.jsx rakha hai

// JSON data (tum isko alag file careerData.json me bhi rakh sakte ho)
const jobData = {
  "job_postings": [
    {
      "title": "Backend Developer (Node.js)",
      "location": "Remote",
      "type": "Full-time",
      "summary": "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic and ensuring high performance and responsiveness to requests from the front-end.",
      "requirements": [
        "Proven experience with Node.js and frameworks such as Express or NestJS.",
        "Strong understanding of asynchronous programming and its quirks.",
        "Experience with database management (MongoDB, PostgreSQL, or MySQL).",
        "Knowledge of authentication/authorization (JWT, OAuth).",
        "Proficiency in building and consuming RESTful and GraphQL APIs."
      ],
      "application_info": {
        "email": "example@gmail.com",
        "subject_format": "Node Developer Application - [Your Name]"
      }
    },
    {
      "title": "UI/UX Designer",
      "location": "Remote",
      "type": "Full-time",
      "summary": "Join our creative team as a UI/UX Designer! You will be responsible for delivering the best online user experience, which makes your role extremely important for customer satisfaction and user loyalty.",
      "requirements": [
        "Strong portfolio demonstrating expertise in UI and UX principles.",
        "Proficiency in design tools like Figma, Adobe XD, or Sketch.",
        "Ability to create wireframes, prototypes, and high-fidelity mockups.",
        "Deep understanding of responsive design and accessibility standards.",
        "Strong aesthetic sense and attention to detail."
      ],
      "application_info": {
        "email": "example@gmail.com",
        "subject_format": "UI/UX Designer Application - [Your Name]"
      }
    },
    {
      "title": "Fullstack Developer (MERN)",
      "location": "Remote",
      "type": "Full-time",
      "summary": "We are seeking a Fullstack Developer to handle the entire web development life cycle. You will be bridging the gap between graphical design and technical implementation, taking an active role on both sides.",
      "requirements": [
        "Proficiency in MongoDB, Express.js, React.js, and Node.js.",
        "Experience in designing and developing responsive front-end and robust back-end systems.",
        "Familiarity with State Management (Redux/Context API).",
        "Understanding of DevOps basics and cloud deployment (AWS/Heroku/Vercel).",
        "Problem-solving mindset and ability to manage complex features."
      ],
      "application_info": {
        "email": "example@gmail.com",
        "subject_format": "Fullstack Developer Application - [Your Name]"
      }
    },
    {
      "title": "HR Manager / Recruiter",
      "location": "Remote",
      "type": "Full-time",
      "summary": "We are looking for an HR Manager to help us build a strong employer brand and ensure we attract, hire, and retain the best talent in the industry.",
      "requirements": [
        "Experience in technical recruitment and talent acquisition.",
        "Understanding of HR functions (onboarding, performance management, culture building).",
        "Excellent communication and interpersonal skills.",
        "Ability to manage remote team engagement and policies.",
        "Familiarity with Applicant Tracking Systems (ATS)."
      ],
      "application_info": {
        "email": "example@gmail.com",
        "subject_format": "HR Application - [Your Name]"
      }
    }
  ]
}

export default function Career() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-black text-white min-h-screen px-8 md:px-16 py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Join Our <span className="text-red-500">Team</span>
          </h1>
          <p className="text-gray-400 mt-4">
            We’re always looking for talented people to join us.
          </p>
        </div>

        {/* Job List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {jobData.job_postings.map((job, index) => (
            <div
              key={index}
              className="border border-gray-800 p-6 rounded-xl hover:bg-gray-900 transition"
            >
              {/* Job Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => toggleOpen(index)}
                  className="bg-red-600 px-5 py-2 rounded-md hover:bg-red-700 transition"
                >
                  {openIndex === index ? "Close" : "Apply Now"}
                </button>
              </div>

              {/* Expandable Section */}
              {openIndex === index && (
                <div className="mt-6 space-y-4">
                  <p className="text-gray-300">{job.summary}</p>
                  <h4 className="text-lg font-semibold">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    Apply via email: <span className="text-red-400">{job.application_info.email}</span>
                    <br />
                    Subject format: {job.application_info.subject_format}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>

  );
}

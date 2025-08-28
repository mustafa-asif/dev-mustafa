
"use client";
import { Navbar } from "@/components/Navbar/page";
import { Footer } from "@/components/Footer/page";


export default function WorkPage() {
  const workExperiences = [
    {
      company: "DeveloperHubs Corporation",
      role: "Intern - Frontend Developer",
      duration: "May 2025 - June 2025",
      description:
        "Developed responsive frontend components using Next.js and TailwindCSS. Collaborated with backend developers for API integration.",
    }
  ];

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      {/* Page Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Work Experience</h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Here’s where I have worked recently</p>
      </section>

      {/* Work Cards with Flip Effect */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {workExperiences.map((job, index) => (
          <section
            key={index}
            className="group [perspective:1000px] w-full h-64"
          >
            <section
              className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              {/* Front Side */}
              <section className="absolute w-full h-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h2 className="text-2xl font-semibold mb-2">{job.company}</h2>
                <p className="text-gray-700 mb-1 text-base md:text-lg">
                  <span className="font-medium">Role:</span> {job.role}
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                  <span className="font-medium">Duration:</span> {job.duration}
                </p>
              </section>

              {/* Back Side */}
              <section className="absolute w-full h-full bg-blue-600 text-white rounded-xl p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-xl font-semibold mb-2">Job Details</h3>
                <p className="text-center text-sm md:text-base">{job.description}</p>
              </section>
            </section>
          </section>
        ))}
      </section>
    </main>
      <Footer />
     </>
  );
}


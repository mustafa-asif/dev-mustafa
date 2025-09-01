'use client';

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar/page";
import { Footer } from "@/components/Footer/page";
import {FaGithub} from "react-icons/fa";
import { LinkIcon } from "@heroicons/react/24/solid";




export default function Page() {
   const projects=[
    {

      title:"Course Management System",
      description:"A web application for managing courses, students, and instructors. Built with React, Python(flask), and MSSQL server.",
      Image:<Image src="/CMS.jpg" alt="Course Management System" width={400} height={300} className="rounded-lg shadow-md aspect-3/2  " />,
      github:" https://github.com/mustafa-asif/CourseMangementSystem ",
      live:"https://course-mangement-system-seven.vercel.app/"
    },
    {

      title:"Fit Track Pro",
      description:`Introducing FitTrack Pro a MERN Stack Web App designed to help fitness enthusiasts log resistance and cardio workouts, track calories dynamically, and manage their fitness journey with ease.
      Tech Stack Used: React, Node.js, Express, MongoDB, JWT for authentication, and Tailwind CSS for styling.
      `,
      Image:<Image src="/Fit.jpg" alt="Course Management System" width={400} height={300} className="rounded-lg shadow-md aspect-3/2  " />,
      github:" https://github.com/mustafa-asif/HealthTrainerProject-MERN- ",
      live:"https://health-trainer-project-mern.vercel.app/"
    },
    {

      title:"Nexj.js Dashboard",
      description:"A modern dashboard template built with Next.js and Tailwind CSS, featuring responsive design and interactive components.",
      Image:<Image src="/dashboard.jpg" alt="Course Management System" width={400} height={300} className="rounded-lg shadow-md aspect-3/2  " />,
      github:" https://github.com/mustafa-asif/nextjs-dashboard-practice",
      live:"https://nextjs-dashboard-practice-murex.vercel.app/"
    },

  ]



  

  return (
    <>
      <Navbar />
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-6 py-10">
      <section>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {project.Image}
              <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  <FaGithub className="w-6 h-6 text-gray-700 hover:text-gray-400 transition"  /> 
                </Link>
                <Link href={project.live} target="_blank" rel="noopener noreferrer" >
                <LinkIcon className="h-6 w-6 text-gray-500 hover:text-shadow-gray-400 trasition" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      
      </section>
      
    </main>
      <Footer />
    </>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar/page';
import { Footer } from '@/components/Footer/page';



export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-6">
      <Navbar />
      
      {/* Hero Section */}
      <section className="text-center max-w-2xl mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Mustafa</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A passionate Web Developer crafting beautiful and functional web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              View Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition">
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="mt-20 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600">
          I'm a full-stack developer specializing in modern frameworks like Next.js, React, and Node.js. I love turning ideas into reality through code and designing seamless user experiences.
        </p>
      </section>

      {/* Projects Preview */}
      <section className="mt-20 text-center max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded-xl">
            <Image src="/images/project1.png" alt="Project 1" width={400} height={250} className="rounded-lg" />
            <h3 className="mt-4 font-semibold">Project One</h3>
            <p className="text-gray-500 text-sm">A Next.js and TailwindCSS project showcasing modern UI design.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <Image src="/images/project2.png" alt="Project 2" width={400} height={250} className="rounded-lg" />
            <h3 className="mt-4 font-semibold">Project Two</h3>
            <p className="text-gray-500 text-sm">MERN stack app with authentication and dashboard features.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <Image src="/images/project3.png" alt="Project 3" width={400} height={250} className="rounded-lg" />
            <h3 className="mt-4 font-semibold">Project Three</h3>
            <p className="text-gray-500 text-sm">Portfolio website built with Next.js and deployed on Vercel.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
        <p className="text-gray-600 mb-6">Have a project in mind? Let's connect and make it happen!</p>
        <Link href="/contact">
          <button className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Get In Touch
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}


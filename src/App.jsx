// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./App.css";
import ExperienceTimeline from "./components/ExperienceSection";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-[#1E1E1E] min-h-screen">
        {/* Sidebar */}
        <div className="sm:w-1/4 md:w-1/3 lg:w-1/5 sm:h-screen sm:sticky top-0 p-4 sm:flex sm:flex-col">
          <div className="flex flex-col gap-2 h-full w-full">
            <div className="flex flex-col gap-2 bg-white/10 bg-gradient-to-br from-white/10 to-gray-200/20 backdrop-blur-lg border border-gray-300 rounded-md p-2">
              <div className="flex justify-center">
                <img src="/images/profile.jpg" alt="profile" className="w-40 h-40 rounded-full" />
              </div>
              <div className="flex flex-col gap-0.5 text-[#EAEAEA]">
                <h2 className="text-2xl font-semibold text-gray-100">Morenno Rafael</h2>
                <p className="text-[#EAEAEA]">Building solutions with code & creativity 🚀</p>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 bg-white/10 bg-gradient-to-br from-white/10 to-gray-200/20 backdrop-blur-lg border border-gray-300 rounded-md p-2">
              <h2 className="text-lg font-semibold text-gray-100">Contact Person</h2>
              <div className="flex flex-col gap-2 text-[#EAEAEA]">
                {/* Gmail */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=morennorafael31@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 underline">
                  <FaEnvelope size={18} />
                  <p className="text-sm">morennorafael31@gmail.com</p>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/6289697392258" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline">
                  <FaWhatsapp size={18} />
                  <p className="text-sm">+62 896-9739-2258</p>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-0.5 bg-white/10 bg-gradient-to-br from-white/10 to-gray-200/20 backdrop-blur-lg border border-gray-300 rounded-md p-2">
              <h2 className="text-lg font-semibold text-gray-100">Achievements</h2>
              <div className="flex flex-col gap-2 text-[#EAEAEA]">
                <p className="text-sm">🌟 Currently focusing on learning & growing. More to come!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bungkus konten utama dengan padding agar tetap responsif */}
        <div className="flex-1">
          <div className="py-4 md:pr-4 min-h-screen overflow-auto">
            <div className="flex flex-col gap-4 md:gap-8 sm:p-8 p-6 md:p-4 text-[#EAEAEA]">
              {/* Hero Section */}
              <section className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold text-gray-100">Morenno Rafael — Web Developer & Tech Enthusiast 🚀</h1>
                <p className="text-justify text-gray-300">
                  I am passionate about web development and enjoy building solutions that blend creativity and functionality.
                  From crafting interactive user experiences to designing robust backend systems, I strive to create seamless and efficient applications that make an impact.
                  Currently, I am exploring modern web technologies like React, Node.js, and PostgreSQL to enhance my skills and contribute to exciting projects. 🚀✨
                </p>
              </section>

              {/* About Me */}
              <ExperienceTimeline />

              {/* Projects */}
              <section className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-gray-100">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col bg-white/10 p-4 rounded-lg gap-2">
                    <img src="/images/3.jpg" alt="Recipe" className="w-full h-32 md:h-32 lg:h-48 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold text-gray-100">Recipe Website</h3>
                    <p className="text-gray-300 md:text-md">
                      A beautifully designed recipe website built with React and Tailwind CSS.
                      It provides an intuitive experience for discovering and saving delicious recipes effortlessly.
                    </p>
                    <a href="https://your-recipe-website.com" target="_blank" rel="noopener noreferrer"
                      className="mt-2 inline-block px-4 py-2 bg-blue-500 bg-gradient-to-br from-blue-500/80 to-blue-700/80 
                backdrop-blur-lg border border-blue-400 text-white font-semibold rounded-md 
                shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
                      Visit Website
                    </a>
                  </div>


                </div>
              </section>

              {/* Skills */}
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

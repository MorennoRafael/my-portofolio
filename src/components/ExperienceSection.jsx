import { useState, useEffect, useRef } from "react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Internship",
      images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
      description:
        "Developed a recipe website application using React.js and Tailwind CSS, contributed to the development of an e-Course web application on both backend and frontend using React.js, Bootstrap, and Express.js, and implemented Google login functionality using OAuth 2.0 and JWT for secure authentication."
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll(".experience-item");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="flex flex-col gap-2 md:gap-4">
      <h2 className="text-2xl font-semibold text-gray-100">My Experience</h2>
      <div className="flex gap-8 p-8 text-[#EAEAEA]">
        {/* Progress Bar Container */}
        <div ref={timelineRef} className="hidden relative md:flex md:flex-col lg:flex lg:flex-col items-center">
          {/* Vertical Dashed Line */}
          <div
            className={`w-[2px] border-l-2 border-dashed absolute top-0 left-1/2 transform -translate-x-1/2 h-full transition-all ${activeStep === 0 ? "border-gray-500" : "border-gray-300"
              }`}
          ></div>

          {/* Steps */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center h-80">
              {/* Circle for Step (Changes when active) */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold z-10 transition-all ${activeStep >= index
                  ? "bg-gray-500 text-white"
                  : "border-2 border-gray-500 text-gray-500"
                  }`}
              >
                {exp.id}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Content */}
        <div className="flex flex-col gap-12 md:gap-2 justify-between">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="h-80 flex flex-col gap-2 justify-center experience-item"
              data-index={index}
            >
              <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>

              {/* Gambar di atas deskripsi */}
              <div className="grid grid-cols-3 gap-2">
                {exp.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${exp.title} ${imgIndex + 1}`}
                    className="w-full h-16 lg:h-40 md:h-24 object-cover rounded-lg"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-justify sm:text-sm md:text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

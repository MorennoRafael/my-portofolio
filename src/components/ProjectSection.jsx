import { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
    {
        title: "Recipe Website",
        images: ["/images/3.jpg"],
        description:
            "A beautifully designed recipe website built with React and Tailwind CSS. It provides an intuitive experience for discovering and saving delicious recipes effortlessly.",
        link: "#",
        button: true
    },
    {
        title: "Landing Page Dolliest",
        images: ["/images/doll1.png", "/images/doll2.png", "/images/doll3.png", "/images/doll4.png"],
        description:
            "A beautifully designed recipe website built with React and Tailwind CSS. It provides an intuitive experience for discovering and saving delicious recipes effortlessly.",
        link: "#",
        button: false
    },
];

export default function ProjectSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-100">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white/10 p-4 rounded-lg gap-2"
                    >
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-32 md:h-32 lg:h-48 object-cover rounded-lg cursor-pointer"
                            onClick={() => openModal(project)}
                        />
                        <h3 className="text-lg font-semibold text-gray-100">{project.title}</h3>
                        <p className="text-gray-300 md:text-md">{project.description}</p>
                        {project.button ? <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block px-4 py-2 bg-blue-500 bg-gradient-to-br from-blue-500/80 to-blue-700/80 
                                backdrop-blur-lg border border-blue-400 text-white font-semibold rounded-md 
                                shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300"
                        >
                            Visit Website
                        </a> : <></>}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-lg z-50">
                    <div className="p-4 rounded-lg w-[90%] md:w-[50%] relative">
                        <button
                            className="absolute top-0 right-0 text-white text-xl"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>

                        <div className="relative flex justify-center items-center">
                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        className="absolute left-2 text-white bg-gray-700 p-2 rounded-full"
                                        onClick={prevImage}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <button
                                        className="absolute right-2 text-white bg-gray-700 p-2 rounded-full"
                                        onClick={nextImage}
                                    >
                                        <FaArrowRight />
                                    </button>
                                </>
                            )}
                            <img
                                src={selectedProject.images[currentImageIndex]}
                                alt="Project"
                                className="rounded-lg max-h-[60vh] object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

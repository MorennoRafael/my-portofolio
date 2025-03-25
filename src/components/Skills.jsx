import {
    SiPostgresql,
    SiPostman,
    SiNodedotjs,
    SiReact,
    SiExpress,
    SiPhp,
    SiMysql,
    SiTailwindcss,
    SiBootstrap,
    SiFirebase,
    SiJavascript,
    SiVite,
    SiWordpress
} from "react-icons/si";

const skills = [
    { icon: <SiPostgresql className="w-6 h-6 text-blue-400" />, name: "PostgreSQL" },
    { icon: <SiPostman className="w-6 h-6 text-orange-400" />, name: "Postman" },
    { icon: <SiNodedotjs className="w-6 h-6 text-green-500" />, name: "Node.js" },
    { icon: <SiReact className="w-6 h-6 text-blue-500" />, name: "React" },
    { icon: <SiExpress className="w-6 h-6 text-gray-400" />, name: "Express.js" },
    { icon: <SiPhp className="w-6 h-6 text-indigo-500" />, name: "PHP" },
    { icon: <SiMysql className="w-6 h-6 text-yellow-500" />, name: "MySQL" },
    { icon: <SiTailwindcss className="w-6 h-6 text-teal-400" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className="w-6 h-6 text-purple-500" />, name: "Bootstrap" },
    { icon: <SiFirebase className="w-6 h-6 text-yellow-400" />, name: "Firebase" },
    { icon: <SiJavascript className="w-6 h-6 text-yellow-300" />, name: "JavaScript" },
    { icon: <SiVite className="w-6 h-6 text-purple-400" />, name: "Vite" },
    { icon: <SiWordpress className="w-6 h-6 text-blue-600" />, name: "WordPress" }
];

export default function Skills() {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="text-white flex gap-2 items-center bg-white/10 bg-gradient-to-br from-white/10 to-gray-200/20 backdrop-blur-lg border border-gray-300 rounded-md p-2 
                        transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-300/50 cursor-pointer"
                    >
                        {skill.icon}
                        <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

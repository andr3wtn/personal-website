import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard />
            </div>
        </section>
    )    
}
import ProjectCard from "@/components/ProjectCard/ProjectCard";

function Projects() {
    return (
        <div>
            <h2 className="text-3xl font-semibold">PROJECT's</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 mt-10">
                <ProjectCard
                    banner=""
                    name="Personal Portofolio Website"
                    description="Ipsum nisi anim aliqua dolor sint consectetur duis. Non aliqua et reprehenderit exercitation nostrud sint esse cupidatat. Consectetur aliquip fugiat ad cupidatat ut nulla exercitation do fugiat commodo magna ea. Tempor sint Lorem laborum sint."
                    skills={['NextJS', 'Tailwind']} />
                <ProjectCard
                    banner=""
                    name="SMK Negeri 3 Singaraja Website"
                    description="Ipsum nisi anim aliqua dolor sint consectetur duis. Non aliqua et reprehenderit exercitation nostrud sint esse cupidatat. Consectetur aliquip fugiat ad cupidatat ut nulla exercitation do fugiat commodo magna ea. Tempor sint Lorem laborum sint."
                    skills={['NextJS', 'PostgreSQL', 'Fastify', 'Tailwind']} />
                <ProjectCard
                    banner=""
                    name="JurnalPKL"
                    description="Ipsum nisi anim aliqua dolor sint consectetur duis. Non aliqua et reprehenderit exercitation nostrud sint esse cupidatat. Consectetur aliquip fugiat ad cupidatat ut nulla exercitation do fugiat commodo magna ea. Tempor sint Lorem laborum sint."
                    skills={['Laravel', 'MariaDB']} />
                <ProjectCard
                    banner=""
                    name="SASCA"
                    description="Ipsum nisi anim aliqua dolor sint consectetur duis. Non aliqua et reprehenderit exercitation nostrud sint esse cupidatat. Consectetur aliquip fugiat ad cupidatat ut nulla exercitation do fugiat commodo magna ea. Tempor sint Lorem laborum sint."
                    skills={['NextJS', 'Fastify']} />
            </div>
        </div>
    );
}

export default Projects;

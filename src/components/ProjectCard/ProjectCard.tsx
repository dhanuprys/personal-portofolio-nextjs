import Image from 'next/image';
import SkillBadge from "../SkillBadge/SkillBadge";

type ProjectCardProps = {
    banner: string;
    name: string;
    description: string;
    skills: string[]
};

function ProjectCard({ banner, name, description, skills }: ProjectCardProps) {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-8 gap-y-4 lg:gap-8 py-8 [&>.work-bg]:hover:block [&>.work-bg]:hover:transition-all">
            <div className="work-bg absolute box-content px-10 -z-10 -inset-x-5 w-full h-full hidden transition-all border bg-slate-100 border-slate-200 rounded"></div>
            <div className="col-span-2">
                <div className="w-full h-[150px] lg:h-[100px] max-w-full max-h-[100px] overflow-hidden rounded">
                    <Image className="object-cover lg:w-full h-full rounded hover:scale-110 hover:transition-all" src="/me.jpg" width={200} height={200} alt="Project" />
                </div>
            </div>
            <div className="col-span-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                {/* <span className="text-sm text-blue-500 font-semibold uppercase">{status}</span> */}
                <p className="leading-relaxed text-sm">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {
                        skills && skills.map((skill, index) => {
                            return  <SkillBadge key={index} name={skill} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
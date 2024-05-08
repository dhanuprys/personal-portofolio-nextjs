import SkillBadge from "../SkillBadge/SkillBadge";

type WorkHistoryCardProps = {
    period: string;
    name: string;
    status: string;
    description: string;
    skills: string[]
};

function WorkHistoryCard({ period, name, status, description, skills }: WorkHistoryCardProps) {
    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-8 lg:gap-8 py-8 [&>.work-bg]:hover:block [&>.work-bg]:hover:transition-all">
            <div className="work-bg absolute box-content px-10 -z-10 -inset-x-5 w-full h-full hidden border shadow transition-all bg-slate-100 border-slate-200 rounded"></div>
            <div className="col-span-2">
                <span className="text-sm font-semibold text-slate-500">{period}</span>
            </div>
            <div className="col-span-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="text-sm text-blue-500 font-semibold uppercase">{status}</span>
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

export default WorkHistoryCard;
type SkillBadgeProps = {
    name: string;
};

function SkillBadge({ name }: SkillBadgeProps ) {
    return (
        <div className="px-3 py-1 text-xs font-semibold bg-green-200 text-green-800 border border-green-400 rounded-full">
            {name}
        </div>
    );
}

export default SkillBadge;
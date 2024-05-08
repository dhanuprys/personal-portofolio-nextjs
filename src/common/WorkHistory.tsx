import WorkHistoryCard from "@/components/WorkHistoryCard/WorkHistoryCard";

function WorkHistory() {
    return (
        <div>
            <h2 className="text-3xl font-semibold">WORK's</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-2 mt-10">
                <WorkHistoryCard
                    period="DEC 2023 - APRIL 2024"
                    name="SMK Negeri 3 Singaraja"
                    status="Internship"
                    description="Lorem laborum fugiat incididunt ut. In esse proident officia nulla labore dolore ea esse magna et in aliqua. Eu pariatur do nisi ullamco ipsum tempor incididunt incididunt ullamco. Voluptate adipisicing velit adipisicing pariatur eiusmod ut voluptate pariatur dolor. Excepteur est consectetur sunt mollit mollit officia pariatur excepteur quis laborum est excepteur commodo."
                    skills={['NextJS', 'Laravel', 'PostgreSQL', 'Tailwind', 'RESTFul']} />
            </div>
        </div>
    );
}

export default WorkHistory;

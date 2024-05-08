import WorkHistoryCard from "@/components/WorkHistoryCard/WorkHistoryCard";

function WorkHistory() {
    return (
        <div>
            <h2 className="text-3xl font-semibold">WORK's</h2>
            <div className="flex flex-col gap-4 mt-10">
                <WorkHistoryCard />
            </div>
        </div>
    );
}

export default WorkHistory;

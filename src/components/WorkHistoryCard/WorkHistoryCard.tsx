function WorkHistoryCard() {
    return (
        <div className="relative grid grid-cols-8 gap-8 py-8 [&>.work-bg]:hover:block [&>.work-bg]:hover:transition-all">
            <div className="work-bg absolute box-content px-10 z-0 -inset-x-8 w-full h-full hidden transition-all bg-slate-100 rounded"></div>
            <div className="col-span-2">
                <span className="text-sm font-semibold">2024 - SAAT INI</span>
            </div>
            <div className="col-span-6">
                <h3 className="text-lg font-semibold">Divisi IT POLRI</h3>
                <p className="leading-relaxed text-sm">
                    Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. 
                    Work closely with cross-functional teams, including developers, designers, and product managers, to 
                    implement and advocate for best practices in web accessibility.
                </p>
            </div>
        </div>
    );
}

export default WorkHistoryCard;
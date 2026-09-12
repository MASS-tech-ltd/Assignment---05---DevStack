import { use } from "react";
import type { technologyDataType } from "../Types/Types";
import TechnologyList from "./TechnologyList";
import YourStacks from "./YourStacks";

interface technologyStackPropsType {
    technologysPromise: Promise<technologyDataType[]>
}

const TechnologyStack = ({ technologysPromise }: technologyStackPropsType) => {
    const technologies = use(technologysPromise);
    return (
        <div className="container mx-auto">
            <h1 className="ml-6 lg:ml-0 font-extrabold font-inter lg:text-4xl text-3xl text-slate-900">Explore the <span className="bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h1>
            <p className="ml-6 lg:ml-0 font-jakarta font-normal lg:text-base text-sm mt-2 mb-6 lg:mb-10 text-slate-500">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
                <TechnologyList technologies={technologies}></TechnologyList>
                <YourStacks></YourStacks>
            </div>
        </div>
    );
};

export default TechnologyStack;
import type { technologyDataType } from "../Types/Types";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListPropsType {
    technologies : technologyDataType[]
}

const TechnologyList = ({technologies}: TechnologyListPropsType) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
                technologies.map(technology => <TechnologyCard key={technology.id} technology={technology}></TechnologyCard>)
            }
        </div>
    );
};

export default TechnologyList;
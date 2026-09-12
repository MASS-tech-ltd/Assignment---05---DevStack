import type { Dispatch, SetStateAction } from "react";
import type { technologyDataType } from "../Types/Types";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListPropsType {
    technologies: technologyDataType[]
    addedTechnology: technologyDataType[]
    setAddedTechnology: Dispatch<SetStateAction<technologyDataType[]>>
}

const TechnologyList = ({ technologies, addedTechnology, setAddedTechnology }: TechnologyListPropsType) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
                technologies.map(technology => <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    addedTechnology={addedTechnology}
                    setAddedTechnology = {setAddedTechnology}
                    ></TechnologyCard>)
            }
        </div>
    );
};

export default TechnologyList;
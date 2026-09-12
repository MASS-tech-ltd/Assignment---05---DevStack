import type { Dispatch, SetStateAction } from "react";
import type { technologyDataType } from "../Types/Types";
import SelectedItem from "./SelectedItem";

interface YourStacksPropsType {
    addedTechnology: technologyDataType[]
    setAddedTechnology: Dispatch<SetStateAction<technologyDataType[]>>
}

const YourStacks = ({ addedTechnology, setAddedTechnology }: YourStacksPropsType) => {
    return (
        <div className="border border-slate-200 rounded-2xl font-jakarta">
            <h1 className="font-bold text-lg px-5.5 pt-5.5">Your Stacks</h1>
            <div>
                {
                    addedTechnology.map((tech) => {
                        return (
                            <SelectedItem
                                key={tech.id}
                                tech={tech}
                                addedTechnology={addedTechnology}
                                setAddedTechnology={setAddedTechnology}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default YourStacks;
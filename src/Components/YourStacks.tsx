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
            <h1 className="font-bold text-2xl px-5.5 pt-5.5">
                Your Stacks
            </h1>
            <p className="font-normal text-sm mt-2 text-slate-400 px-5.5">
                {addedTechnology.length === 0
                    ? "No technologies selected yet."
                    : `${addedTechnology.length} ${addedTechnology.length === 1 ? "technology" : "technologies"
                    } selected`
                }
            </p>
            <hr className="border-slate-200 mt-4 w-82 mx-auto" />
            {addedTechnology.length === 0 ? (
                <h5 className="text-center mt-12 font-medium text-base text-slate-400">
                    Your stack is empty.
                </h5>
            ) : (
                <div>
                    <div>
                        {addedTechnology.map((tech) => (
                            <SelectedItem
                                key={tech.id}
                                tech={tech}
                                addedTechnology={addedTechnology}
                                setAddedTechnology={setAddedTechnology}
                            />
                        ))}
                    </div>
                    {/* Remove All  */}
                    <div className="flex justify-center mt-5 mb-5">
                        <button onClick={() => setAddedTechnology([])}
                        className="w-82 font-inter font-medium text-sm outline-red-600 btn  rounded-xl text-[#d82c20]">Remove All</button>
                    </div>

                </div>
            )}

        </div>
    );
};

export default YourStacks;
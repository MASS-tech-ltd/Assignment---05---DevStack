import { FaCheck, FaStar } from "react-icons/fa";
import type { technologyDataType } from "../Types/Types";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface TechnologyCardPropsType {
    technology: technologyDataType
    addedTechnology: technologyDataType[]
    setAddedTechnology: Dispatch<SetStateAction<technologyDataType[]>>
}

const TechnologyCard = ({ technology, addedTechnology, setAddedTechnology }: TechnologyCardPropsType) => {

    const isAdded = addedTechnology.some((item) => item.id === technology.id);

    const hanldAddToStack = () => {

        isAdded ? toast.warning(`${technology.name} is already added`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        }) :( toast.success(`${technology.name} is added successfully`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        }),
        setAddedTechnology([...addedTechnology, technology])
        )
    
}

    return (
        <div>
            <div className={`card bg-base-100 w-full font-jakarta 
                            hover:-translate-y-1 hover:shadow-lg transition-all duration-300 
                            ${isAdded ? "border border-purple-400" : "shadow-sm"}`}>
                <figure className="flex justify-between p-5.5">
                    <img className="w-11"
                        src={technology.icon}
                        alt="Icon"
                    />
                    <div className="badge badge-soft badge-secondary font-semibold text-sm rounded-full text-sky-500">
                        {technology.badge}
                    </div>
                </figure>
                <div className="p-5.5">
                    <h2 className="font-bold text-xl text-slate-900">
                        {technology.name}
                    </h2>
                    <p className="font-normal text-sm text-slate-500 pt-2">
                        {technology.description}
                    </p>
                    <div className="flex justify-between pt-7 pb-4">
                        <div className="rounded-sm bg-gray-200 font-medium text-xs px-2.5 py-0.5 text-slate-600">
                            <h5>{technology.category}</h5>
                        </div>
                        <div className="font-medium text-xs text-slate-500"><h5>{technology.difficulty}</h5></div>
                        <div className="flex">
                            <FaStar className="text-amber-400 mr-1 text-xs" />
                            <h5 className="font-semibold text-xs text-slate-700">
                                {technology.rating}
                            </h5>
                        </div>
                    </div>
                    <button onClick={hanldAddToStack}
                        className={`w-full font-medium text-sm text-white text-center rounded-lg py-2.5 
                        ${isAdded ? "bg-purple-700"
                                : "bg-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            }`}

                    >{isAdded && <FaCheck className="inline mr-2"></FaCheck>}
                        Add to Stack</button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;
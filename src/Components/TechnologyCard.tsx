import { FaStar } from "react-icons/fa";
import type { technologyDataType } from "../Types/Types";

interface TechnologyCardPropsType {
    technology: technologyDataType
}

const TechnologyCard = ({ technology }: TechnologyCardPropsType) => {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm font-jakarta">
                <figure className="flex justify-between p-5.5">
                    <img className="w-11"
                        src={technology.icon}
                        alt="Icon" />
                        <div className="badge badge-soft badge-secondary font-semibold text-sm rounded-full text-sky-500">{technology.badge}</div>
                </figure>
                <div className="p-5.5">
                    <h2 className="font-bold text-xl text-slate-900 ">
                        {technology.name} 
                    </h2>
                    <p className="font-normal text-sm text-slate-500 pt-2">{technology.description}</p>
                    <div className="flex justify-between pt-7 pb-4">
                        <div className=" rounded-sm bg-gray-200 font-medium text-xs px-2.5 py-0.5 text-slate-600"><h5>{technology.category}</h5></div>
                        <div className=" font-medium text-xs text-slate-500"><h5>{technology.difficulty}</h5></div>
                        <div className="flex">
                            <FaStar className="text-amber-400 mr-1 text-xs"></FaStar>
                            <h5 className="font-semibold text-xs text-slate-700">{technology.rating}</h5>
                        </div>
                    </div>
                    <button className="w-full font-medium text-sm text-white text-center bg-slate-950 rounded-lg py-2.5">Add to Stack</button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;
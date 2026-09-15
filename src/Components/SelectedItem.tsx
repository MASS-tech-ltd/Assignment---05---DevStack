import type { Dispatch, SetStateAction } from "react";
import type { technologyDataType } from "../Types/Types";
import { RxCross1 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

interface SelectedItemPropsType {
    addedTechnology: technologyDataType[]
    setAddedTechnology: Dispatch<SetStateAction<technologyDataType[]>>
    tech: technologyDataType
}

const SelectedItem = ({ tech, addedTechnology, setAddedTechnology }: SelectedItemPropsType) => {

    const handleRemoveItem =(tech : technologyDataType)=>{
        const remainingItem = addedTechnology.filter(item=> item.name !== tech.name )
        setAddedTechnology(remainingItem);

        toast.info(`${tech.name} removed from your stack`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        })
    }


    return (
        <div className="mt-3 flex justify-center gap-2">
            <div className="w-82 border border-slate-200 flex pl-5 py-3 rounded-xl bg-base-100 shadow-sm font-jakarta">
                <figure>
                    <img
                        className="w-12 h-auto"
                        src={tech.icon}
                        alt="Technology logo"
                    />
                </figure>
                <div className="flex items-center justify-between w-full ">
                    <div className="ml-4">
                        <h2 className="font-bold text-lg text-slate-900">{tech.name}</h2>
                        <p className="font-bold text-xs text-slate-400">{tech.category}</p>
                    </div>
                    <div className="mr-5"><span onClick={()=>handleRemoveItem(tech)}
                    className="cursor-pointer"
                    ><RxCross1 /></span></div>
                </div>
            </div>
        </div>
    );
};

export default SelectedItem;
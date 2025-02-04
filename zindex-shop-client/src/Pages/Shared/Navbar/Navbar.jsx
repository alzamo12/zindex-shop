import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import DropDownList from "./DropDownList";

const Navbar = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
                <div>
                    <button className="bg-blue-400 py-2 px-4  rounded-3xl text-[#fff] hover:bg-blue-600 font-bold uppercase flex items-center  gap-2">
                       <IoIosMenu className=""></IoIosMenu> <span>All Categories</span> <FaAngleDown></FaAngleDown>
                    </button>
                </div>
                <DropDownList></DropDownList>
            </div>
        </div>
    );
};

export default Navbar;
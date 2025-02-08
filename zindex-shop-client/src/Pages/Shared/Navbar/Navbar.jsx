import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import DropDownList from "./DropDownList";

const Navbar = () => {

    const navRoutes = ['home', 'men', 'women', 'Beauty', 'watches', 'kids', 'gift', 'blog', 'contact'];

    return (
        <div className="mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl ">
            <div className="flex items-center justify-between">
                <div>
                    <button className="bg-blue-400 py-2 px-4 rounded-3xl text-[#fff] hover:bg-blue-600 font-bold uppercase flex items-center  gap-2" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <IoIosMenu className=""></IoIosMenu> <span className="lg:text-sm xl:text-md ">All Categories</span> <FaAngleDown></FaAngleDown>
                    </button>

                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm uppercase  font-medium mt-3 ml-6"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                        {
                            navRoutes.map(navRoute => <li className="text-blue-500 text-lg  dropdown-hover cursor-pointer" key={navRoute}>
                                <button className="uppercase flex  justify-between" popoverTarget="popover-2">{navRoute} <FaAngleRight /></button>
                                <ul
                                    className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm uppercase font-medium -mt-6 ml-48 text-md "
                                    id="popover-2"
                                    popover="auto">
                                    <li className="hover.0">Clothings</li>
                                    <li className="my-1">Footwear</li>
                                    <li>Watches</li>
                                </ul>
                            </li>)
                        }
                    </ul>
                </div>
                <DropDownList></DropDownList>
            </div>
        </div>
    );
};

export default Navbar;
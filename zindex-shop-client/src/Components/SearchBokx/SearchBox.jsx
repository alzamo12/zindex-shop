import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className="w-[60%] h-14 bg-gray-100 mx-3 focus:border-0 px-5 flex gap-4 input rounded-xl">
            <input className="w-full border-none text-black" placeholder="Search your item here" type="text" />
            <button className="btn bg-gray-100 border-none rounded-full  focus:bg-gray-200"><IoSearch className="text-xl"></IoSearch> </button>
        </div>
    );
};

export default SearchBox;
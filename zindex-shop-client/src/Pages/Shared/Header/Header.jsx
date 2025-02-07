import CountryDropDown from "../../../Components/CountryDropDown/CountryDropDown";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import SearchBox from "../../../Components/SearchBokx/SearchBox";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="w-full">
      <div className="header w-screen  h-7 bg-purple-500 text-center text-white">
        <div className="top-strip ">
          <div className="container text-center mx-auto">
            <p>Due to <span className="font-bold">Covid-19 pandamic</span> orders may be delayed to you. Kindly accept it.</p>
          </div>
        </div>
      </div>
      <div className="flex max-w-6xl mx-auto items-center gap-20">
        <div className="py-4 flex items-center">
          <img className="h-24" src="https://i.ibb.co.com/dwb0hC33/Adobe-Express-file.png" alt="" />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex w-full gap-5">
            <CountryDropDown></CountryDropDown>
            {/* header search starts here */}
            <SearchBox></SearchBox>
            {/* header search ends here */}
          </div>

          {/* logo starts here */}
          <div className="flex gap-7 ">
            <button className="rounded-full flex items-center justify-center h-[60px] w-[60px] btn bg-white  border-2 mx-auto"><FaUser className="text-2xl" /></button>
            {/* cart items */}
            <div className="mx-auto flex items-center gap-3">
              <span>$4.99</span>
              <button className="rounded-full py-0 px-3 flex items-center justify-center h-[60px] w-[60px] btn bg-amber-50 text-red-500  border-2 mx-auto"><CiShoppingCart className="text-6xl" /></button>
            </div>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
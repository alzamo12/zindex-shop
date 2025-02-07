import { FaAngleDown } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import { CountryContext } from '../../Providers/MyContext';
import { useState } from "react";
import { IoSearch } from 'react-icons/io5';

const CountryDropDown = () => {
    const { countries } = useContext(CountryContext);
    const [selectedTab, setSelectedTab] = useState(null);
    const [country, setCountry] = useState(null);
    const [searchedCountry, setSearchedCountry] = useState([])

    const selectedCountry = (index, country) => {
        setSelectedTab(index)
        setCountry(country)
    };

    useEffect( () => {
        setSearchedCountry(countries)
    },[countries, setSearchedCountry])

    const filterList = e => {
        const keyword = e.target.value.toLowerCase();
        console.log(keyword)
        const list = countries.filter((item) => {
            return item.country.toLowerCase().includes(keyword)
        });
        setSearchedCountry(list)
    }

    return (
        <div>

            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn w-40 h-12 py-7">
                <div className="w-full flex gap-4">
                    <div className='text-left'>
                        <span className=' text-gray-500'> Your Location</span> <br />
                        <span className='font-bold'>{country ? country : 'select'}</span>
                    </div>
                    <FaAngleDown className='mx-auto my-auto text-sky-400' />
                </div>

            </button>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box  grid gap-2 overflow-y-hidden">
                    <h3 className="font-bold text-lg">Type your location here!</h3>
                    <div className='w-full mx-auto'>
                        <div className="w-[60%] h-14 bg-gray-100 mx-0 focus:border-0 px-5 flex gap-4 input rounded-xl">
                            <input onChange={filterList} className="w-full border-none text-black" placeholder="Search your item here" type="text" />
                            <button className="btn bg-gray-100 border-none rounded-full  focus:bg-gray-200"><IoSearch className="text-xl"></IoSearch> </button>
                        </div>
                    </div>
                    <ul id='country-list' className='h-60 overflow-y-auto  grid gap-3 font-bold ml-5 mt-5'>
                        {
                            searchedCountry?.length !== 0 && searchedCountry?.map((country, index) => <li
                                key={country?.country}
                                className={`${selectedTab === index ? 'bg-blue-200' : ''} pl-2 py-1 rounded-2xl h-10 `}>
                                <button
                                    onClick={() => selectedCountry(index, country.country)}
                                    className="cursor-pointer h-full w-full text-left"
                                >{country?.country}
                                </button>
                            </li>)
                        }
                    </ul>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default CountryDropDown;
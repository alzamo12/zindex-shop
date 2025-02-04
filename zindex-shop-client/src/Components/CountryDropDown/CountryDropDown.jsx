import { FaAngleDown } from 'react-icons/fa';

const CountryDropDown = () => {
    return (
        <button className="btn w-40 h-12 py-7">
            <div className="w-full flex gap-4">
                <div className='text-left'>
                    <span className=' text-gray-500'> Your Location</span> <br />
                    <span className='font-bold'>Bangladesh</span>
                </div>
                <FaAngleDown className='mx-auto my-auto text-sky-400' />
            </div>
        </button>
    );
};

export default CountryDropDown;
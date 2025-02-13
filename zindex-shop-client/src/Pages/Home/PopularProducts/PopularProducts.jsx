import './popularProducts.css'
// Import Swiper styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from "react-router";

import TypeBasedProduct from '../../../Components/typeBasedProduct/typeBasedProduct';


const PopularProducts = () => {

    // const axiosSecure = useAxiosSecure();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const navRoutes = ['home', 'men', 'women', 'Beauty', 'watches', 'kids', 'gift', 'blog', 'contact'];

    const productSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };

    // const { data: products = [] } = useQuery({
    //     queryKey: ['product'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/products?type=digital')
    //         return res.data
    //     }
    // })

    // console.log(products)

    return (
        <div className="w-full">

            <div className="card h-auto w-full card-side bg-base-100 shadow-sm py-8">
                <figure className='flex flex-col gap-10'>
                    <img className="w-80 h-[450px] rounded-xl" src="https://i.ibb.co.com/TDMKy9fQ/sales-banner.jpg" alt="" />
                    <img className="w-80 h-[450px] rounded-xl" src="https://i.ibb.co.com/TDMKy9fQ/sales-banner.jpg" alt="" />
                </figure>
                <div className="card-body py-0 my-0">
                    {/* navbar of popular products for route and products changing */}
                    <div className="navbar bg-base-100 shadow-sm">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl">Zindex Shop</a><br />
                            <p className='ml-4.5'>Do not miss the current offer </p>
                        </div>
                        <div className="flex flex-col gap-2 w-[500px]">
                            <Slider className='w-96 mx-auto' {...settings}>
                                {
                                    navRoutes.map((item) => (
                                        <div
                                            className=''
                                            key={item}>
                                            <NavLink
                                                className=' cursor-pointer font-bold '
                                                style={{
                                                    margin: '0 10px',
                                                    padding: '20px',
                                                    borderRadius: '8px',
                                                    textAlign: 'center'
                                                }}>
                                                {item}
                                            </NavLink>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>

                    {/* end of navbar */}
                    <div className='max-w-xl 2xl:max-w-4xl w-full'>
                        <h2 className="text-3xl my-5 font-bold">Physical Products</h2>
                        <TypeBasedProduct type="physical"></TypeBasedProduct>
                    </div>
                    <div className='max-w-xl 2xl:max-w-4xl w-full mt-8'>
                        <h2 className="text-3xl my-5 font-bold">Digital Products</h2>
                        <TypeBasedProduct type="digital"></TypeBasedProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
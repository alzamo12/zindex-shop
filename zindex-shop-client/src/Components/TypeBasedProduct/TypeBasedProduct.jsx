import Slider from "react-slick";
import useProducts from "../../hooks/useProducts";

const TypeBasedProduct = ({ type }) => {
    const products = useProducts({type});

    const productSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            
            
             <Slider {...productSettings}>
                            {/* <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div> */}

                            {
                                products?.map(product => <div key={product._id} className="card bg-base-100 w-96 shadow-sm h-[400px]">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product?.title}</h2>
                                        <p>{product?.description}</p>
                                        <div className="card-actions justify-end items-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </Slider>
        </div>
    );
};

export default TypeBasedProduct;
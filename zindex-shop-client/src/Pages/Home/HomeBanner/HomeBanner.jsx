// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    const imagesLinks = [
        "https://i.ibb.co.com/HfhDttVj/fashion1.jpg",
        "https://i.ibb.co.com/FqXyZqtq/fashion2.jpg",
        "https://i.ibb.co.com/xS57qNQM/fashion3.jpg",
        "https://i.ibb.co.com/rRZk4F2h/fashion4.jpg",
        "https://i.ibb.co.com/nNCcjR4p/fashion5.jpg",
        "https://i.ibb.co.com/gL6dzVqr/fashion6.jpg"
    ];

    return (
        <Slider className="mb-10 mt-5" {...settings}>
            {
                imagesLinks.map(image => <div key={image}>
                    <img className="h-[70vh] w-screen" src={image} alt="" />
                </div>)
            }
        </Slider>
    );
};

export default HomeBanner;
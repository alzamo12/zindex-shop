import HomeBanner from "./HomeBanner/HomeBanner";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <PopularProducts></PopularProducts>
            </div>
        </div>
    );
};

export default Home;
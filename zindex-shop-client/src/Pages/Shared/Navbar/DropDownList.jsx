
const DropDownList = () => {

    const navRoutes = ['home', 'men', 'women', 'Beauty', 'watches', 'kids', 'gift', 'blog', 'contact'];
    const homeRoutes = ['clothing', 'footwear', 'watches'];

    return (
        <div>
            <ul className="flex decoration-0 uppercase text-blue-500 text-lg font-bold items-center">
                {
                    navRoutes.map(navRoute => <li key={navRoute}>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="hover:bg-gray-100 px-5 py-2 rounded-full cursor-pointer m-1">{navRoute}</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                                {
                                    homeRoutes.map(homeRoute => <li key={homeRoute}>
                                        <a href="">   {homeRoute}</a>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </li>)
                }
                {/* <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="hover:bg-gray-100 px-8 py-2 rounded-full cursor-pointer m-1">Home</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="hover:bg-gray-100 px-8 py-2 rounded-full cursor-pointer m-1">Fashion</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="hover:bg-gray-100 px-8 py-2 rounded-full cursor-pointer m-1">Electronics</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="hover:bg-gray-100 px-8 py-2 rounded-full cursor-pointer m-1">Footwear</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="hover:bg-gray-100 px-8 py-2 rounded-full cursor-pointer m-1">Bag</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="hover:bg-gray-100 px-8 py-2 rounded-full cursor-pointer m-1">Beauty</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </li> */}

            </ul>
        </div>
    );
};

export default DropDownList;
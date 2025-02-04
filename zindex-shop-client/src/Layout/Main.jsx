import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div className='dosis'>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
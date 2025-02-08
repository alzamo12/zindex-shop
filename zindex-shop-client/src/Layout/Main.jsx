import { Outlet } from 'react-router';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='dosis '>
            <div>
                <Header></Header>
            </div>
            <hr className='mt-2' />
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
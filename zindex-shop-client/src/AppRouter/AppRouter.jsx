import { Route, Routes } from 'react-router';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main></Main>}>
                {/* regular home page route */}
                <Route path='/' element={<Home></Home>}></Route>
                {/* error page system route */}
                <Route path='*' element="This Route does not exists"></Route>
            </Route>

            {/* start authentication pages */}

            {/* login page */}
            <Route path='/login' element={<Login></Login>}></Route>

            {/* signup page */}
            <Route path='/signup' element={<SignUp></SignUp>}></Route>

            {/* end of authentication pages */}

            {/* error page for all routes */}
            <Route path='*' element="This Route does not exists"></Route>
        </Routes>
    );
};

export default AppRouter;
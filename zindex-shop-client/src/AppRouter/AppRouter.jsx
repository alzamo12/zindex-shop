import { Route, Routes } from 'react-router';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main></Main>}>
                {/* regular home page route */}
                <Route path='/' element={<Home></Home>}></Route>

                {/* error page system route */}
                <Route path='*' element="This Route does not exists"></Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;
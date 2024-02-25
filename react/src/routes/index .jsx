import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home';
import notFound from '../pages/404';
import Layout from '../layout/layout';
import MyCv from '../pages/myCv';
export const router=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/myCv',
               element:<MyCv/>
            },
            {
                path:'*',
                element:<notFound />
            }
        ]
    }

])

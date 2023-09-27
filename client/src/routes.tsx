import { createBrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Workspace from 'pages/Workspace';
import Login from 'pages/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Workspace />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router
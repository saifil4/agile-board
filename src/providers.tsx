import { RouterProvider } from 'react-router-dom';
import { DataProvider } from 'hooks/useData';
import router from "routes";

const Providers = () => {
    return (
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    )
}

export default Providers
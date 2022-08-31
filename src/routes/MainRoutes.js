import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - utilities
const WarehouseDetail = Loadable(lazy(() => import('pages/components-overview/WarehouseDetail')));
const Warehouse = Loadable(lazy(() => import('pages/components-overview/Warehouse')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Warehouse />
        },
        {
            path: 'warehouse-detail/:id',
            element: <WarehouseDetail />
        },
        {
            path: 'warehouse',
            element: <Warehouse />
        }
    ]
};

export default MainRoutes;

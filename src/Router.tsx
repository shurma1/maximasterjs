import {FC} from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import {AppRoutes, routeConfig} from '@/config/routeConfig/routeConfig.tsx';

const routesArray = Object.values(routeConfig) as Array<typeof routeConfig[AppRoutes]>;
// I use HashRouter, because Browser Router does not work in GH Pages :/
const router = createHashRouter(routesArray.map(routerElement => ({path: routerElement.path, element: routerElement.element})));

const Router: FC = () => {
	return <RouterProvider router={router} />;
};

export default Router;

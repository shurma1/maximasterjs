import {FC} from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import {AppRoutes, routeConfig} from '@/config/routeConfig/routeConfig.tsx';
import Meta from '@/components/Meta/Meta.tsx';
import Layout from '@/components/Layout/Layout.tsx';

const routesArray = Object.values(routeConfig) as Array<typeof routeConfig[AppRoutes]>;
// I use HashRouter, because Browser Router does not work in GH Pages :/
const router = createHashRouter(
	routesArray.map(routerElement => (
		{
			path: routerElement.path,
			element:
				<Meta
					titleKey={routerElement.meta.titleKey}
					descriptionKey={routerElement.meta.descriptionKey}
				>
					<Layout>
						{routerElement.element}
					</Layout>
				</Meta>
		})
	)
);

const Router: FC = () => {
	return <RouterProvider router={router} />;
};

export default Router;

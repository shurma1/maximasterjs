import {RouteObject} from 'react-router-dom';
import {StringKey} from '@/assets/strings.ts';
import RandomColorPage from '@/pages/RandomColorPage.tsx';

export interface RouteMeta {
	titleKey: StringKey;
	descriptionKey: StringKey;
	navNameKey: StringKey;
	showInNav?: boolean;
}

type AppRouteObject = { meta: RouteMeta } & RouteObject;

export enum AppRoutes {
	RandomColor = 'randomColor',
	Order = 'order',
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.RandomColor]: '/',
	[AppRoutes.Order]: '/order'
};

export const RouteKeysByPath: Record<string, AppRoutes> = Object.entries(RoutePaths).reduce(
	(acc, [key, path]) => {
		acc[path] = key as AppRoutes;
		return acc;
	},
	{} as Record<string, AppRoutes>
);

export const routeConfig: Record<AppRoutes, AppRouteObject> = {
	[AppRoutes.RandomColor]: {
		path: RoutePaths.randomColor,
		element: <RandomColorPage/>,
		meta: {
			titleKey: 'RandomColorTitle',
			descriptionKey: 'RandomColorDescription',
			navNameKey: 'RandomColorNavName',
			showInNav: true
		}
	},
	[AppRoutes.Order]: {
		path: RoutePaths.order,
		element: <div>Order</div>,
		meta: {
			titleKey: 'RandomColorTitle',
			descriptionKey: 'RandomColorDescription',
			navNameKey: 'RandomColorNavName',
			showInNav: true
		}
	}
};

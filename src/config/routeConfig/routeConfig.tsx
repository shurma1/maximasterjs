import {RouteObject} from 'react-router-dom';

export interface RouteMeta {
	titleKey: string;
	descriptionKey: string;
	navNameKey: string;
	showInNav?: boolean;
}

type AppRouteObject = { meta: RouteMeta } & RouteObject;

export enum AppRoutes {
	RandomColor = 'randomColor',
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.RandomColor]: '/'
};

export const routeConfig: Record<AppRoutes, AppRouteObject> = {
	[AppRoutes.RandomColor]: {
		path: RoutePaths.randomColor,
		element: <div>Random Color</div>,
		meta: {
			titleKey: 'title key in i18n',
			descriptionKey: 'description key in i18n',
			navNameKey: 'nav key in i18n',
			showInNav: true
		}
	}
};

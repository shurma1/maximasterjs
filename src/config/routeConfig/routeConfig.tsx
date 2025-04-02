import {RouteObject} from 'react-router-dom';

interface RouteMeta {
	titleKey: string;
	descriptionKey: string;
	navNameKey: string;
	showInNav?: boolean;
}

type AppRouteObject = { meta: RouteMeta } & RouteObject;

export enum AppRoutes {
	Main = 'main',
	RandomColor = 'randomColor',
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.Main]: '/',
	[AppRoutes.RandomColor]: '/randomColor'
};

export const routeConfig: Record<AppRoutes, AppRouteObject> = {
	[AppRoutes.Main]: {
		path: RoutePaths.main,
		element: <div>Main</div>,
		meta: {
			titleKey: 'title key in i18n',
			descriptionKey: 'description key in i18n',
			navNameKey: 'nav key in i18n',
			showInNav: false
		}
	},
	[AppRoutes.RandomColor]: {
		path: RoutePaths.randomColor,
		element: <div>Random Color</div>,
		meta: {
			titleKey: 'title key in i18n',
			descriptionKey: 'description key in i18n',
			navNameKey: 'nav key in i18n',
			showInNav: false
		}
	}
};

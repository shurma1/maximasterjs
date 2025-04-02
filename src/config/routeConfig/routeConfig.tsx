import {RouteObject} from 'react-router-dom';
import {StringKey} from '@/assets/strings.ts';

export interface RouteMeta {
	titleKey: StringKey;
	descriptionKey: StringKey;
	navNameKey: StringKey;
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
			titleKey: 'RandomColorTitle',
			descriptionKey: 'RandomColorDescription',
			navNameKey: 'RandomColorNavName',
			showInNav: true
		}
	}
};

import {RouteObject} from 'react-router-dom';
import {StringKey} from '@/assets/strings.ts';
import RandomColorPage from '@/pages/RandomColorPage.tsx';
import OrderPage from '@/pages/OrderPage.tsx';
import ProductsPage from '@/pages/ProductsPage.tsx';
import CpuPage from '@/pages/CpuPage.tsx';
import SpreadsheetPage from '@/pages/SpreadsheetPage.tsx';

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
	Products = 'products',
	Cpu = 'cpu',
	Spreadsheet = 'spreadsheet',
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.RandomColor]: '/',
	[AppRoutes.Order]: '/order',
	[AppRoutes.Products]: '/products',
	[AppRoutes.Cpu]: '/cpu',
	[AppRoutes.Spreadsheet]: '/spreadsheet'
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
		element: <OrderPage/>,
		meta: {
			titleKey: 'OrderTitle',
			descriptionKey: 'OrderDescription',
			navNameKey: 'OrderNavName',
			showInNav: true
		}
	},
	[AppRoutes.Products]: {
		path: RoutePaths.products,
		element: <ProductsPage/>,
		meta: {
			titleKey: 'ProductsTitle',
			descriptionKey: 'ProductsDescription',
			navNameKey: 'ProductsNavName',
			showInNav: true
		}
	},
	[AppRoutes.Cpu]: {
		path: RoutePaths.cpu,
		element: <CpuPage/>,
		meta: {
			titleKey: 'CpuTitle',
			descriptionKey: 'CpuDescription',
			navNameKey: 'CpuNavName',
			showInNav: true
		}
	},
	[AppRoutes.Spreadsheet]: {
		path: RoutePaths.spreadsheet,
		element: <SpreadsheetPage/>,
		meta: {
			titleKey: 'CpuTitle',
			descriptionKey: 'CpuDescription',
			navNameKey: 'CpuNavName',
			showInNav: true
		}
	}
};

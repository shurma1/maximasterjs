import { Layout as ANTDLayout, Menu, MenuProps } from 'antd';
import { AppRoutes, routeConfig, RouteKeysByPath, RoutePaths } from '@/config/routeConfig/routeConfig.tsx';
import { getString } from '@/utils/getString.ts';
import { FC, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Content, Sider } = ANTDLayout;

const navItems: MenuProps['items'] = (Object.keys(routeConfig) as AppRoutes[])
	.map(key => ({
		key,
		label: getString(routeConfig[key].meta.navNameKey),
	}));

interface LayoutProps {
	children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const currentRouteKey = RouteKeysByPath[location.pathname];

	const handleClick: MenuProps['onClick'] = (e) => {
		if (location.pathname === RoutePaths[e.key as AppRoutes]) return;
		navigate(RoutePaths[e.key as AppRoutes]);
	};

	return (
		<ANTDLayout>
			<Sider width={250}>
				<Menu
					mode="inline"
					selectedKeys={currentRouteKey ? [currentRouteKey] : []}
					style={{ height: '100%', borderRight: 0 }}
					items={navItems}
					onClick={handleClick}
				/>
			</Sider>
			<ANTDLayout>
				<Content
					style={{
						padding: 24,
						margin: 0,
						minHeight: '100vh',
					}}
				>
					{children}
				</Content>
			</ANTDLayout>
		</ANTDLayout>
	);
};

export default Layout;

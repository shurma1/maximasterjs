import {Helmet} from 'react-helmet';
import {RouteMeta} from '@/config/routeConfig/routeConfig.tsx';
import {FC, ReactNode} from 'react';
import {getString} from '@/utils/getString.ts';

interface MetaProps extends Pick<RouteMeta, 'titleKey' | 'descriptionKey'> {
	children:  ReactNode | null;
}

const Meta: FC<MetaProps> = (props) => {

	const {
		titleKey,
		descriptionKey,
		children,
	} = props;

	return (
		<>
			<Helmet>
				<title>{getString(titleKey)}</title>
				<meta name="description" content={getString(descriptionKey)} />
			</Helmet>
			{children}
		</>
	);
};

export default Meta;

import {Helmet} from 'react-helmet';
import {RouteMeta} from '@/config/routeConfig/routeConfig.tsx';
import {FC, ReactNode} from 'react';

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
				<title>{titleKey}</title>
				<meta name="description" content={descriptionKey} />
			</Helmet>
			{children}
		</>
	);
};

export default Meta;

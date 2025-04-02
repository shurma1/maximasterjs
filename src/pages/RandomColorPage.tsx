import {Flex, Typography} from 'antd';
import RandomColor from '@/components/RandomColor/RandomColor.tsx';
import {getString} from '@/utils/getString.ts';

const { Title } = Typography;

const RandomColorPage = () => {
	return (
		<Flex
			vertical
			justify="center"
		>
			<Title
				level={2}
				style={{ textAlign: 'center' }}
			>
				{getString('RandomColorTitle')}
			</Title>
			<RandomColor/>
		</Flex>
	);
};

export default RandomColorPage;

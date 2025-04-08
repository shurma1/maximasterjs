import {getString} from '@/utils/getString.ts';
import {Flex, Typography} from 'antd';
import CpuChart from '@/components/CpuChart/CpuChart.tsx';

const {Title} = Typography;

const ProductsPage = () => {
	return (
		<Flex
			vertical
			justify="center"
		>
			<Title
				level={2}
				style={{textAlign: 'center'}}
			>
				{getString('CpuTitle')}
			</Title>
			<CpuChart/>
		</Flex>
	);
};

export default ProductsPage;

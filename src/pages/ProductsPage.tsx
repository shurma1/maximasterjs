import {getString} from '@/utils/getString.ts';
import {Flex, Typography} from 'antd';
import ProductsTableWithPriceFilter from '@/components/ProductsTableWithPriceFilter/ProductsTableWithPriceFilter.tsx';

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
				{getString('ProductsTitle')}
			</Title>
			<ProductsTableWithPriceFilter/>
		</Flex>
	);
};

export default ProductsPage;

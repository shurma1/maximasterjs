import {Card, Flex, Typography} from 'antd';
import {getString} from '@/utils/getString.ts';
import OrderForm from '@/components/OrderForm/OrderForm.tsx';

const {Title} = Typography;
const RandomColorPage = () => {
	return (
		<Flex
			vertical
			justify="center"
		>
			<Title
				level={2}
				style={{textAlign: 'center'}}
			>
				{getString('OrderTitle')}
			</Title>
			<Card title="Оформление заказа">
				<OrderForm />
			</Card>
		</Flex>
	);
};

export default RandomColorPage;

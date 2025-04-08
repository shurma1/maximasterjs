import {Skeleton, Table, Typography} from 'antd';

import {IProduct, IProductWithID} from '@/types/IProduct.ts';
import {getString} from '@/utils/getString.ts';

const { Text } = Typography;

export interface IProductTableProps {
	data: IProductWithID[];
	loading?: boolean;
	error?: string | null;
}

export const ProductsTable = ({ data, loading = false, error = null }: IProductTableProps) => {
	const columns = [
		{
			title: getString('idLabel'),
			dataIndex: 'id',
			key: 'id',
			width: 80,
		},
		{
			title: getString('nameLabel'),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: getString('quantityLabel'),
			dataIndex: 'quantity',
			key: 'quantity',
			width: 120,
			align: 'right' as const,
		},
		{
			title: getString('pricePerUnitLabel'),
			dataIndex: 'price',
			key: 'price',
			width: 150,
			align: 'right' as const,
			render: (price: number) => `${price.toLocaleString('ru-RU')} ₽`,
		},
		{
			title: getString('totalLabel'),
			key: 'total',
			width: 150,
			align: 'right' as const,
			render: (record: IProduct) => (
				<Text strong>{(record.price * record.quantity).toLocaleString('ru-RU')} ₽</Text>
			),
		},
	];

	if (loading && !data) {
		return <Skeleton active paragraph={{ rows: 10 }} />;
	}

	if (error) {
		return (
			<div style={{ textAlign: 'center', padding: 24 }}>
				<Text type="danger">{error}</Text>
			</div>
		);
	}

	if (!loading && data?.length === 0) {
		return (
			<div style={{ textAlign: 'center', padding: 24 }}>
				<Text type="secondary">{getString('noDataLabel')}</Text>
			</div>
		);
	}

	return (
		<Table
			dataSource={data}
			columns={columns}
			rowKey="id"
			loading={loading}
			pagination={false}
			bordered
		/>
	);
};

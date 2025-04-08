import { InputNumber, Button, Form } from 'antd';
import { IRange } from '@/types/IRange.ts';
import {getString} from '@/utils/getString.ts';

interface PriceFilterProps {
	range: IRange;
	setRange: (value: IRange) => void;
}

export const NUMBER_FORMAT_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export const PriceFilter = ({
	range,
	setRange,
}: PriceFilterProps) => {
	const [form] = Form.useForm();

	const handleSubmit = () => {
		form.validateFields().then(() => {
			const values = form.getFieldsValue();
			setRange(values);
		});
	};

	const formatter = (value?: string | number) =>
		`${value}`.replace(NUMBER_FORMAT_REGEX, ' ');

	return (
		<Form
			form={form}
			initialValues={range}
			layout="inline"
			style={{marginBlock: '10px'}}
		>
			<Form.Item
				label={getString('priceForm')}
				name="min"
				rules={[{ required: false }]}
			>
				<InputNumber
					min={0}
					placeholder={getString('minPriceLabel')}
					style={{ width: 120 }}
					formatter={formatter}
					parser={(value) => value!.replace(/\s/g, '')}
				/>
			</Form.Item>

			<Form.Item
				label={getString('priceTo')}
				name="max"
				rules={[{ required: false }]}
			>
				<InputNumber
					min={0}
					placeholder={getString('maxPriceLabel')}
					style={{ width: 120 }}
					formatter={formatter}
					parser={(value) => value!.replace(/\s/g, '')}
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" onClick={handleSubmit}>
					{getString('update')}
				</Button>
			</Form.Item>
		</Form>
	);
};

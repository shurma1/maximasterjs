import { Button, Form, Input, Alert } from 'antd';
import { useState } from 'react';
import Map from '../Map/Map.tsx';
import {getString} from '@/utils/getString.ts';

interface OrderFormValues {
	fullName: string;
	phone: string;
	email?: string;
	comment?: string;
}

const OrderForm = () => {
	const [form] = Form.useForm();
	const [deliveryCoords, setDeliveryCoords] = useState<[number, number] | null>(
		null
	);
	const [submitStatus, setSubmitStatus] = useState<{
		success: boolean;
		errors: string[];
	}>({ success: false, errors: [] });

	const onFinish = () => {
		const errors: string[] = [];

		if (!deliveryCoords) {
			errors.push(getString('AddressNotMarked'));
		}

		if (errors.length > 0) {
			setSubmitStatus({ success: false, errors });
			return;
		}

		setSubmitStatus({ success: true, errors: [] });
	};

	const onFinishFailed = (errorInfo: {
		values: OrderFormValues;
		errorFields: {
			name: (string | number)[];
			errors: string[];
		}[];
		outOfDate: boolean;
	}) => {
		const errors = errorInfo.errorFields.flatMap(field => field.errors);
		if (!deliveryCoords) {
			errors.push(getString('AddressNotMarked'));
		}
		setSubmitStatus({
			success: false,
			errors: errors.filter(Boolean)
		});
	};

	return (
		<Form
			form={form}
			name="order"
			layout="vertical"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label={getString('FullNameLabel')}
				name="fullName"
				rules={[{ required: true, message: getString('FullNameRequired') }]}
			>
				<Input placeholder={getString('FullNamePlaceholder')} />
			</Form.Item>

			<Form.Item
				label={getString('PhoneLabel')}
				name="phone"
				rules={[
					{ required: true, message: getString('PhoneRequired') },
					{
						pattern: /^[0-9]+$/,
						message: getString('PhoneDigitsOnly'),
					},
				]}
			>
				<Input placeholder={getString('PhonePlaceholder')} />
			</Form.Item>

			<Form.Item
				label={getString('EmailLabel')}
				name="email"
				rules={[
					{
						type: 'email',
						message: getString('EmailMustContainAt'),
					},
				]}
			>
				<Input placeholder={getString('EmailPlaceholder')} />
			</Form.Item>

			<Form.Item label={getString('DeliveryAddressLabel')}>
				<Map onCoordinateSelect={setDeliveryCoords} />
			</Form.Item>

			<Form.Item
				label={getString('OrderCommentLabel')}
				name="comment"
				rules={[
					{
						max: 500,
						message: getString('CommentMaxLength'),
					},
				]}
			>
				<Input.TextArea rows={4} showCount maxLength={500} />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					{getString('SubmitButton')}
				</Button>
			</Form.Item>

			{submitStatus.success && (
				<Alert message={getString('OrderSuccessMessage')} type="success" showIcon />
			)}

			{submitStatus.errors.length > 0 && (
				<div>
					{submitStatus.errors.map((error, index) => (
						<Alert
							key={index}
							message={error}
							type="error"
							showIcon
							style={{ marginBottom: 8 }}
						/>
					))}
				</div>
			)}
		</Form>
	);
};

export default OrderForm;

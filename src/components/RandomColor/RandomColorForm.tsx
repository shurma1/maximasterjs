import {Button, Form, Input} from 'antd';
import {getString} from '@/utils/getString.ts';
import {Size} from '@/types/size.ts';
import {FC, memo} from 'react';
import {validateNumberInRange} from '@/utils/validateNumberInRange.ts';

interface RandomColorFormProps {
	onSubmit: (size: Size) => void;
}

const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
	if (!/[0-9]/.test(e.key)) {
		e.preventDefault();  // Блокируем не-цифры
	}
};

const RectangleSizeInputRule = [
	{ required: true, message: getString('RequiredField') },
	() => ({
		validator(_: unknown, value: string) {
			return validateNumberInRange(value, 0, 1000, getString('RectangleRangeError'));
		},
	}),
];

const RandomColorForm: FC<RandomColorFormProps> = ({onSubmit}) => {

	return (
		<Form
			onFinish={onSubmit}
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			autoComplete="off"
		>
			<Form.Item
				label={getString('Width')}
				name="width"
				rules={RectangleSizeInputRule}
			>
				<Input
					onKeyPress={handleInput}
					placeholder="100"
				/>
			</Form.Item>
			<Form.Item
				label={getString('Height')}
				name="height"
				rules={RectangleSizeInputRule}
			>
				<Input
					onKeyPress={handleInput}
					placeholder="100"
				/>
			</Form.Item>
			<Form.Item label={null}>
				<Button type="primary" htmlType="submit">
					{getString('RandomColor')}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default memo(RandomColorForm);

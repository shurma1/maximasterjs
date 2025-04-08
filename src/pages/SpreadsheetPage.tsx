import {Flex, Typography} from 'antd';
import {getString} from '@/utils/getString.ts';
import Spreadsheet from '@/components/Spreadsheet/Spreadsheet.tsx';

const { Title } = Typography;

const SpreadsheetPage = () => {
	return (
		<Flex
			vertical
			justify="center"
		>
			<Title
				level={2}
				style={{ textAlign: 'center' }}
			>
				{getString('SpreadsheetTitle')}
			</Title>
			<Spreadsheet/>
		</Flex>
	);
};

export default SpreadsheetPage;

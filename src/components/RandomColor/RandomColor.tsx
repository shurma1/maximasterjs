import RandomColorForm from '@/components/RandomColor/RandomColorForm.tsx';
import {Divider, Flex} from 'antd';
import ResizableRectangle, {ResizableRectangleProps} from '@/components/RandomColor/ResizableRectangle.tsx';
import {Size} from '@/types/size.ts';
import {useCallback, useState} from 'react';
import {generateRandomHEXColor} from '@/utils/generateRandomHEXColor.ts';

const initialRectangleParams: ResizableRectangleProps = {
	width: '100',
	height: '100',
	color: '#000000',
};

const RandomColor = () => {

	const [rectangleParams, setRectangleParams] = useState<ResizableRectangleProps>(initialRectangleParams);

	const handleFormSubmit = useCallback((size: Size) => {
		setRectangleParams(
			{
				...size,
				color: generateRandomHEXColor()
			}
		);
	}, []);

	return (
		<Flex
			vertical
			align="center"
		>
			<RandomColorForm
				onSubmit={handleFormSubmit}
			/>
			<Divider/>
			<ResizableRectangle
				{...rectangleParams}
			/>
		</Flex>
	);
};

export default RandomColor;

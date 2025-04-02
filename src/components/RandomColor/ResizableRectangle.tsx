import {FC} from 'react';
import classNames from './ResizableRectangle.module.scss';

export interface ResizableRectangleProps {
	width: string;
	height: string;
	color: string;
}

const ResizableRectangle: FC<ResizableRectangleProps> = (props) => {

	const {
		width,
		height,
		color
	} = props;

	return (
		<div
			className={classNames.ResizableRectangle}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				background: color,
			}}
		/>
	);
};

export default ResizableRectangle;

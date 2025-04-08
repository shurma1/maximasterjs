import React, {useEffect, useRef} from 'react';

export interface CellData {
	id: string;
	value: string;
}

interface CellProps {
	value: string;
	isEditing: boolean;
	onChange: (value: string) => void;
	onDoubleClick: () => void;
	onBlur: () => void;
}

const Cell: React.FC<CellProps> = ({
	value,
	isEditing,
	onChange,
	onDoubleClick,
	onBlur
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isEditing && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isEditing]);

	return (
		<div
			style={{
				minWidth: '100px',
				height: '40px',
				border: '1px solid #ddd',
				padding: '8px',
				backgroundColor: isEditing ? '#f0f0f0' : 'white',
				display: 'flex',
				alignItems: 'center',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap'
			}}
			onDoubleClick={onDoubleClick}
		>
			{isEditing ? (
				<input
					ref={inputRef}
					type="text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					onBlur={onBlur}
					onKeyPress={(e) => e.key === 'Enter' && onBlur()}
					style={{
						width: '100%',
						border: 'none',
						outline: 'none',
						background: 'transparent'
					}}
				/>
			) : (
				<span>{value}</span>
			)}
		</div>
	);
};

export default Cell;

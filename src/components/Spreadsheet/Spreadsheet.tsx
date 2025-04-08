import { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import Cell, {CellData} from '@/components/Spreadsheet/Cell.tsx';
// уже было лень выносить текст в strings
const Spreadsheet = () => {
	const [rows, setRows] = useState(3);
	const [cols, setCols] = useState(3);
	const [data, setData] = useState<CellData[][]>([]);
	const [editingCell, setEditingCell] = useState<{row: number, col: number} | null>(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalAction, setModalAction] = useState<'row' | 'col' | null>(null);

	// Инициализация данных
	useEffect(() => {
		const savedData = localStorage.getItem('spreadsheetData');
		if (savedData) {
			const parsedData = JSON.parse(savedData);
			setData(parsedData.data);
			setRows(parsedData.rows);
			setCols(parsedData.cols);
		} else {
			initializeData();
		}
	}, []);

	// Сохранение данных
	useEffect(() => {
		if (data.length > 0) {
			localStorage.setItem('spreadsheetData', JSON.stringify({
				data,
				rows,
				cols
			}));
		}
	}, [data, rows, cols]);

	const initializeData = () => {
		const newData: CellData[][] = [];
		for (let i = 0; i < rows; i++) {
			const row: CellData[] = [];
			for (let j = 0; j < cols; j++) {
				row.push({
					id: `${i}-${j}`,
					value: ''
				});
			}
			newData.push(row);
		}
		setData(newData);
	};

	const handleCellDoubleClick = (rowIndex: number, colIndex: number) => {
		setEditingCell({ row: rowIndex, col: colIndex });
	};

	const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
		const newData = [...data];
		newData[rowIndex][colIndex] = {
			...newData[rowIndex][colIndex],
			value
		};
		setData(newData);
	};

	const handleCellBlur = () => {
		setEditingCell(null);
	};

	const addRow = () => {
		const newRow: CellData[] = [];
		for (let j = 0; j < cols; j++) {
			newRow.push({
				id: `${rows}-${j}`,
				value: ''
			});
		}
		setData([...data, newRow]);
		setRows(rows + 1);
	};

	const addColumn = () => {
		const newData = data.map((row, i) => [
			...row,
			{
				id: `${i}-${cols}`,
				value: ''
			}
		]);
		setData(newData);
		setCols(cols + 1);
	};

	const confirmDeleteRow = () => {
		if (rows <= 1) return;

		const hasData = data[data.length - 1].some(cell => cell.value.trim() !== '');

		if (hasData) {
			setModalAction('row');
			setModalVisible(true);
		} else {
			deleteLastRow();
		}
	};

	const deleteLastRow = () => {
		const newData = [...data];
		newData.pop();
		setData(newData);
		setRows(rows - 1);
	};

	const confirmDeleteColumn = () => {
		if (cols <= 1) return;

		const hasData = data.some(row => row[row.length - 1].value.trim() !== '');

		if (hasData) {
			setModalAction('col');
			setModalVisible(true);
		} else {
			deleteLastColumn();
		}
	};

	const deleteLastColumn = () => {
		const newData = data.map(row => {
			const newRow = [...row];
			newRow.pop();
			return newRow;
		});
		setData(newData);
		setCols(cols - 1);
	};

	const handleModalOk = () => {
		if (modalAction === 'row') {
			deleteLastRow();
		} else if (modalAction === 'col') {
			deleteLastColumn();
		}
		setModalVisible(false);
	};

	const handleModalCancel = () => {
		setModalVisible(false);
	};

	return (
		<div style={{ padding: '20px', maxWidth: '100%' }}>
			<h1>Электронные таблицы</h1>

			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				<div style={{ overflowX: 'auto', marginRight: '10px' }}>
					<table style={{ borderCollapse: 'collapse' }}>
						<tbody>
							{data.map((row, rowIndex) => (
								<tr key={rowIndex}>
									{row.map((cell, colIndex) => (
										<td key={cell.id} style={{ padding: 0 }}>
											<Cell
												value={cell.value}
												isEditing={editingCell?.row === rowIndex && editingCell?.col === colIndex}
												onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
												onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
												onBlur={handleCellBlur}
											/>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Button
						type="text"
						icon={<PlusOutlined />}
						onClick={addColumn}
						style={{ marginBottom: '5px' }}
					/>
					<Button
						type="text"
						icon={<MinusOutlined />}
						onClick={confirmDeleteColumn}
						disabled={cols <= 1}
					/>
				</div>
			</div>

			<div style={{ display: 'flex', marginTop: '10px' }}>
				<Button
					type="text"
					icon={<PlusOutlined />}
					onClick={addRow}
					style={{ marginRight: '5px' }}
				/>
				<Button
					type="text"
					icon={<MinusOutlined />}
					onClick={confirmDeleteRow}
					disabled={rows <= 1}
				/>
			</div>

			<Modal
				title="Подтверждение удаления"
				visible={modalVisible}
				onOk={handleModalOk}
				onCancel={handleModalCancel}
			>
				<p>Вы уверены, что хотите удалить последнюю {modalAction === 'row' ? 'строку' : 'колонку'}? Все данные будут потеряны.</p>
			</Modal>
		</div>
	);
};

export default Spreadsheet;

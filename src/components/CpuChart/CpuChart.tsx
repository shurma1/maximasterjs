import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Card, Statistic, Row, Col, Spin } from 'antd';
import {getString} from '@/utils/getString.ts';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const CpuChart = () => {
	const [cpuData, setCpuData] = useState<number[]>([]);
	const [labels, setLabels] = useState<string[]>([]);
	const [totalRequests, setTotalRequests] = useState(0);
	const [errorCount, setErrorCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [lastValidValue, setLastValidValue] = useState<number | null>(null);
	const intervalRef = useRef<NodeJS.Timeout>(null);

	const fetchCPUUsage = async () => {
		setLoading(true);
		setTotalRequests(prev => prev + 1);

		try {
			const response = await fetch('http://localhost:8010/service/cpu');

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			const cpuValue = Number(data);

			if (cpuValue === 0) {
				setErrorCount(prev => prev + 1);

				if (lastValidValue !== null) {
					updateChartData(lastValidValue);
				}
				return;
			}

			setLastValidValue(cpuValue);
			updateChartData(cpuValue);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			setErrorCount(prev => prev + 1);

			if (lastValidValue !== null) {
				updateChartData(lastValidValue);
			}
		} finally {
			setLoading(false);
		}
	};

	const updateChartData = (value: number) => {
		const newTime = new Date().toLocaleTimeString();
		setLabels(prev => [...prev.slice(-19), newTime]);
		setCpuData(prev => [...prev.slice(-19), value]);
	};

	useEffect(() => {
		fetchCPUUsage();
	}, []);

	useEffect(() => {
		intervalRef.current = setInterval(fetchCPUUsage, 5000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [lastValidValue]);

	const chartData = {
		labels,
		datasets: [
			{
				label: getString('cpuUsage'),
				data: cpuData,
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				tension: 0.1,
				fill: true,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: getString('cpuUsageLabel'),
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
				title: {
					display: true,
					text: getString('usage'),
				},
			},
		},
	};

	const errorPercentage = totalRequests > 0
		? Math.round((errorCount / totalRequests) * 100)
		: 0;

	return (
		<div style={{ padding: '24px' }}>
			<Card>
				<Spin
					spinning={loading}
				>
					<div
						style={{ height: '400px' }}
					>
						<Line
							options={options}
							data={chartData}
						/>
					</div>
				</Spin>

				<Row
					gutter={16}
					style={{ marginTop: '24px' }}
				>
					<Col
						span={8}
					>
						<Card>
							<Statistic
								title={getString('requestsCountLabel')}
								value={totalRequests}
							/>
						</Card>
					</Col>
					<Col
						span={8}
					>
						<Card>
							<Statistic
								title={getString('errorsCount')}
								value={errorCount}
							/>
						</Card>
					</Col>
					<Col
						span={8}
					>
						<Card>
							<Statistic
								title={getString('errorsPercent')}
								value={errorPercentage}
								suffix="%"
							/>
						</Card>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default CpuChart;

import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import {getString} from '@/utils/getString.ts';

interface MapProps {
	onCoordinateSelect: (coords: [number, number] | null) => void;
}

const Map = ({ onCoordinateSelect }: MapProps) => {
	const [coords, setCoords] = useState<[number, number] | null>(null);

	const handleMapClick = (e: ymaps.MapEvent) => {
		const newCoords = e.get('coords') as [number, number];
		setCoords(newCoords);
		onCoordinateSelect(newCoords);
	};

	return (
		<YMaps query={{ apikey: process.env.YA_API_KEY }}>
			<div style={{ width: '100%', height: '400px' }}>
				<YMap
					defaultState={{ center: [54.193104, 37.613727], zoom: 15 }}
					width="100%"
					height="100%"
					onClick={handleMapClick}
				>
					{coords && (
						<Placemark
							geometry={coords}
							properties={{
								balloonContent: [
									'<div style="padding: 10px;">',
									'<div style="font-weight: bold; margin-bottom: 5px;">'+getString('coords')+'</div>',
									'<div>'+getString('latitude')+` ${coords[0].toFixed(6)}</div>`,
									'<div>'+getString('longitude')+` ${coords[1].toFixed(6)}</div>`,
									'</div>'
								].join(''),
								hintContent: getString('mapWithCoordsHint')
							}}
							options={{
								preset: 'islands#redDotIcon',
								balloonCloseButton: true,
								hideIconOnBalloonOpen: false
							}}
							modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
						/>
					)}
				</YMap>
			</div>
		</YMaps>
	);
};

export default Map;

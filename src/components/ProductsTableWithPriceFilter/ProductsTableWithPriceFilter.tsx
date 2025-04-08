import {useEffect, useState} from 'react';
import { PriceFilter } from '@/components/PriceFilter/PriceFilter.tsx';
import { IRange } from '@/types/IRange.ts';
import {ProductsTable} from '@/components/ProductsTable/ProductsTable.tsx';
import {useGetProductsQuery} from '@/services/apiService.ts';
import {IProductWithID} from '@/types/IProduct.ts';

const ProductsTableWithPriceFilter = () => {
	const [priceRange, setPriceRange] = useState<IRange>({
		min: 0,
		max: 0,
	});

	const {data, isLoading} = useGetProductsQuery();

	const [filteredData, setFilteredData] = useState<IProductWithID[]>( []);

	useEffect(() => {
		if(isLoading) return;
		if(!data) return;

		const dataWithId = data!.map((item, id) => ({...item, id}));
		if(priceRange.min === 0 && priceRange.max === 0) {
			setFilteredData(dataWithId);
			return;
		}

		setFilteredData(dataWithId.filter(item => item.price >= priceRange.min && item.price <= priceRange.max));
	}, [data, isLoading, priceRange]);
	return (
		<div>
			<PriceFilter
				range={priceRange}
				setRange={setPriceRange}
			/>

			<ProductsTable
				data={filteredData}
				loading={isLoading}
			/>
		</div>
	);
};

export default ProductsTableWithPriceFilter;

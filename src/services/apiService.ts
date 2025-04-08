import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '@/constants/api.ts';
import {IProduct} from '@/types/IProduct.ts';

export const apiService = createApi({
	reducerPath: 'apiService',
	baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
	endpoints: (build) => ({
		getProducts: build.query<IProduct[], void>({
			query: () => '/products',
		})
	})
});

export const{
	useGetProductsQuery
} = apiService;

export const {
	getProducts
} = apiService.endpoints;

export interface IProduct {
	price: number;
	quantity: number;
	name: string;
}

export interface IProductWithID extends IProduct {
	id: number;
}

export const strings = {
	// Titles
	RandomColorTitle: 'Задача #1 - Случайный цвет',
	OrderTitle: 'Задача #2 - Заказ',
	ProductsTitle: 'Задача #3 - Таблица товаров',
	CpuTitle: 'Задача #4 - График загруженности процессора',
	SpreadsheetTitle: 'Задача #5 - Электронная таблица',

	// Descriptions
	RandomColorDescription: 'Задача #1 - Случайный цвет | Задания от максимастер',
	OrderDescription: 'Задача #2 - Заказ | Задания от максимастер',
	ProductsDescription: 'Задача #3 - Таблица товаров | Задания от максимастер',
	CpuDescription: 'Задача #4 - График загруженности процессора | Задания от максимастер',
	SpreadsheetDescription: 'Задача #5 - Электронная таблица | Задания от максимастер',

	// navNames
	RandomColorNavName: 'Случайный цвет',
	OrderNavName: 'Заказ',
	ProductsNavName: 'Товары',
	CpuNavName: 'График загруженности cpu',
	SpreadsheetNavName: 'Электронная таблица',

	// Form strings
	FullNameLabel: 'ФИО',
	FullNameRequired: 'Пожалуйста, введите ФИО',
	FullNamePlaceholder: 'Иванов Иван Иванович',
	PhoneLabel: 'Телефон',
	PhoneRequired: 'Пожалуйста, введите телефон',
	PhoneDigitsOnly: 'Телефон должен содержать только цифры',
	PhonePlaceholder: '79991234567',
	EmailLabel: 'Email',
	EmailMustContainAt: 'Email должен содержать символ @',
	EmailPlaceholder: 'example@mail.com',
	DeliveryAddressLabel: 'Адрес доставки',
	OrderCommentLabel: 'Комментарий к заказу',
	CommentMaxLength: 'Комментарий не должен превышать 500 символов',
	SubmitButton: 'Отправить',
	OrderSuccessMessage: 'Заказ оформлен!',
	AddressNotMarked: 'Не отмечен адрес доставки',

	//Other
	RandomColor: 'Случайный цвет',
	Width: 'Ширина',
	Height: 'Высота',
	RequiredField: 'Это обязательное поле',
	RectangleRangeError: 'Значение должно находится в диапазоне он 0 до 1000',
	mapWithCoordsHint: 'Кликните для просмотра координат',
	coords: 'Координаты:',
	latitude: 'Широта:',
	longitude: 'Долгота:',
	priceForm: 'Цена от',
	priceTo: 'до',
	update: 'Обновить',
	minPriceLabel: 'Минимальная цена',
	maxPriceLabel: 'Максимальная цена',

	idLabel: 'ID',
	nameLabel: 'Название',
	quantityLabel: 'Количество',
	pricePerUnitLabel: 'Цена за единицу',
	totalLabel: 'Сумма',
	noDataLabel: 'Нет данных для отображения',
	cpuUsage: 'Использование CPU %',
	cpuUsageLabel: 'График использования CPU',
	usage: 'Использовано %',
	requestsCountLabel: 'Количество запросов',
	errorsCount: 'Количество ошибок',
	errorsPercent: 'Процент ошибок'

};

export type StringKey = keyof typeof strings;

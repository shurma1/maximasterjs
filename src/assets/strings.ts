export const strings = {
	// Titles
	RandomColorTitle: 'Задача #1 - Случайный цвет',
	OrderTitle: 'Задача #2 - Заказ',

	// Descriptions
	RandomColorDescription: 'Задача #1 - Случайный цвет | Задания от максимастер',
	OrderDescription: 'Задача #1 - Заказ | Задания от максимастер',

	// navNames
	RandomColorNavName: 'Случайный цвет',
	OrderNavName: 'Заказ',

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
	longitude: 'Долгота:'
};

export type StringKey = keyof typeof strings;

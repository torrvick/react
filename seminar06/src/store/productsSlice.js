import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 1,
		name: 'IBANEZ GRG121DX-BKF',
		description:
			'Электрогитара, инструмент в корпусе черного матового цвета. Выполнен из тополя, гриф из клена и амаранта. Модель имеет 24 лада, 5-позиционный переключатель, два звукоснимателя.',
		price: 26800,
		available: true,
	},
	{
		id: 2,
		name: 'ROCKDALE Stars Black Limited Edition HSS BK',
		description:
			'Электрогитара. Форма корпуса стратокастер. Цвет черный. Глянцевое покрытие. Черная фурнитура. Корпус из тополя. Гриф из клена. 22 лада. Анкерный стержень. Накладка на гриф из древесно-полимерного композита. Бридж тремоло. Конфигурация звукоснимателей H-S-S. Управление звуком: громкость, 2 тона, 5-ти позиционный переключатель. Рекомендованный диаметр струн 10/46.',
		price: 11900,
		available: true,
	},
	{
		id: 3,
		name: 'GIBSON 2019 SG TRIBUTE VINTAGE CHERRY SATIN',
		description:
			'Электрогитара, цвет вишневый, материал корпуса - махагони, гриф - клён, накладка грифа - палисандр, количество ладов: 22, мензура 24.75, звукосниматели H/H: 490R neck & 490T bridge pickups, регуляторы: 2 громкости, 2 тона, 3-х позиционный переключатель, бридж фиксированный (Tune-O-Matic), фурнитура хром, в комплекте кейс',
		price: 244000,
		available: false,
	},
	{
		id: 4,
		name: 'EART EGLP-610 Gunmetal Black',
		description:
			'Электрогитара, цвет серый металлик, корпус - красное дерево, гриф - красное дерево, накладка грифа - палисандр, порожек - кость, профиль грифа - переменный U-C, лады - 22 Medium Jumbo (сталь), мензура 24.75", звукосниматели HH - Eart Custom Alnico V (Made in Korea), регуляторы - 1 громкость, 1 тон, 3-х позиционный переключатель, бридж - Tune-O-Matic + Stop Bar (Made in Korea), колки - литые (1:18), фурнитура - хром',
		price: 55000,
		available: false,
	},
	{
		id: 5,
		name: 'FARIDA Marina F-3030 Black',
		description:
			'Электрогитара, цвет черный, корпус - тополь, гриф и накладка - канадский клён, порожек - синтетическая кость, профиль грифа - C-shape, лады - 22 Medium Jumbo, мензура 25,5` (648 мм), звукосниматели HSS - Farida Premium Ceramic (керамические магниты), регуляторы - 1 громкость, 2 тон, 5-ти позиционный переключатель, бридж - 6-Point Vintage Tremolo, колки - литые (made in Korea), фурнитура - хром',
		price: 21505,
		available: true,
	},
];

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			return [...state, { id: Date.now(), ...action.payload }];
		},
		removeProduct: (state, action) => {
			return state.filter((product) => product.id !== Number(action.payload));
		},
	},
});

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;

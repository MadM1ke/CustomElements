// Select
const element = document.querySelector("#select");
const choices = new Choices(element, {
	searchEnabled: false,
});

// Map
ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("mapYandex", {
		center: [48.872185073737896, 2.354223999999991],
		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark(
		[48.872185073737896, 2.354223999999991],
		{},
		{
			iconLayout: "default#image",
			iconImageHref: "../img/flag-for-map.svg",
			iconImageSize: [48, 48],
			iconImageOffset: [-20, -48],
		}
	);
	myMap.geoObjects.add(myPlacemark);
}

//Validate
// Маскирование
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7-(999)-999-99-99");

im.mask(selector);
// Валидация
new JustValidate(".form", {
	rules: {
		name: {
			required: "Введите имя",
			required: true,
			minLength: 2,
			maxLength: 10,
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector.inputmask.unmaskedvalue();
				return Number(phone) && phone.length === 10;
			},
		},
		mail: {
			required: true,
			email: true,
		},
	},
	messages: {
		name: {
			required: "Вы не ввели имя",
			maxLength: "Поле должно содержать максимум :value символьных значений",
			minLength: "Поле должно содержать минимум :value символьных значения",
		},
		tel: {
			required: "Вы не ввели телефон",
			function: "Неверный формат номера телефона",
		},
		mail: {
			required: "Вы не ввели e-mail",
			email: "Не валидный E-mail!",
		},
	},
	colorWrong: "#ff5c00",
});

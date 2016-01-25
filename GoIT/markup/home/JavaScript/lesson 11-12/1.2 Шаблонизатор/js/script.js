$(function() {

	var html = $('#main').html();
	var info = {
		name: 'Зуйкова Виктория Максимовна',
		university: 'Киевский Политехнический Институт',
		frontend1: 'одно из самых интересных направлений в сфере ИТ',
		frontend2: 'хочу найти работу мечты',
		frontend3: 'хочу зарабатывать на путешествия',
		number: '+38(063) 491-90-09',
		title-link: 'vk.com',
		link: 'https://vk.com/id128356142',
		feedback: 'Уже могу сделать небольшой макет',
	};

	var content = tmpl(html, info);

	$('body').append(content);

});
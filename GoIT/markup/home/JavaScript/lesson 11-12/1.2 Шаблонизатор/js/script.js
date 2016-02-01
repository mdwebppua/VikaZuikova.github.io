$(function() {

    var html = $('#test').html();
    var data = {
      name: 'Зуйкова Виктория Максимовна',
      img: 'img/photo.jpg',
      university: 'Студентка КПИ, Факультет Информатики и вычислительной техники',
      frontend: 'Хочу учить фронтэнд, потому что:',
      reason1: 'одно из самых интересных направлений в сфере ИТ',
      reason2: 'хочу найти работу мечты',
      reason3: 'хочу зарабатывать на путешествия',
      contact: 'Мой контактный телефон',
      number: '+38 (063) 491 90 09',
      profile: 'Мой профиль ВК',
      link: 'https://vk.com/id128356142',
      mainLink: 'vk.com',
      feedback: 'Мой фидбэк',
      myFeedback: 'Уже могу сделать небольшой макет',
    };

    var content = tmpl(html, data);
   
    $('body').append(content);
});
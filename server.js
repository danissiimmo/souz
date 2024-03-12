const nodemailer = require('nodemailer');

// Создаем транспорт для отправки писем через сервер Яндекса
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true, // используется SSL
  auth: {
    user: 'your_yandex_email@yandex.ru', // замените на вашу почту Яндекса
    pass: 'your_yandex_password' // замените на ваш пароль от почты Яндекса
  }
});

// Опции для отправки письма
const mailOptions = {
  from: 'your_yandex_email@yandex.ru', // замените на вашу почту Яндекса
  to: 'recipient@example.com', // замените на адрес получателя
  subject: 'Тестовое письмо',
  text: 'Привет, это тестовое письмо от сервера Node.js!'
};

// Отправляем письмо
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Ошибка отправки письма:', error);
  } else {
    console.log('Email отправлен: ' + info.response);
  }
});
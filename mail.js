const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
  auth: {
    api_key: process.env.APIKEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

// field, uni, number, userName // question, contactWay, contact // userCity, userCountry // googleClientId // userDevice // userDevice, utmSource, utmMedium, utmCampaign, utmContent, utmTerm
const sendMail = (
  field = 'Не указано',
  uni = 'Не указано',
  number = '-',
  userName = 'Не указано',
  question = '-',
  contactWay = '-',
  contact = '-',
  userCity = 'Не определен',
  userCountry = 'Не определена',
  googleClientId = '-',
  userDevice = 'Не определён',
  utmSource = '-',
  utmMedium = '-',
  utmCampaign = '-',
  utmContent = '-',
  utmTerm = '-',
  cb
) => {
  const mailOptions = {
    from: process.env.FROMEMAIL,
    to: process.env.TOEMAIL,
    subject: `${
      question === '-' ? 'Новая заявка с РосУчеба' : 'Новый вопрос с РосУчеба'
    } `,
    text: `
    1. Имя: ${userName},\n
    2. Телефон: ${number},\n
    3. Телефон/почта: ${contact},\n
    4. Способ связи: ${contactWay},\n
    5. Страница с которой отправлена заявка: pr.rosucheba.ru,\n
    6. Город: ${userCity},\n
    7. Страна: ${userCountry},\n
    8. Направление: ${field},\n
    9. Университет: ${uni},\n
    10. Вопрос: ${question},\n
    11. Google Client ID: ${googleClientId},\n
    12. Устройство пользователя: ${userDevice},\n
    13. Источник рекламы: ${utmSource},\n
    14. Тип трафика: ${utmMedium},\n
    15. Название РК: ${utmCampaign},\n
    16. Объявление: ${utmContent},\n
    17. Ключевое слово: ${utmTerm}
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;

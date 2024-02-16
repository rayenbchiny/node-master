const nodemailer = require('nodemailer');

// Configurer le transporteur
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'your mail here', // fill these 
    pass: 'your password',
  },
});

// Options du message
const mailOptions = {
  from: 'your mail here',
  to: '******',
  subject: 'hello ',
  text: 'good morning',
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('E-mail envoyé: ' + info.response);
  }
});
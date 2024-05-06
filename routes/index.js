var express = require('express');
var router = express.Router();
// const nodemailer = require('nodemailer');

// use Etherial

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});




const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'mercedes.blick@ethereal.email',
    pass: 'mvjD4BnKt2UKMHfBKy'
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <mercedes.blick@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "First Email ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);






module.exports = router;

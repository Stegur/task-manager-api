const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'stegura.alex@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'stegura.alex@gmail.com',
        subject: 'We will be miss you!',
        text: `Dear ${name}, we are sorry that you go back.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

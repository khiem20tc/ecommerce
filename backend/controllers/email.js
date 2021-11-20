const sgMail = require('@sendgrid/mail')

exports.sendemail = (req,res,next) => {
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setApiKey("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")

const toEmail = "phat.hoang_bku@hcmut.edu.vn";

const msg = {
  to: toEmail, // Change to your recipient
  from: 'blacksecret0998@gmail.com', // Change to your verified sender
  subject: '[Ecommerce] Test send Email features',
  //text: 'This is email to test sendEmail feature heheheheh',
  //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  html: `
  <div>
  <p>Email: Your email is ${toEmail}</p>
  <p>Content: Ecommerce System by @khiem20tc </p>
</div>`,
}

sgMail
  .send(msg)
  .then((res) => {
    console.log(res[0].statusCode)
    console.log(res[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })
}
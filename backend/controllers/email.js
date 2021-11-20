const sgMail = require('@sendgrid/mail')

exports.sendemail = (req,res,next) => {
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setApiKey("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")

const {toEmail, content} = req.body;
//const toEmail_ = "khiem.nguyen20tc@hcmut.edu.vn";

const msg = {
  to: toEmail, // Change to your recipient
  from: 'khiem20tc@gmail.com', // Change to your verified sender
  subject: '[Ecommerce] Order Information',
  //text: 'This is email to test sendEmail feature heheheheh',
  //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  html: `
  <div>
  <p>Email: Your email is ${toEmail}</p>
  <p>Content: Ecommerce System send your Order with content: ${content} </p>
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

  res.status(200).json({
    message: `Sent Email to ${toEmail}`
  })
}
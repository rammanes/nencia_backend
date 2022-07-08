const sendEmail = require('../config/mailer');

const welcomeEmail = async (req, fullname, email, secretToken) => {
  const html = `
    Welcome to Nencia ${fullname}, we're excited to have you join us.
    <br/>
    <br/>
    You can copy and paste the following code <strong>${secretToken}</strong> in the confirmation page
    or click on the link below to activate you account.
    <br/><br/>
    Confirmation Link: http://${req.headers.host}/user/confirm-account/${secretToken}
    <br/>
    <br/>

    <br/>
    <br/>
    Cheers,
    <br/>
    <strong>Nencia Team</strong>
  `;

  await sendEmail(
    'support@nencia.com',
    email,
    'Welcome to Nencia',
    html
  );
}

module.exports = welcomeEmail;
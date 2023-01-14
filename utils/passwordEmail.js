const sendEmail = require("../config/mailer");

const passwordEmail = async (req, token, inputEmail, fullname) => {
  const html = `
    Hello ${fullname}, 
    <br/>
    <br/>
    You can copy and paste the following code <strong>${token}</strong> 
    to reset your password or follow the link below,
    <br/><br/>
    Confirmation Link: http://${req.headers.host}/user/reset-password/${token}
    <br/>
    <br/>
    <br/>
    Cheers,
    <br/>
    <strong>WAAWCHAT Team</strong>
  `;

  await sendEmail(
    "support@waawchat.com",
    inputEmail,
    "Welcome to WAAWChat",
    html
  );
};

module.exports = passwordEmail;

const { createUserRecipientCode } = require("../../paystack");
const { User } = require("../../models/User");
const addBankDetail = async (req, res) => {
  try {
    let { name, bankCode, accountNumber } = req.body;
    let type = "nuban";
    const account = {
      type: type,
      name: name,
      bank_code: bankCode,
      account_number: accountNumber,
    };
    let response = await createUserRecipientCode(account);


        let recipientCode = response.data.data.recipient_code;
        let accountNo = response.data.data.details.account_number;
        let accountName = response.data.data.details.account_name;
        let bank_name = response.data.data.details.bank_name;


        let { vendorId } = req.params;
        let vendor = await User.findOneAndUpdate(
          { _id: vendorId },
          {
            $set: {
              accountDetails: {
                bankName: bank_name,
                accountNumber: accountNo,
                accountName: accountName,
                recipientCode: recipientCode
              },
            },
          },
        );
        if (!vendor)
          return res
            .status(500)
            .json({ success: false, msg: "No Vendor found" });
        return res.status(201).json({
          success: true,
          msg: "account verified successfully",
          vendor,
        });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = addBankDetail;

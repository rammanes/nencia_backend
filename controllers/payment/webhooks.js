

// @desc  webhook to paystack
// @route POST /plan/authentication
const paystackWebHook = () =>{

}
module.exports = paystackWebHook
router.post("/authentication", async (req, res, next) => {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    const response = req.body.event;
    //validate event
    const hash = crypto
      .createHmac("sha512", secret)
      .update(JSON.stringify(req.body))
      .digest("hex");
       if (
      hash == req.headers["x-paystack-signature"] &&
      response === "subscription.disabled"
    ) {
      console.log("Subscription Disabled!")
    }
    if (
      hash == req.headers["x-paystack-signature"] &&
      response === "subscription.create"
    ) {
      const firstName = req.body.data.customer.first_name;
      const lastName = req.body.data.customer.last_name;
      const planName = req.body.data.plan.name;
      console.log(`${firstName} ${lastName} subscribed to ${planName}`);
    }
    if (
      hash == req.headers["x-paystack-signature"] &&
      response === "charge.success"
    ) {
      const interval = req.body.data.plan.interval;
      let normalTime = Date.now();
      const next_pay_date = () => {
        let currentDate;
        if (interval === "weekly") {
          currentDate = moment(normalTime);
          currentDate.add(7, "days").format("YYYY-MM-DD hh:mm");
          return currentDate;
        } else if (interval === "monthly") {
          currentDate = moment(normalTime);
          currentDate.add(30, "days").format("YYYY-MM-DD hh:mm");
          return currentDate;
        } else {
          return null;
        }
      };
      const subscription = {
        plan: req.body.data.plan.name,
        interval: req.body.data.plan.interval,
        amount: req.body.data.plan.amount,
        dueDate: next_pay_date(),
      };
      subscription.user = req.body.data.metadata.user_id;
      await Subscription.create(subscription);
    }
    res.sendStatus(200);
  });
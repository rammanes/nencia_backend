const authRouter = require("./auth/auth.routes");
const productRouter = require("./product/product.routes");
const orderRouter = require("./order/order.routes");
const eventRouter = require("./event/event.routes");
const settingsRouter = require("./settings/settings.routes");
const logisticRouter = require("./logistic/logistic.routes")

const routers = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/order", orderRouter);
  app.use("/api/v1/event", eventRouter);
  app.use("/api/v1/settings", settingsRouter);
  app.use("/api/v1/logistics", logisticRouter);
};

module.exports = routers;


const authRouter = require('./auth/auth.routes');
const productRouter = require('./product/product.routes')

const routers = (app) => {
  
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/product', productRouter);

}

module.exports = routers;
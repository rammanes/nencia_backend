
const authRouter = require('./auth/auth.routes');

const routers = (app) => {
  
  app.use('/api/v1/auth', authRouter);

}

module.exports = routers;
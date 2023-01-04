const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  let token = req.headers["access-token"];
  if (!token) return res.status(403).json({msg: 'You need to login to perform this action'});

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) return res.status(401).json({msg: 'Unauthorized, Invalid token'});

    req.user = decoded.findUser;

    next();
  });
}
const verifyTokenVendor = async (req, res, next) => {
    if(req.user.role === "Vendor"){
      next();
    }else{
      return res.status(401).json({msg: 'You are not allowed to perform this action'});
    }

}
const verifyTokenAdmin = async (req, res, next) => {
    if(req.user.role === "Admin"){
      next();
    }else{
      return res.status(401).json({msg: 'You are not allowed to perform this action'});
    }
}

module.exports = verifyToken
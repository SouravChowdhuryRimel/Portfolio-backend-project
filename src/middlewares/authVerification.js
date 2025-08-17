const { decodeToken } = require("../utility/tokenHelper");

module.exports = (req, res, next) => {
  let token = req.cookies["token"];

  let decode = decodeToken(token);

  if (decode === null) {
    return res.status(401).json({
      status: false,
      message: "Invalid token",
    });
  }else {
    req.headers.email = decode.email;
    req.headers._id = decode._id;
    next();
  }
};

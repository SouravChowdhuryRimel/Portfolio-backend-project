const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, _id) => {
  let key = process.env.JWT_KEY;
  let expire = process.env.JWT_Expire_Time;
  let payload = { email, _id };

  return jwt.sign(payload, key, { expiresIn: expire });
};

exports.decodeToken = (token)=> {
  try {
    let key = process.env.JWT_KEY;
    let decode = jwt.verify(token, key);
    return decode;
    
  } catch (error) {
    return null;
  }
}
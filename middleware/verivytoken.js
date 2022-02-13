// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).send("Tidak ada akses untuk link");
//   try {
//     const verifikasi = jwt.verify(token, "myTotalySecretKey");
//     req.user = verifikasi;
//     next();
//   } catch (error) {
//     res.status(400).send("Invalid Token");
//   }
// };

// module.exports = auth;

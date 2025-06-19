const admin = require("../config/firebaseAdmin");
const { getUserDetails } = require("../Quries/user");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    console.log(req.headers.authorization);
    return res.status(401).json({
      message: "Unauthorized user, token not found",
    });
  }

  try {
    const decodeToken = await admin.auth().verifyIdToken(token);
    req.user = decodeToken;
    console.log(decodeToken);
    const userDetails = await getUserDetails({ uid: decodeToken.uid });
    if (userDetails?.block) {
      return res.status(401).json({
        message: "You are blocked",
        error: "You are blocked",
        logout: true,
      });
    }
    req.user.role = userDetails?.role || "USER";

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Unauthorized from authentication",
      error,
    });
  }
};

module.exports = authMiddleware;

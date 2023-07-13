const admin = require("../config/firebase");
const appcheck = admin.appCheck();
const { getAppCheck } = require("firebase-admin/app-check");

exports.appCheckVerification = async (req, res, next) => {
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    res.status(401);
    return next("Unauthorized");
  }

  try {
    const appCheckClaims = await getAppCheck().verifyToken(appCheckToken);
    return next();
  } catch (err) {
    res.status(401);
    return next("Unauthorized");
  }
};

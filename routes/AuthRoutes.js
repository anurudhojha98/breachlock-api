
var authController = require('../controllers/AuthController');
const path = require('../common/path');
module.exports = (app, router) => {
    router.post(path.LOGIN_URL, authController.login);
    app.use(path.AUTH_URL, router)
}
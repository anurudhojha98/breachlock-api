const commonFunction = require('../common/commonFunctions');
const msg = require('../common/messages');
const models = require('../db/models');
module.exports = {
    async userSignIn(email, password) {
        let returnedUser = {};
        let user = await models.Users.findOne({ where: { email: email } });
        if (!user) {
            logger.error(msg.INVALID_EMAIL_PASSWORD);
            throw new Error(msg.INVALID_EMAIL_PASSWORD);
        }
        if (await !commonFunction.isPasswordMatch(password, user.password)) {
            logger.error(msg.INVALID_PASSWORD);
            throw new Error(msg.INVALID_PASSWORD);
        }
        let token = await commonFunction.generateToken(user);
        returnedUser.token = token;
        returnedUser.user = user.dataValues;
        return returnedUser;
    },
}
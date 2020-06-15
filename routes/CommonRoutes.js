const { isAuthenticated } = require('../middlewares/middleware');
const commonController = require('../controllers/CommonController');
const path = require('../common/path');
module.exports = (app, router) => {
    router.get(path.GET_AUTOCOMPLETE_DATA, isAuthenticated, commonController.autocompleteData);
    app.use(path.API_URL, router);
}
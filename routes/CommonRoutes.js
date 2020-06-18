const { isAuthenticated } = require('../middlewares/middleware');
const commonController = require('../controllers/CommonController');
const path = require('../common/path');
const { autoCompleteValidation, validate } = require('../middlewares/validator');
module.exports = (app, router) => {
    router.get(path.GET_AUTOCOMPLETE_DATA, isAuthenticated, autoCompleteValidation(), validate, commonController.autocompleteData);
    app.use(path.API_URL, router);
}
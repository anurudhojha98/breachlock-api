const path = require('../common/path');
const { isAuthenticated } = require('../middlewares/middleware');
const projectController = require('../controllers/ProjectController');
const { projectValidation, validate } = require('../middlewares/validator')
module.exports = (app, router) => {
    router.post(path.POST_PROJECT, isAuthenticated, projectValidation(), validate, projectController.addProject)
    app.use(path.API_URL, router)
}
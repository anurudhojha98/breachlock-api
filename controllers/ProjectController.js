const logger = require('../logger');
const httpStatus = require('http-status-codes');
const msg = require('../common/messages');
const projectService = require('../services/ProjectService');
module.exports = {
    addProject(req, res) {
        try {
            const projectDetail = req.body;
            projectService.addProject(projectDetail).then(project => {
                return res.status(httpStatus.CREATED).json(
                    {
                        success: true,
                        message: msg.PROJECT_CREATED_SUCCESS,
                        data: project
                    }
                )
            }).catch(err => {
                logger.error(err.message);
                return res.status(httpStatus.OK).json({
                    success: false,
                    message: err.message
                })
            })
        } catch (err) {
            logger.error(err.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: msg.ERR_IN_FETCH_DETAILS
            })
        }
    }
}
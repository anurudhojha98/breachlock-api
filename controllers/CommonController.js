const commonService = require('../services/CommonService');
const logger = require('../logger');
const httpStatus = require('http-status-codes');
const msg = require('../common/messages');
module.exports = {
    autocompleteData(req, res) {
        try {
            let { type } = req.query;
            commonService.getAutocompleteData(type).then(data => {
                return res.status(httpStatus.OK).json(
                    {
                        success: true,
                        message: msg.GET_AUTOCOMPLETE_DATA_SUCCESS,
                        data: data
                    }
                )
            }).catch(err => {
                logger.error(err.message);
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    message: msg.ERR_IN_FETCH_DETAILS
                })
            });

        } catch (err) {
            logger.error(err.message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: msg.ERR_IN_FETCH_DETAILS
            })
        }
    }
}
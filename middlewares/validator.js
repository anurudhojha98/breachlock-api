const { check, query, validationResult } = require('express-validator')
const msg = require('../common/messages');
const constants = require('../common/constants');
const path = require('path');
var httpStatus = require('http-status-codes');

const loginValidation = () => {
    return [
        check(constants.EMAIL, msg.REQUIRED_FIELD).exists().isEmail().withMessage(msg.INVALID_EMAIL),
        check(constants.PASSWORD, msg.REQUIRED_FIELD).exists().isLength({ min: 8 }).withMessage(msg.PASSWORD_MORE_CHAR)
    ]
}

const projectValidation = () => {
    return [
        check(constants.TITLE, msg.REQUIRED_FIELD).exists(),
        check(constants.DESCRIPTION, msg.REQUIRED_FIELD).exists(),
        check(constants.COMPANY_NAME, msg.REQUIRED_FIELD).exists(),
        check(constants.START_DATE, msg.REQUIRED_FIELD).exists(),
        check(constants.END_DATE, msg.REQUIRED_FIELD).exists(),
        check(constants.IS_FORMULATION, msg.REQUIRED_FIELD).exists(),
        check(constants.IS_LABEL_VALIDATION, msg.REQUIRED_FIELD).exists(),
    ]
}

const autoCompleteValidation = () => {
    return [
        query(constants.TYPE, msg.QUERY_PARAM_REQUIRED).exists()
    ]
}


const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(extractedErrors);
}

const validatePDFFile = (file) => {
    let ext = path.extname(file.filename);
    if (ext !== '.pdf') {
        return false;
    }
    return true;
}
const validateImage = (filename, byteData) => {
    const buffer = Buffer.from(byteData);
    const fileSize = buffer.length / 1e+6;
    console.log("MB: " + fileSize);
    let ext = path.extname(filename);
    if (ext === '.jpg' || ext === '.png' || ext === '.jpeg' && fileSize <= 2) {
        return true;
    }
    return false;
}


module.exports = {
    loginValidation,
    validate,
    validatePDFFile,
    validateImage,
    projectValidation,
    autoCompleteValidation
}
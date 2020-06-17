const fs = require('fs');
const constants = require('../common/constants');
const path = require('../common/path');
const models = require('../db/models');
const commonFunctions = require('../common/commonFunctions');
module.exports = {
    async getAutocompleteData(autocompleteType) {
        let dataType = autocompleteType;
        let returnedData = [];
        switch (dataType) {
            case constants.SERVING_TYPE:
                let servingTypeData = await models.Category.findAll({
                    where: { categoryId: constants.FOUR },
                    include: [{ model: models.CategoryItems, as: 'categoryItems' }]
                });
                returnedData = servingTypeData;
                break;
            case constants.TARGET_POPULATION:
                let populationData = await models.Category.findAll({
                    where: { categoryId: constants.TWO },
                    include: [{ model: models.CategoryItems, as: 'categoryItems', categoryId: constants.TWO }]
                });
                returnedData = populationData;
                break;
            case constants.FOOD_CATEGORY:
                let foodCategoryData = await models.Category.findAll({
                    where: { categoryId: constants.ONE },
                    include: [{ model: models.CategoryItems, as: 'categoryItems' }]
                });
                returnedData = foodCategoryData;
                break;
            case constants.SERVING_SIZE:
                let servingSizeData = await models.Category.findAll({
                    where: { categoryId: constants.THREE },
                    include: [{ model: models.CategoryItems, as: 'categoryItems' }]
                })
                returnedData = servingSizeData;
                break;
            default:
                returnedData = []
                break;
        }
        return returnedData;
    }
}


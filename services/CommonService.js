const { Sequelize } = require('../db/models');
const Op = Sequelize.Op;
const constants = require('../common/constants');
const models = require('../db/models');
module.exports = {
    async getAutocompleteData(query) {
        let dataType = query.type;
        let searchStr = '';
        if (query.searchStr) {
            searchStr = query.searchStr;
        }
        let returnedData = [];
        switch (dataType) {
            case constants.SERVING_TYPE:
                let servingTypeData = await models.Category.findAll({
                    where: { categoryId: constants.FOUR },
                    include: [{ model: models.CategoryItems, as: constants.CATEGORY_ITEMS }]
                });
                returnedData = servingTypeData;
                break;
            case constants.TARGET_POPULATION:
                let populationData = await models.Category.findAll({
                    where: { categoryId: constants.TWO },
                    include: [{ model: models.CategoryItems, as: constants.CATEGORY_ITEMS }]
                });
                returnedData = populationData;
                break;
            case constants.FOOD_CATEGORY:
                let foodCategoryData = await models.Category.findAll({
                    where: { categoryId: constants.ONE },
                    include: [{ model: models.CategoryItems, as: constants.CATEGORY_ITEMS }]
                });
                returnedData = foodCategoryData;
                break;
            case constants.SERVING_SIZE:
                let servingSizeData = await models.Category.findAll({
                    where: { categoryId: constants.THREE },
                    include: [{ model: models.CategoryItems, as: constants.CATEGORY_ITEMS }]
                })
                returnedData = servingSizeData;
                break;
            case constants.CUSTOMER_LIST:
                let customerList = await models.Customers.findAll({
                    where: { businessEntityName: { [Op.like]: '%' + searchStr + '%' } },
                    limit: constants.LIMIT,
                    order: [
                        [constants.BUSINESS_ENTITY_NAME, constants.ASC]
                    ]
                })
                returnedData = customerList;
                break;
            default:
                returnedData = []
                break;
        }
        return returnedData;
    }
}


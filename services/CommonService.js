const fs = require('fs');
const constants = require('../common/constants');
const path = require('../common/path');
module.exports = {
    getAutocompleteData(autocompleteType) {
        let dataType = autocompleteType;
        let returnedData = [];
        switch (dataType) {
            case constants.SERVING_TYPE:
                let servingTypeData = fs.readFileSync(path.SERVING_TYPE_JSON);
                returnedData = servingTypeData;
                break;
            case constants.AGE_GROUP:
                let populationData = fs.readFileSync(path.AGE_GROUP_JSON);
                returnedData = populationData;
                break;
            case constants.FOOD_CATEGORY:
                let foodCategoryData = fs.readFileSync(path.FOOD_CATEGORY_JSON);
                returnedData = foodCategoryData;
                break;
            case constants.SERVING_SIZE:
                let servingSizeData = fs.readFileSync(path.SERVING_SIZE_JSON);
                returnedData = servingSizeData;
                break;
            default:
                returnedData = []
                break;
        }
        return JSON.parse(returnedData);
    }
}


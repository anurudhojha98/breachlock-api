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
                returnedData = JSON.parse(servingTypeData);
                break;
            case constants.AGE_GROUP:
                let populationData = fs.readFileSync(path.AGE_GROUP_JSON);
                returnedData = JSON.parse(populationData);
                break;
            case constants.FOOD_CATEGORY:
                let foodCategoryData = fs.readFileSync(path.FOOD_CATEGORY_JSON);
                returnedData = JSON.parse(foodCategoryData);
                break;
            case constants.SERVING_SIZE:
                let servingSizeData = fs.readFileSync(path.SERVING_SIZE_JSON);
                returnedData = JSON.parse(servingSizeData);
                break;
            default:
                returnedData = []
                break;
        }
        return returnedData;
    }
}


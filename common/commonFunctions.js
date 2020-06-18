const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/config');
const path = require('../common/path');
const fs = require('fs');
const logger = require("../logger");
const constants = require("../common/constants");
const msg = require('../common/messages');
const xlsx = require('node-xlsx');
module.exports = {
  generateToken(user) {
    let payload = { id: user.id };
    let token = jwt.sign(payload, config.SECRET_KEY, {
      expiresIn: config.EXPIRES_IN
    });
    return token;
  },
  async isPasswordMatch(currentPassword, actualPassword) {
    return await new Promise((resolve, reject) => {
      let isPasswordMatch = false;
      bcrypt.compare(currentPassword, actualPassword, (err, isMatched) => {
        if (err) reject(err);
        if (!isMatched) {
          resolve(isPasswordMatch);
        }
        resolve((isPasswordMatch = true));
      });
    });
  },
  prepareMasterData() {
    let foodCategories = this.parseJson(fs.readFileSync(path.FOOD_CATEGORY_JSON));
    let servingSize = this.parseJson(fs.readFileSync(path.SERVING_SIZE_JSON));
    let servingType = this.parseJson(fs.readFileSync(path.SERVING_TYPE_JSON));
    let targetPopulation = this.parseJson(fs.readFileSync(path.AGE_GROUP_JSON));
    let masterDataArr = [];
    foodCategories.forEach(val => {
      let newObj = {};
      newObj.category_id = constants.ONE;
      newObj.item_name = val.category;
      newObj.created_at = new Date(),
        newObj.updated_At = new Date()
      masterDataArr.push(newObj);
    })
    servingSize.forEach(val => {
      let newObj = {};
      newObj.category_id = constants.THREE;
      newObj.item_name = val.servingSize;
      newObj.created_at = new Date(),
        newObj.updated_At = new Date()
      masterDataArr.push(newObj);
    })
    servingType.forEach(val => {
      let newObj = {};
      newObj.category_id = constants.FOUR;
      newObj.item_name = val.servingType;
      newObj.created_at = new Date(),
        newObj.updated_At = new Date()
      masterDataArr.push(newObj);
    })
    targetPopulation.forEach(val => {
      let newObj = {};
      newObj.category_id = constants.TWO;
      newObj.item_name = val.ageGroup;
      newObj.created_at = new Date(),
        newObj.updated_At = new Date()
      masterDataArr.push(newObj);
    })
    return masterDataArr;
  },
  parseJson(val) {
    let parsedJson;
    try {
      parsedJson = JSON.parse(val);
    } catch (err) {
      logger.log(err);
      throw new Error(msg.JSON_PARSER_ERR)
    }
    return parsedJson;
  },
  readXlsxFile(filePath) {
    let workSheetsFromFile;
    try {
      workSheetsFromFile = xlsx.parse(filePath);
    } catch (err) {
      logger.log(err);
      throw new Error(msg.EXCEL_PARSER_ERR);
    }
    return workSheetsFromFile;
  },
  getClientListFromFile() {
    let clientList = [];
    let workSheetsFromFile = this.readXlsxFile(config.CLIENT_LIST_PATH);
    let workSheetData = workSheetsFromFile[0].data;
    let tempArr = [];
    workSheetData.forEach((data, index) => {
      if (index > 0 && !tempArr.includes(data[2])) {
        clientList.push({ business_entity_name: data[2] });
        tempArr.push(data[2]);
      }
    })
    console.log(clientList)
    return clientList;
  }
};

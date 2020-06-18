const models = require('../db/models');
module.exports = {
    async addProject(projectDetail) {
        let project = projectDetail;
        return await models.Projects.create({
            title: project.title, description: project.description,
            companyName: project.companyName, startDate: project.startDate, endDate: project.endDate,
            isFormulation: project.isFormulation, isLabelValidation: project.isLabelValidation
        })
    }
}
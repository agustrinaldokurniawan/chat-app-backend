class BaseController {
  static async get(req, modelName) {
    let result;
    try {
      result = await require(`../models/${modelName}`).find({}).exec();
    } catch (error) {
      return Promise.reject(error.message);
    }
    return result;
  }
  static async getById(req, modelName) {
    const {id} = req.params;
    let result;
    try {
      result = await require(`../models/${modelName}`).findById(id).exec();
    } catch (error) {
      return Promise.reject(error.message);
    }
    return result;
  }

  static async getByKey(req, modelName) {
    let result;
    try {
      result = await require(`../models/${modelName}`)
        .findOne({...req})
        .exec();
    } catch (error) {
      return Promise.reject(error.message);
    }
    return result;
  }
  static async create(req, modelName) {
    let result;
    try {
      result = await require(`../models/${modelName}`).create({...req.body});
    } catch (error) {
      return Promise.reject(error.message);
    }
    return result;
  }
  static async updateById(req, modelName) {
    const {id} = req.params;
    let result;
    try {
      result = await require(`../models/${modelName}`)
        .updateOne({_id: id}, {...req.body})
        .exec();
    } catch (error) {
      return Promise.reject(error.message);
    }
    return result;
  }
  static async deleteOneById(req, modelName) {
    const {id} = req.params;
    let result;
    try {
      result = await require(`../models/${modelName}`)
        .deleteOne({_id: id})
        .exec();
    } catch (error) {
      return Promise.reject(error.message);
    }
    return result;
  }
}

module.exports = BaseController;

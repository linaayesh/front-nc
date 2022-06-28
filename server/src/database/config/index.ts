import {
  UsersModel,
  UploadsModel,
  RolesModel,
  UploadsTagsModel,
  UploadsCategoriesModel,
  TagsModel,
  CategoriesModel,
} from '../models';

import sequelize from './connections';
// Users - Uploads relationship
UsersModel.hasMany(UploadsModel);
UploadsModel.belongsTo(UsersModel);

// Users - Roles relationship
RolesModel.hasMany(UsersModel);
UsersModel.belongsTo(RolesModel);

// Uploads - Tags relationship
UploadsModel.belongsToMany(TagsModel, { through: UploadsTagsModel });
TagsModel.belongsToMany(UploadsModel, { through: UploadsTagsModel });
UploadsModel.hasMany(UploadsTagsModel);
UploadsTagsModel.belongsTo(UploadsModel);
TagsModel.hasMany(UploadsTagsModel);
UploadsTagsModel.belongsTo(TagsModel);

// Uploads - Categories relationship
UploadsModel.belongsToMany(CategoriesModel, { through: UploadsCategoriesModel });
CategoriesModel.belongsToMany(UploadsModel, { through: UploadsCategoriesModel });
UploadsModel.hasMany(UploadsCategoriesModel);
UploadsCategoriesModel.belongsTo(UploadsModel);
CategoriesModel.hasMany(UploadsCategoriesModel);
UploadsCategoriesModel.belongsTo(CategoriesModel);

export {
  UsersModel,
  UploadsModel,
  RolesModel,
  UploadsTagsModel,
  UploadsCategoriesModel,
  TagsModel,
  CategoriesModel,
  sequelize,
};

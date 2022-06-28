import {
  sequelize,
  UsersModel,
  TagsModel,
  CategoriesModel,
  RolesModel,
  UploadsCategoriesModel,
  UploadsModel,
  UploadsTagsModel,
} from '../config';

import {
  users,
  tags,
  categories,
  uploads,
  uploadsCategories,
  uploadsTags,
  roles,
} from './fakeData';

const { NODE_ENV } = process.env;

const buildFakeData = async () => {
  await sequelize.sync({ force: true });

  await Promise.all([
    await RolesModel.bulkCreate(roles),
    await TagsModel.bulkCreate(tags),
    await CategoriesModel.bulkCreate(categories),
  ]);
  await Promise.all([
    await UsersModel.bulkCreate(users),
    await UploadsModel.bulkCreate(uploads),
  ]);
  await Promise.all([
    await UploadsTagsModel.bulkCreate(uploadsTags),
    await UploadsCategoriesModel.bulkCreate(uploadsCategories),
  ]);
};

if (NODE_ENV === 'development') {
  try {
    buildFakeData();
    console.log('Fake data has been built');
  } catch (err) {
    console.log(err);
  }
}

export default buildFakeData;

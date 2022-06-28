import {
  InferAttributes, InferCreationAttributes, Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/connections';

interface IUploadsCategoriesModel extends Model<
  InferAttributes<IUploadsCategoriesModel>, InferCreationAttributes<IUploadsCategoriesModel>
> {
  categoryId?: number;
  uploadId?: number;
}

const UploadsCategoriesModel = sequelize.define<IUploadsCategoriesModel>(
  'uploadsCategories',
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    uploadId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default UploadsCategoriesModel;

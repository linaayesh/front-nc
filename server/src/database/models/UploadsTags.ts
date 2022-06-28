import {
  DataTypes,
  InferAttributes, InferCreationAttributes, Model,
} from 'sequelize';
import sequelize from '../config/connections';

interface IUploadsTagsModel extends Model<
  InferAttributes<IUploadsTagsModel>, InferCreationAttributes<IUploadsTagsModel>
> {
  tagId?: number;
  uploadId?: number;
}

const UploadsTagsModel = sequelize.define<IUploadsTagsModel>(
  'uploadsTags',
  {
    tagId: {
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

export default UploadsTagsModel;

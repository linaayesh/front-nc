import {
  InferAttributes, InferCreationAttributes, Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/connections';

interface ITagsModel extends Model<
  InferAttributes<ITagsModel>, InferCreationAttributes<ITagsModel>
> {
  id: number;
  name: string;
}

const TagsModel = sequelize.define<ITagsModel>(
  'tags',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default TagsModel;

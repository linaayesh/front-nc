import {
  InferAttributes, InferCreationAttributes, Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/connections';

interface ICategoriesModel extends Model<
  InferAttributes<ICategoriesModel>, InferCreationAttributes<ICategoriesModel>
> {
  id: number;
  name: string;
}

const CategoriesModel = sequelize.define<ICategoriesModel>(
  'categories',
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

export default CategoriesModel;

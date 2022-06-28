import {
  InferAttributes, InferCreationAttributes, Model, DataTypes,
} from 'sequelize';
import sequelize from '../config/connections';

interface IRolesModel extends Model<
  InferAttributes<IRolesModel>, InferCreationAttributes<IRolesModel>
> {
  id?: number;
  name: string
}

const RolesModel = sequelize.define<IRolesModel>(
  'roles',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
    },
  },
  { timestamps: false },
);

export default RolesModel;

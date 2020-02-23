import Sequelize, { Model } from 'sequelize';

class DeliveryProblem extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    // associa id da encomenda
    this.belongsTo(models.Package, {
      foreignKey: 'delivery_id',
      as: 'delivery',
    });
  }
}

export default DeliveryProblem;

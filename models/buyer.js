const Buyer = (sequelize, DataTypes) => {
  const Buyer = sequelize.define("Buyer", {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    confirm: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
  },

  {
    tableName: 'buyers',
  });

  Buyer.associate = (models) => {
    Buyer.hasMany(models.Order,
      { foreignKey: 'buyerId', as: 'order'})
  };
  return Buyer;
};
  
module.exports = Buyer;
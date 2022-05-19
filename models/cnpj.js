const Cnpj = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define("Cnpj", {
    cnpj: DataTypes.INTEGER,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'cnpjs',
  });

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Order,
      { foreignKey: 'cnpjId', as: 'orders' });
  };
  
  return Cnpj;
};
  
module.exports = Cnpj;
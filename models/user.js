const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked:DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cashforceAdm: DataTypes.BOOLEAN,
  },
  {
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Order,
      { foreignKey: 'userId', as: 'order' })
  };
  return User;
};
  
module.exports = User;
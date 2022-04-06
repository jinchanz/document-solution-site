'use strict';

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING,
    password: STRING,
    gender: BOOLEAN,
    phone: STRING,
    introduction: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  return User;
};

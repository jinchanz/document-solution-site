'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const lowcodeBlock = app.model.define('lowcode-block', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING,
    title: INTEGER,
    screenshot: STRING,
    schema: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'lowcode-block',
  });
  return lowcodeBlock;
};

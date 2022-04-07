'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const lowcodeFile = app.model.define('lowcode-file', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING,
    parent_id: INTEGER,
    type: INTEGER,
    icon: STRING,
    locator: STRING,
    creator: STRING,
    schema_url: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'lowcode-file',
  });
  return lowcodeFile;
};

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("Tuna", "tuna", "fish", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "comments",
    timestamps: false,
  }
);

(async () => {
  try {
    await Comment.sync({
      alter: false,
      force: false,
    });
    const comments = await Comment.findAll({
      where: {
        body: "Ерунда",
      },
    });
  } catch (error) {}
})();
console.log(comments);

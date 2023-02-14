const { Schema, model } = require("mongoose");

const User = model(
  "User",
  new Schema(
    {
      userName: {
        type: String,
      },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
    },
    {
      timestamps: false,
      versionKey: false,
    }
  )
)

module.exports = User;

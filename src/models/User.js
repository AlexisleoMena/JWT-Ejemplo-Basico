const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs")
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
      methods: {
        encryptPassword: async (password) => {
          const salt = await bcrypt.genSalt(10);
          return bcrypt.hash(password, salt)
        },
        validatePassword: function (password) {
          return bcrypt.compare(password, this.password)
        }
      },
      timestamps: false,
      versionKey: false,
    }
  )
)

module.exports = User;

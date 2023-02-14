require("dotenv").config();
const app = require("./app");
require("./db.js")

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
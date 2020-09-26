const { model } = require("mongoose")

console.log(process.env.NODE_ENV)
// key.js
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod")
} else {
  module.exports = require("./dev")
}

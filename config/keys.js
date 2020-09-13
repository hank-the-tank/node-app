const { model } = require("mongoose")

// key.js
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod")
} else {
  module.exports = require("./dev")
}
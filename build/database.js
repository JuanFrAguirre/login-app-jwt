"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var uri = "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@cluster0.sqehuyi.mongodb.net/").concat(process.env.DB_DATABASE, "?retryWrites=true&w=majority");
_mongoose["default"].connect(uri).then(function (db) {
  return console.log('DB connected successfully\n\n---\n');
})["catch"](function (err) {
  console.error(err);
  console.log('DB connection error');
});
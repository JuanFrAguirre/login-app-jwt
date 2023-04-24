"use strict";

var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _database = _interopRequireDefault(require("./database"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _admin = _interopRequireDefault(require("./routes/admin.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.clear();
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])('*'));
app.use('/api/auth', _auth["default"]);
app.use('/api/admin', _admin["default"]);
app.listen(PORT, function () {
  console.log("\n---\n\nServer running on port ".concat(PORT));
});
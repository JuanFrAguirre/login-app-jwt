"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 8,
    max: 255
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  role: {
    type: String,
    "default": 'user'
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)('User', userSchema);
exports["default"] = _default;
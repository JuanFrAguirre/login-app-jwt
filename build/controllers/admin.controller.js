"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdmin = void 0;
var getAdmin = function getAdmin(req, res) {
  res.json({
    error: null,
    data: {
      title: 'Protected title',
      user: req.user
    }
  });
};
exports.getAdmin = getAdmin;
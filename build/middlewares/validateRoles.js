"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateModerator = exports.validateAdmin = void 0;
var validateRole = function validateRole(req, res, next, roles) {
  if (roles.includes(req.user.role)) {
    next();
    return;
  }
  return res.status(401).json('Insufficient permissions');
};
var validateAdmin = function validateAdmin(req, res, next) {
  validateRole(req, res, next, ['admin']);
};
exports.validateAdmin = validateAdmin;
var validateModerator = function validateModerator(req, res, next) {
  validateRole(req, res, next, ['moderator', 'admin']);
};
exports.validateModerator = validateModerator;
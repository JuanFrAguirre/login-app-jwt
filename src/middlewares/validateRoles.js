const validateRole = (req, res, next, roles) => {
  if (roles.includes(req.user.role)) {
    next()
    return
  }
  return res.status(401).json('Insufficient permissions')
}

export const validateAdmin = (req, res, next) => {
  validateRole(req, res, next, ['admin'])
}

export const validateModerator = (req, res, next) => {
  validateRole(req, res, next, ['moderator', 'admin'])
}

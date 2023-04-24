import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['auth-token']
    if (!token)
      return res.status(403).json({ error: true, message: 'No token provided' })

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded

    next()
  } catch (error) {
    return res.status(401).json({ error: true, message: 'Unauthorized' })
  }
}

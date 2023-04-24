import { Router } from 'express'
import * as authController from '../controllers/auth.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { validateAdmin } from '../middlewares/validateRoles.js'
const router = Router()

router
  .post('/register', [verifyToken, validateAdmin], authController.register)
  .post('/login', authController.login)

export default router

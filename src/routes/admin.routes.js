import { Router } from 'express'
import * as adminController from '../controllers/admin.controller'
import { verifyToken, validateRoles } from '../middlewares'
const router = Router()

router.get(
  '/',
  [verifyToken, validateRoles.validateAdmin],
  adminController.getAdmin,
)

export default router

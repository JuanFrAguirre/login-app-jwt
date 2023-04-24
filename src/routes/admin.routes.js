import { Router } from 'express'
import * as adminController from '../controllers/admin.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { validateAdmin } from '../middlewares/validateRoles.js'
const router = Router()

router.get('/', [verifyToken, validateAdmin], adminController.getAdmin)

export default router

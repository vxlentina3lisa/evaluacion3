import { Router } from 'express'
import * as gatosController from '../controllers/gatos.controller.js'
import { authToken } from '../middlewares/gatos.middleware.js'

const router = Router()

router.get('/gatos', gatosController.findAll)
router.get('/gatos/:id', gatosController.findById)
router.post('/gatos', authToken, gatosController.create)
router.put('/gatos/:id', authToken, gatosController.updateById)
router.delete('/gatos/:id', authToken, gatosController.deleteById)

export default router

import {Router} from 'express'
import ClassController from "../controllers/ClassController";

const router = Router()

router.post('/classes', ClassController.create)
router.get('/classes')
router.get('/classes/:id')
router.delete('/classes/:id')
router.put('/classes')

export default router;

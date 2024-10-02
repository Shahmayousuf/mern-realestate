import express from 'express'
import { test, updateUser } from '../controllers/user.contoller.js';
  
const router=express.Router();

router.get('/test',test)
router.post('/update/:',updateUser)
export default router
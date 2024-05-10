import express from 'express';
import { userhome } from '../controllers/usercontroller.js';

const router = express.Router();

router.get('/', userhome);



export default router
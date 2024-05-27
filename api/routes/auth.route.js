import express from 'express';
// import signup from '../controllers/auth.controller.js';
import bcryptjs from "bcryptjs";
import user from '../models/user.model.js';
import { signin, signup } from '../controllers/auth.controller.js';
const router = express.Router();
const cors = require('cors');
router.use
router.post("/signup", signup);
router.post("/signin", signin);
export default router; 
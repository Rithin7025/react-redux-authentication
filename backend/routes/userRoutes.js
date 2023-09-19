import express from 'express';

const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js"
//since we're using es6 ,when we use import syntax to import our own js, we've to mention the extension
import {protect} from '../middleware/authMiddleware.js'

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

//instead of writing post and get for the same route 

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile); //post create new / put update existing 



  

export default router;
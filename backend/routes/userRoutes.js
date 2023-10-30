import express from 'express';
import multer from 'multer'
import path from 'path'

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


const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
      cb(null,'backend/public/Images')
  },
  filename: (req,file,cb) => {
      cb(null,file.fieldname + "_" +Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage:storage
})

//instead of writing post and get for the same route 

router.route('/profile').get(protect, getUserProfile).put(protect,upload.single('file'), updateUserProfile); 
//post create new / put update existing 



  

export default router;
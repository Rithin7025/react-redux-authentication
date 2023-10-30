import  express from "express";

const router = express.Router();
import { authAdmin,logoutAdmin,userData,deleteUser,blockUser,unblockUser } from "../controller/adminController.js";


router.post('/admin',authAdmin)
router.post('/logout',logoutAdmin)
router.get('/',userData)
router.delete('/:id', deleteUser);
router.put('/block/:id', blockUser);
router.put('/unblock/:id', unblockUser);




export default router;
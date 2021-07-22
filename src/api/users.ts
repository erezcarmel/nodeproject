import { UsersController } from "../controllers";
import { Router } from "express";

const router = Router();

router.get('/:id', UsersController.get);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.remove);

export default router;
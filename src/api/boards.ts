import { BoardsController } from "../controllers";
import { Router } from "express";

const router = Router();

router.get('/:id', BoardsController.get);
router.post('/', BoardsController.create);
router.put('/:id', BoardsController.update);
router.delete('/:id', BoardsController.remove);

export default router;
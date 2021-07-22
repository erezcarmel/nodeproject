import { CardsController } from "../controllers";
import { Router } from "express";

const router = Router();

router.get('/:id', CardsController.get);
router.post('/', CardsController.create);
router.put('/:id', CardsController.update);
router.delete('/:id', CardsController.remove);

export default router;
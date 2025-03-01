import { Router } from "express";
import { SetControll } from "../controllers/SetController";
import { CardControll } from "../controllers/CardController";

const router = Router();

router.get("/",SetControll.ObtenerCartas)
router.get("/:id/cards",CardControll.ObtenerCartasEdicion);
export default router;
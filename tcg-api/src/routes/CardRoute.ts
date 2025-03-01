import { Router } from "express";
import { CardControll } from "../controllers/CardController";

const router = Router();

router.get("/",CardControll.ObtenerCartas);
router.get("/:id",CardControll.ObtenerCartaPorId);


export default router;
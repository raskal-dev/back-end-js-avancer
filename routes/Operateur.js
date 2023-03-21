import express from "express";
import { getOperateurs, addOperateur, updateOperateur, deleteOperateur } from "../controllers/OperateurController.js";

const router = express.Router();

router.get("/operateurs", getOperateurs);
router.post("/operateurs", addOperateur);
router.put("/operateurs/update/:id", updateOperateur);
router.delete("/operateurs/delete/:id", deleteOperateur);

export default router;
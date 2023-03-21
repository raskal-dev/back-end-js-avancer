import express from "express";
import { addAutorisation, deleteAutorisation, getAutorisations, updateAutorisation } from "../controllers/AutorisationController.js";

const router = express.Router();

router.get("/autorisation", getAutorisations);
router.post("/autorisation", addAutorisation);
router.put("/autorisation/update/:id", updateAutorisation);
router.delete("/autorisation/delete/:id", deleteAutorisation);

export default router;
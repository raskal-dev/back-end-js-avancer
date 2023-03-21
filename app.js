import express from "express";
import operateurRoutes from "./routes/Operateur.js";
import autRoutes from "./routes/Autorisation.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", operateurRoutes, autRoutes);

app.listen(3001, () => {
    console.log("Server is running")
});
import { db } from "../db/db.js";


export const getOperateurs = (_, res) => {
    const q = "SELECT * FROM operateurs";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addOperateur = (req, res) => {
    const q = "INSERT INTO operateurs(`nom`, `type`, `permis`, `num_recepice`, `nif`, `stat`, `titre_terrain`, `etat`) VALUES(?)";

    const values = [
        req.body.nom,
        req.body.type,
        req.body.permis,
        req.body.num_recepice,
        req.body.nif,
        req.body.stat,
        req.body.titre_terrain,
        req.body.etat,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Opérateur a été ajouter avec succès.");
    });
};

export const updateOperateur = (req, res) => {
    const q = "UPDATE operateurs SET `nom` = ?, `type` = ?, `permis` = ?, `num_recepice` = ?, `nif` = ?, `stat` = ?, `titre_terrain` = ?, `etat` = ? WHERE `id_op` = ?";

    const values = [
        req.body.nom,
        req.body.type,
        req.body.permis,
        req.body.num_recepice,
        req.body.nif,
        req.body.stat,
        req.body.titre_terrain,
        req.body.etat,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Opérateur a été mettre à jour avec succès.");
    });
};

export const deleteOperateur = (req, res) => {
    const q = "DELETE FROM operateurs WHERE `id_op` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Opérateur a été supprimer avec succès.");
    });
};

import { db } from "../db/db.js";


export const getAutorisations = (_, res) => {
    const q = "SELECT autorisation.*, operateurs.nom FROM autorisation, operateurs WHERE autorisation.id_op=operateurs.id_op";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addAutorisation = (req, res) => {
    const q = "INSERT INTO autorisation(`ref_autorisation`, `date_du`, `date_au`, `lieu_depart`, `lieu_arrive`, `id_op`) VALUES(?)";

    const values = [
        req.body.ref_autorisation,
        req.body.date_du,
        req.body.date_au,
        req.body.lieu_depart,
        req.body.lieu_arrive,
        req.body.id_op,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Autorisation a été ajouter avec succès.");
    });
};

export const updateAutorisation = (req, res) => {
    const q = "UPDATE autorisation SET `ref_autorisation` = ?, `date_du` = ?, `date_au` = ?, `lieu_depart` = ?, `lieu_arrive` = ?, `id_op` = ? WHERE `id_aut` = ?";

    const values = [
        req.body.ref_autorisation,
        req.body.date_du,
        req.body.date_au,
        req.body.lieu_depart,
        req.body.lieu_arrive,
        req.body.id_op,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Autorisation a été mettre à jour avec succès.");
    });
};

export const deleteAutorisation = (req, res) => {
    const q = "DELETE FROM autorisation WHERE `id_aut` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Autorisation a été supprimer avec succès.");
    });
};

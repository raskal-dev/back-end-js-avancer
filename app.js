const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
    {
        user: "root",
        host:"localhost",
        password: "",
        database: "js_project ",
    }

);

app.post("/register", (req, res) => {
    const nom_user = req.body.nom_user;
    const prenom_user = req.body.prenom_user;
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;

    con.query("INSERT INTO users (nom_user, prenom_user, pseudo, email, password) VALUES (?,?,?,?,?)", [nom_user, prenom_user, pseudo, email, password],
        (err, result) => {
            if(result) {
                res.send(result);
            } else {
                res.send({message: "User a été enregister avec succès"})
            }
        }
    )
});

app.post("/login", (req, res) => {
    const pseudo = req.body.pseudo;
    const password = req.body.password;

    con.query("SELECT * FROM users WHERE pseudo = ? AND password = ?", [pseudo, password],
        (err, result) => {
            if(err) {
                req.setEncoding({err: err});
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({message: "Il y a une erreur sur pseudo ou password"})
                }
            }
        }
    )
});

app.listen(3001, () => {
    console.log("Server is running")
});
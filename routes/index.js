var express = require("express");
var router = express.Router();
const database = require("../database/functions");

router.get("/", async function (req, res) {
  try {
    const allClients = await database.getAll("users");

    return res.status(200).json(allClients);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async function (req, res) {
  const emailNewClient = req.body.email;
  const infosNewClient = req.body;

  try {
    const checkIfClientExists = await database.getOne("users", emailNewClient);

    if (checkIfClientExists) {
      return res.status(409).json({ Error: "Client already exists" });
    }

    await database.set("users", emailNewClient, infosNewClient);
    await database.set("opportunities", emailNewClient, {});

    const clientUpdated = await database.getOne("users", emailNewClient);

    return res.status(201).json(clientUpdated);
  } catch (err) {
    console.log(err);
  }
});

router.get("/users/:email", async function (req, res) {
  const email = req.params.email;
  try {
    const infoClient = await database.getOne("users", email);
    const opportunitiesClient = await database.getOne("opportunities", email);

    if (!infoClient) {
      return res.status(404).json({ Error: "Client not found!" });
    }

    return res.json({ infoClient, opportunitiesClient });
  } catch (err) {
    console.log(err);
  }
});

router.put("/users/:key", async function (req, res) {
  const key = req.params.key;
  const { agreedTerms, email, isActive, name, phone, revenue } = req.body;

  try {
    const checkIfClientExists = await database.getOne("users", key);

    if (!checkIfClientExists) {
      return res.status(409).json({ Error: "Client not exists" });
    }

    await database.update("users", key, {
      agreedTerms,
      email,
      isActive,
      name,
      phone,
      revenue,
    });

    return res.status(204).json({ Message: "Updated suscessfull" });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/users/:email", async function (req, res) {
  const email = req.params.email;

  try {
    const checkIfClientExists = await database.getOne("users", email);

    if (!checkIfClientExists) {
      return res.status(409).json({ Error: "Client not found" });
    }

    await database.delete("users", email);
    await database.delete("opportunities", email);

    return res.status(204).json({ Message: "Client deleted suscessfull" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

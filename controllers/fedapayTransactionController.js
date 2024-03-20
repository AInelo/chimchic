// const express = require("express");
const bodyParser = require('body-parser');
const { FedaPay, Transaction } = require("fedapay");

FedaPay.setApiKey("sk_live_CaZH-pW0S9lqhGldYsaQf0C2");

FedaPay.setEnvironment("live");

const createFedaTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      description: "Description de la transaction",
      amount: 2000,
      currency: {
        iso: "XOF",
      },
      callback_url: "https://votresite.com/callback",
      customer: {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        phone_number: {
          number: "96769716",
          country: "BJ",
        },
      },
    });

    // Renvoi des données de la transaction créer
    res.json(transaction);
  } catch (error) {
    console.error("Erreur dlor de la création de la transaction : ", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la transaction" });
  }
};

const generateTokenTransaction = async (req, res) => {
  try {
    const { transactionId } = req.body;

    const transaction = await Transaction.retrieve(transactionId);
    const token = await transaction.generateToken();

    // Renvoi du Token
    res.json({ token: token.url });
  } catch (error) {
    // Gérer les erreurs
    console.error("Erreur lors de la génération du Token : ", error);
    res.status(500).json({ error: "Erreur lors de la génération du token" });
  }
};

const callback = async (req, res) => {
  const { id, status } = req.query;
  // Traiter les données de retour de la transaction
  console.log('ID de la transaction :', id);
  console.log('Statut de la transaction :', status);
  // Rediriger l'utilisateur vers une page en fonction du statut de la transaction
  res.redirect('/');
};

module.exports = {
  createFedaTransaction,
  generateTokenTransaction,
  callback,
};

// const express = require("express");
const bodyParser = require('body-parser');
const { FedaPay, Transaction } = require("fedapay");
const asyncWrapper = require('../middleware/async');
const { response } = require('express');

FedaPay.setApiKey("sk_live_CaZH-pW0S9lqhGldYsaQf0C2");

FedaPay.setEnvironment("live");


const createFedaTransaction = asyncWrapper(async (req, res) => {
  try {
    console.log(req.body)
    //const { clientFirstname, clientLastname, clientNumber } = req.body;

    const { firstname, lastname, number } = req.body;
    const transaction = await Transaction.create({
      description: "Les inscritptions de Formation ChimCHIC",
      amount: 5000,
      currency: {
        iso: "XOF",
      },
      callback_url: "https://chat.whatsapp.com/CZG0kokqkja8ZaDVtlPOQL",
      customer: {
        firstname: firstname,
        lastname: lastname,
        email: "llal@gmail.com",
        phone_number: {
          number: number,
          country: "BJ",
        },
      },
    });

    // Renvoi des données de la transaction créer
    res.json(transaction);
  //response = res.json(transaction);
    console.log(response);
  } catch (error) {
    console.error("Erreur lors de la création de la transaction : ", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la transaction" });
  }
});


const createFedaTransaction0 = asyncWrapper(async (req, res) => {
  try {
    // Utilisation de la déstructuration pour obtenir les données de req.body
    console.log(req.body)
    // const { clientFirstname, clientLastname, clientNumber } = req.body;
    const { firstname, lastname, number } = req.body;

    // Création de la transaction avec les données fournies
    const transaction = await Transaction.create({
      description: "Les inscriptions de Formation ChimCHIC",
      amount: 5000,
      currency: {
        iso: "XOF",
      },
      callback_url: "https://chat.whatsapp.com/CZG0kokqkja8ZaDVtlPOQL",
      customer: {
        firstname: firstname,
        lastname: lastname,
        email: "llal@gmail.com",
        phone_number: {
          number: number,
          country: "BJ",
        },
      },
    });

    // Renvoi des données de la transaction créée
    res.json(transaction);
  } catch (error) {
    console.error("Erreur lors de la création de la transaction : ", error);
    res.status(500).json({ error: "Erreur lors de la création de la transaction" });
  }
});




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


const createFedaTransaction4 = async (req, res) => {
  try {
    const { clientFirstname, clientLastname, clientNumber } = req.body;
    const transaction = await Transaction.create({
      description: "Les inscritptions de Formation ChimCHIC",
      amount: 5000,
      currency: {
        iso: "XOF",
      },
      callback_url: "https://chat.whatsapp.com/CZG0kokqkja8ZaDVtlPOQL",
      customer: {
        firstname: "clientFirstname",
        lastname: "clientLastname",
        email: "llal@gmail.com",
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

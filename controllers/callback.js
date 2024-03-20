const express = require("express");
const {FedaPay, Transaction} = require('fedapay');

FedaPay.setApiKey("sk_live_CaZH-pW0S9lqhGldYsaQf0C2");

FedaPay.setEnvironment('live');



const createFedaTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create({
            description: 'Description de la transaction',
            amount: 2000,
            currency: {
              iso: 'XOF'
            },
            callback_url: 'https://votresite.com/callback',
            customer: {
              firstname: 'John',
              lastname: 'Doe',
              email: 'john.doe@example.com',
              phone_number: {
                number: '97808080',
                country: 'BJ'
              }
            }
        })
    }
}
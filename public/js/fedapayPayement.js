// const {FedaPay, Transaction} = require('fedapay');

async function createTransaction () {
    const {FedaPay, Transaction} = require('fedapay');

    FedaPay.setApiKey('sk_live_CaZH-pW0S9lqhGldYsaQf0C2');

    FedaPay.setEnvironment('live');

    const transaction = await Transaction.create({
        descripition: "Frais de Formation CHIMCHIC",
        amount: 2000,
        callback_url: 'https://maplateforme.com/callback',
        currency: {
            iso: 'XOF'
        },
        customer: {
            firstname: "Lionel",
            lastname: "TOTON",
            email: "totonlionel@gmail.com",
            phone_number: {
                number: '96769716',
                country: 'BJ'
        }
    }


    })
}

btnPayement = document.getElementById("btnPayement")

btnPayement.addEventListener('click', async () => {
   await createTransaction();
});





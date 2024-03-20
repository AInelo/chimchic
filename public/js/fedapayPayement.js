btnPayment = document.getElementById("btnPayment");
BeforeClientFirstname = document.getElementById("clientFirstname");
BeforeClientLastname = document.getElementById("clientLastname");
BeforeClientNumber = document.getElementById("clientNumber");

clientFirstname = BeforeClientFirstname.value;
clientLastname = BeforeClientLastname.value;
clientNumber = BeforeClientNumber.value;





btnPayment.addEventListener("click", async (e) => {
    try {
        // Créer une transaction
        console.log(clientNumber);
        const transactionResponse = await axios.post("/payment/createtransaction", {
            firstname: clientFirstname,
            lastname: clientLastname,
            number: clientNumber
        });
        const transactionId = transactionResponse.data.id;

        // Générer le token pour la transaction créée
        const tokenResponse = await axios.post("/payment/generate-token", { transactionId });
        
        // Rediriger l'utilisateur vers le lien de paiement avec le token généré
        window.location.href = tokenResponse.data.token;
    } catch (error) {
        console.error("Erreur lors de la transaction :", error);
        // Gérer les erreurs
    }
});




// btnPayment.addEventListener("click", (e) => {
//     // Créer une transaction
//     axios.post("/createtransaction", {})
//         .then((response) => {
//             // Récupérer l'identifiant de la transaction créée
//             const transactionId = response.data.id;

//             // Générer le token pour la transaction créée
//             return axios.post("/generate-token", { transactionId });
//         })
//         .then((response) => {
//             // Rediriger l'utilisateur vers le lien de paiement avec le token généré
//             window.location.href = response.data.token;
//         })
//         .catch((error) => {
//             console.error("Erreur lors de la transaction :", error);
//             // Gérer les erreurs
//         });
// });




































// btnPayment.addEventListener("click", (e) => {
//   // Supposons que vous utilisez fetch pour effectuer des requêtes HTTP, mais vous pouvez utiliser axios ou tout autre moyen que vous préférez

//   // Créer une transaction
// fetch("/createtransaction", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     },
//      // Les données de la transaction, si nécessaire
//     body: JSON.stringify({ }),
// })
//     .then((response) => response.json())
//     .then((transaction) => {
//       // Récupérer l'identifiant de la transaction créée
//     const transactionId = transaction.id;
//       // Générer le token pour la transaction créée
//     fetch("/generate-token", {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ transactionId }),
//     })
//         .then((response) => response.json())
//         .then((token) => {
//           // Rediriger l'utilisateur vers le lien de paiement avec le token généré
//         window.location.href = token.token;
//         })
//         .catch((error) => {
//         console.error("Erreur lors de la génération du token :", error);
//           // Gérer les erreurs
//         });
//     })
//     .catch((error) => {
//     console.error("Erreur lors de la création de la transaction :", error);
//       // Gérer les erreurs
//     });
// });

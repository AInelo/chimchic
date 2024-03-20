btnPayment = document.getElementById("btnPayment");

btnPayment.addEventListener("click", (e) => {
    
  // Supposons que vous utilisez fetch pour effectuer des requêtes HTTP, mais vous pouvez utiliser axios ou tout autre moyen que vous préférez

  // Créer une transaction
fetch("/createtransaction", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Les données de la transaction, si nécessaire
    }),
})
    .then((response) => response.json())
    .then((transaction) => {
      // Récupérer l'identifiant de la transaction créée
    const transactionId = transaction.id;

      // Générer le token pour la transaction créée
    fetch("/generate-token", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionId }),
    })
        .then((response) => response.json())
        .then((token) => {
          // Rediriger l'utilisateur vers le lien de paiement avec le token généré
        window.location.href = token.token;
        })
        .catch((error) => {
        console.error("Erreur lors de la génération du token :", error);
          // Gérer les erreurs
        });
    })
    .catch((error) => {
    console.error("Erreur lors de la création de la transaction :", error);
      // Gérer les erreurs
    });
});

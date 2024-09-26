// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: Un moyen de stocker une info pour la réutiliser ou la manipuler. Comme une boîte dans laquelle se trouve quelque chose.

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Julia";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = "21";

// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: input
// - Classe(s): card-input
// - Attribut(s): type="text", name="password", placeholder="Créer votre mot de passe", id="password-input", class="card-input"

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: Une class est réutilisable pour plusieurs éléments alors que l'id est un attribut plus spécifique (un seul élément). L'id permet de cibler mieux un élément.

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: Elle sert à sélectionner un élément du DOM (la base html du site internet).

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
const pElement = document.querySelector("#card-1 .card-content");
// 7.1 Créez une variable appelée "cardContent".
let cardContent;
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
cardContent = pElement;

// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
cardContent.classList.add("highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
const inputElement = document.querySelector("#password-input");

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: une fonction qui attend qu'un événement se produise pour qu'il puisse produire l'action.

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
const button = document.querySelector("#card-btn");
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
button.addEventListener("click", function());
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
button.addEventListener("click", function(){
  
});

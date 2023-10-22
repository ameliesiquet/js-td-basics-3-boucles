/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/* EXEMPLE 5 : Boucler à l'envers
- Affichez dans la console : "3, 2, 1, partez !"
*/

/*
let i=10, j=0;
for (for i=10, i>0; i--, j++){
    console.log(i, j)


 let j=10;
while (j>0){
    console.log(j);
    j--
}
}*/

let result="";
for(let i=3; i>0; i--){
    result += `${i}, `;
}
result += "partez !";
console.log(result)

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//  Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
//  Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. (modificato)


var bici=[
    {
     nome: 'Tizio',
     peso: 10},

    {
     nome: 'Pippo',
     peso: 2,
    },

    {
        nome: 'Aldo',
        peso:5
    }
];

var pesoMinore;
var peso =10;

for (var x=0; x< bici.length; x++){

    var thisWeight = bici[x].peso;
    if (thisWeight < peso){
        pesoMinore=bici[x];
        peso = thisWeight;
    }
};
console.log(pesoMinore);


// let pesoMinore;
// let pesoM =10;

// for (let x=0; x< bici.length; x++){

//     var thisWeight = bici[x].peso;
//     if (thisWeight < pesoM){
//         pesoMinore=bici[x];
//         peso = thisWeight;
//     }
// };

// const {nome, peso}=pesoMinore;
// console.log(`La bici con il peso miniore è ${nome} ${peso}`);




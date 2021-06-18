
//Creare un array di oggetti di squadre di calcio.

let teamCalcio =[
    {nome: 'Barcelona', punteggio: 0, fallo: 0},
    {nome: 'Roma', punteggio:0, fallo:0}
]
console.log("🚀 ~ file: script.js ~ line 6 ~ teamCalcio", teamCalcio);



//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function getRandom(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let result1 = getRandom(0, 50);
let result2 = getRandom(0, 20)
console.log(result1);
console.log(result2);



for (let x=0; x < teamCalcio.length; x++){
    teamCalcio[x].fallo = result1;
    teamCalcio[x].punteggio = result2;
}


// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.

let array=[{}];

for (let x=0; x <teamCalcio.length; x++){
    const {nome, fallo}=teamCalcio[x];
    array.push({
        nome,
        fallo
    })
};

console.log(array)






//Creare un array di oggetti di squadre di calcio.

let teamCalcio =[
    {nome: 'Barcelona', punteggio: 0, fallo: 0},
    {nome: 'Roma', punteggio:0, fallo:0},
    {nome: 'Real-Madrid', punteggio:0, fallo:0}
]
console.log("🚀 ~ file: script.js ~ line 6 ~ teamCalcio", teamCalcio);



//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function getRandom(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min);
  };



for (let x=0; x < teamCalcio.length; x++){
    teamCalcio[x].fallo = getRandom(1,20);  
    teamCalcio[x].punteggio = getRandom(1,30);  
};

var falloResult=0;
var falliSubitiPiù;

for (let x=0; x<teamCalcio.length; x++){

    const {fallo}=teamCalcio[x];


    if (fallo > falloResult){
        falliSubitiPiù=teamCalcio[x];
        falloResult = fallo;
    };

};

console.log("🚀 ~ file: script.js ~ line 49 ~ falliSubitiPiù;", falliSubitiPiù);

// Stampare in html (in forma tabellare!!! :allegria::allegria:) i dati relativi alle squadre 
// evidenziando in giallo la riga corrispondente alla squadra con più falli subiti.

let tableHtml = document.querySelector('.table-container');

for (let i=0; i<teamCalcio.length; i++){

    let {nome, punteggio,fallo}=teamCalcio[i];

    tableHtml.innerHTML+=`
    <ul>
       <li>${nome}</li>
       <li>${punteggio}</li>
       <li>${fallo}</li>
    </ul>
    `
    if(teamCalcio[i]===falliSubitiPiù){
        document.getElementsByTagName('ul')[i+1].setAttribute('style', "background-color: yellow;")
    }
}

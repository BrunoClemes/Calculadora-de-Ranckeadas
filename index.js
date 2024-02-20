
let mediaRankeadas = calculaRankeadas(200 ,5);

function calculaRankeadas(victories, defeats ){
    return victories - defeats; 
}

  
    if ( mediaRankeadas < 10 ) {
    Rankeadas = "Ferro"
} else if (mediaRankeadas >= 11 && mediaRankeadas <= 20) {
    Rankeadas = "Bronze"
} else if (mediaRankeadas >= 21 && mediaRankeadas <=  50) {
    Rankeadas = "Prata"
}else if (mediaRankeadas >= 51 && mediaRankeadas <= 80) {
    Rankeadas = "Ouro"
}else if (mediaRankeadas >= 81 && mediaRankeadas <= 90) {
    Rankeadas = "Diamante"
}else if (mediaRankeadas >= 91 && mediaRankeadas <= 100) {
    Rankeadas = " Lendário"
}else if (mediaRankeadas >  101) {
    Rankeadas = "Imortal"
}

console.log(`O Herói de saldo de vitórias ${mediaRankeadas} , está no nivel de ${Rankeadas} `);
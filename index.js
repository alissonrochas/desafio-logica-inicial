let nivelDoHeroi;

let nomeDoHeroi = "Alisson";
let xpDoHeroi = 5000;

if (xpDoHeroi <= 1000){
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 3000){
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 6000){
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000){
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000){
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000){
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000){
    nivelDoHeroi = "Imortal";
} else{
    nivelDoHeroi = "Radiante";
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi);


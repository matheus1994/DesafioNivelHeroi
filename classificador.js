
const nome = parseString(gets());
const xp = parseInt(gets());

if(xp < 1000){
    print("O Herói de nome " + nome + " está no nível de ferro");
}

else if(xp >=1001 && xp <=2000){
    print("O Herói de nome " + nome + " está no nível de bronze");
}

else if(xp >=2001 && xp <=5000){
    print("O Herói de nome " + nome + " está no nível de prata");
}

else if(xp >=5001 && xp <=7000){
    print("O Herói de nome " + nome + " está no nível de ouro");
}

else if(xp >=7001 && xp <=8000){
    print("O Herói de nome " + nome + " está no nível de platina");
}

else if(xp >=8001 && xp <=9000){
    print("O Herói de nome " + nome + " está no nível de ascendente");
}

else if(xp >=9001 && xp <=10000){
    print("O Herói de nome " + nome + " está no nível de imortal");
}

else if(xp >=10001){
    print("O Herói de nome " + nome + " está no nível de radiante");
}
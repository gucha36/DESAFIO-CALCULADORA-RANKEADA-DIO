function saldoVitorias(a, b) {
    let saldo = a - b,
        nivel = saldo <= 10 ? "Ferro" :
                saldo >11 && saldo <= 20 ? "Bronze" :
                saldo >21 && saldo <= 50 ? "Prata" :
                saldo >51 && saldo <= 80 ? "Ouro" :
                saldo >81 && saldo <= 90 ? "Diamante" :
                saldo >91 && saldo <= 100 ? "Lendário" : "Imortal";
    return { saldo, nivel };
}

let { saldo, nivel } = saldoVitorias(300, 7);
console.log(`O Herói tem um saldo de ${saldo} vitórias e está no nível ${nivel}`);

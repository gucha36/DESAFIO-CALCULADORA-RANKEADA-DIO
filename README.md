## Descrição do Desafio

Este repositório contém a solução para o **Desafio 2️⃣ - Calculadora de Partidas Rankeadas**. O objetivo deste desafio é criar uma função que calcula o saldo de vitórias e derrotas de um jogador em partidas rankeadas, determinando o nível do jogador com base em seu desempenho.

A função deve receber dois parâmetros: o número de vitórias e o número de derrotas, calculando o saldo a partir dessa diferença. Com base no saldo, o jogador será classificado em diferentes níveis, variando de **Ferro** a **Imortal**, de acordo com a quantidade de vitórias.

### Conceitos Utilizados:
- Declaração e uso de variáveis,
- Operadores aritméticos,
- Estruturas de decisão (`if-else`),
- Laços de repetição (quando aplicável),
- Criação de funções.

## Regras do Desafio

O jogador será classificado nos seguintes níveis:

- **Ferro**: saldo menor do que 10 vitórias,
- **Bronze**: saldo entre 11 e 20 vitórias,
- **Prata**: saldo entre 21 e 50 vitórias,
- **Ouro**: saldo entre 51 e 80 vitórias,
- **Diamante**: saldo entre 81 e 90 vitórias,
- **Lendário**: saldo entre 91 e 100 vitórias,
- **Imortal**: saldo superior a 101 vitórias.

## Exemplo de Saída

A função deve retornar uma mensagem como a seguinte:

`O Herói tem um saldo de 15 vitórias e está no nível Bronze.`


## Como Testar o Código

1. Clone este repositório ou baixe o código.
2. Abra o arquivo em seu editor de código preferido (por exemplo, Visual Studio Code).
3. Execute o código em um ambiente de execução JavaScript, como o console do navegador ou o Node.js.
4. Modifique os valores de vitórias e derrotas na função para testar diferentes cenários. Exemplo:

```javascript
let resultado = saldoVitorias(30, 10);
console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível " + nivel);




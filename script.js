let idade = Number(prompt("Digite sua idade"));
let renda = Number(prompt("Digite sua renda"));
let valor = Number(prompt("Digite o valor do empréstimo"));

if(idade >= 21 && idade <= 55 && renda >= 1000);{
    console.log("pode prosseguir o emprestimo");
}
else if(valor <= 15*renda);{
    renda = renda * 15;
}
else if(valor >= 500);{
    console.log("emprestimo aprovado para o proximo passo");
}
else{
    console.log("emprestimo reprovado");
}


console.log("Digite quantas vezes será a parcela do empréstimo 3X até 24X");
 for (i >3; i <= 24; i++){
     console.log("parcela aceitável");
 }

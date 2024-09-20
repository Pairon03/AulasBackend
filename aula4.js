 // Atividade 1 
    console.log("Atividade 1");
    
    const frase = "O PROFESSOR CHEGARÁ MAIS CEDO";
    console.log(frase); 
    frasem = frase.toLowerCase()
    console.log(frasem);
    console.log(" ");

 // Atividade 2
    console.log("Atividade 2");

    num1 = null;
    num2 = undefined;
    console.log(num1);
    console.log(num2);
    console.log(" ");

 // Atividade 3
    console.log("Atividade 3");

    let numero = 42; 
    let texto = "Olá, mundo!"; 
    let booleano = true; 

    let combinacao = `Número: ${numero}, Texto: ${texto}, Booleano: ${booleano}`;

    console.log(combinacao);

    console.log(" ");

 // Atividade 4
    console.log("Atividade 4");   

    let num = 100;
    let text = "200";

    let numeroParaString = num.toString();
    let stringParaNumero = Number(text);

    console.log(typeof numeroParaString); 
    console.log(typeof stringParaNumero); 
    console.log(" ");

 // Atividade 5
    console.log("Atividade 5");
    
    const fraselow = "a água acabou!";
    console.log(fraselow); 
    fraseupper = frase.toUpperCase()
    console.log(fraseupper);
    console.log(" ");

 
 // Atividade 6
    console.log("Atividade 6");
    
    let saldo = 1000; 
    let deposito = 200; 
    let saque = 150; 
    
    let operacao = saldo + deposito - saque;
    
    console.log(`Saldo final: ${operacao}`);
    console.log(" ");

 // Atividade 7
    console.log("Atividade 7");

    let numeroo = 7;

    let resultado = (numeroo % 2 === 0) ? "Par" : "Ímpar";

    console.log(`O número ${numeroo} é ${resultado}`);
    console.log(" ");

 // Atividade 8
    console.log("Atividade 8");
 
    let usuarioLogado = true;
    let usuarioAdmin = true;

    let podeAcessar = usuarioLogado && usuarioAdmin;

    console.log(`O usuário pode acessar a funcionalidade: ${podeAcessar}`);
    console.log(" ");

 // Atividade 9
    console.log("Atividade 9");

    let condicao1 = true;
    let condicao2 = false;

    let res = condicao1 || condicao2;

    console.log(`Pelo menos uma condição é verdadeira: ${res}`);

    console.log(" ");

  // Atividade 9
    console.log("Atividade 9");
 
    let condicao1 = true;
    let condicao2 = false;
 
    let res = condicao1 || condicao2;
 
    console.log(`Pelo menos uma condição é verdadeira: ${res}`);
 
    console.log(" ");
 
 // Atividade 10
    console.log("Atividade 10");
 
    let idadeMinima = 18;
    let idadeUsuario = 20;
 
 
    if (idadeUsuario >= idadeMinima) {
        console.log("O usuário pode comprar o ingresso.");
    } else {
        console.log("O usuário não tem idade suficiente para comprar o ingresso.");
    }
    console.log(" ");
 
 // Atividade 11
     console.log("Atividade 11");
    function saudar(nome) {
        return `Olá, ${nome}! Seja bem-vindo(a)!`;
    }
 
    let saudacao = saudar("Maria");
    console.log(saudacao);
    console.log(" ");
   
 // Atividade 12
     console.log("Atividade 12");
   
    function verificarMaioridade(idade) {
        return idade >= 18 ? "Maior de idade" : "Menor de idade";
    }
 
    let resultado = verificarMaioridade(20);
    console.log(resultado);
 
     console.log(" ");
 
 // Atividade 13
    console.log("Atividade 13");
    const palavra = function (palavra){
    if (palavra.split("").reduce((acc, char) => char + acc, "") === palavra){
        return `É um palíndromo`;
    } else {
        return `Não é um palíndromo`;
        }
    }
    console.log (palavra('natan'));

     console.log(" ");
 
// Atividade 14
    console.log("Atividade 14");
    const numeros = function (n1,n2,n3){
    if (n1 > n2 && n1 >n3){
        return `Maior número é: ${n1}`;
    } else if (n2 > n1 && n2 >n3) {
        return `Maior número é: ${n2}`;
    } else {
        return `Maior número é: ${n3}`;
         }
    }
    console.log (numeros(2,7,12));
    
    console.log(" ");
 
 // Atividade 15
    console.log("Atividade 15");
    const calcularPotencia =  (base,expoente) => {
    const resultado = base ** expoente
    return ` ${resultado}` 
    }
    console.log (calcularPotencia (70,5)); 
     
    console.log(" ");

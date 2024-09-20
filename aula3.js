    // Atividade 1 

    console.log("Atividade 1");
    const str = 'Caua';
    const num = 55;
    const bool = true;

    console.log(typeof 'Caua');
    console.log(typeof 55);
    console.log(typeof true);
    console.log(" ");

    // Atividade 2

    console.log("Atividade 2");
    let firstname = 'Caua';
    let lastname = 'Moura';

    let fullNamePlus = firstname + ' ' + lastname;
    let fullNameTemplate = `${firstname} ${lastname}`;

    console.log(fullNamePlus);
    console.log(fullNameTemplate);
    console.log(" ");

    // Atividade 3

    console.log("Atividade 3");
    let name = 'Moura';
    let idade = 47;

    let Template = `${name} ${idade}`;

    console.log(Template);
    console.log(" ");

    // Atividade 4

    console.log("Atividade 4");
    let maioridade = 32;

    console.log(maioridade);

    maioridade = 45;

    console.log(maioridade);
    console.log(" ");

    // Atividade 5

    console.log("Atividade 5");
 
    let foradobloco = 'Fora do bloco';

    if (true) {
 
    let dentrodobloco = 'Dentro do bloco';

        console.log(dentrodobloco); 
    }
        
        console.log(foradobloco); 
        console.log(" ");
   
    // Atividade 6

    console.log("Atividade 6");

    let chuva = true;
    
    if (chuva) {
        console.log('Esta chovendo. Leve guarda-chuva');
    } else {
        console.log("Não chove. Não precisa de guarda-chuva");
    }

    console.log(" ");

    // Atividade 7
    console.log("Atividade 7");
 
    let n1 = 8;
    let n2 = 9;
    let n3 = 5.5;

    media = (n1 + n2 + n3) / 3;

    console.log(media);
    console.log(" ");

    // Atividade 8
    console.log("Atividade 8");

    function Triangulo(base, altura) {
        const area = (base * altura) / 2;
        console.log(`A área do triângulo é: ${area}`);
    }

    const base = 7;   
    const altura = 3;  

    Triangulo(base, altura);
    console.log(" ");

    // Atividade 9 
    console.log("Atividade 9");

    function Circulo(raio) {

        const area = Math.PI * Math.pow(raio, 2);
        console.log(`A área do círculo é : ${area}.`);
    }

    const raio = 35; 
    Circulo(raio);

    // Atividade 10
    console.log("Atividade 10");

    function Resistencia(voltagem, corrente) {
        const resistencia = voltagem / corrente;
        console.log(`A resistência no circuito é: ${resistencia} ohms.`);
    }

    const voltagem = 127; 
    const corrente = 7;   

    Resistencia (voltagem, corrente);
    console.log(" ");

    // Atividade 11
    console.log("Atividade 11");
    
    var salarioB = 1300
    if (true){
        var salarioL = (salarioB-((20/100)*1300))
    }
    console.log(`Salário Liquido = ${salarioL}`);
    console.log(" ");

    // Atividade 12
    console.log("Atividade 12");


    console.log('12')
    var litros = 15
    if (true){
        var abastecer = 5.50*litros
    }
    console.log(`Gasto para abastecer 15 litros = R$${abastecer}`);
    console.log(" ");

    // Atividade 13
    console.log("Atividade 13");

    const Pot_MaquinaW = 1750; 
    const Horas_Dia = 8;         
    const Dias_Mes = 25;        
    const Custo_KWh = 0.75;      

    const potenciaMaquinaKW = Pot_MaquinaW / 1000;

    const consumoDiarioKWh = pot_iaMaquinaKW * Horas_Dia;

    const consumoMensalKWh = consumoDiarioKWh * Dias_Mes;

    const custoTotal = consumoMensalKWh * Custo_KWh;

    console.log(`O consumo mensal da máquina é ${consumoMensalKWh} kWh.`);
    console.log(`O custo mensal da energia é R$${custoTotal}.`);
    console.log(" ");

    // Atividade 14
    console.log("Atividade 14");

    const nota1 = 9;
    const nota2 = 8;
    const nota3 = 7;

    const medias = (nota1 + nota2 + nota3) / 3;

    let situacao;

    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media > 4 && media < 6) {
        situacao = 'Exame';
    } else {
        situacao = 'Reprovado';
    }

    console.log(`Média: ${medias}`);
    console.log(`Situação: ${situacao}`);
    console.log(" ");

    // Atividade 15
    console.log("Atividade 15");

    const Peso = 75;  
    const Altura = 1.78;  


    function IMC(Peso, Altura) {
        Peso / (Altura * Altura);
    }


    const imc = IMC(Peso, Altura);

    let categoria;
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    console.log(` Você esta em : ${categoria}`

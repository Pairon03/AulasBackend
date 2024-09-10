 // Atividade 1
 console.log("Atividade 1");
   
 const comidas = ['arroz', 'feijão', 'batata', 'macarrão', 'cebola'];

 console.log(comidas[0]);

 comidas[0] = 'cenoura';
 console.log(comidas[0]);   

 console.log(" ");

// Atividade 2
 console.log("Atividade 2");

 const numeros = [];

 numeros.push(4,2,3);
 console.log(numeros);

 numeros[0] = 8;
 console.log(numeros);

 console.log(" ");

// Atividade 3
 console.log("Atividade 3");

 const num = [];

 num.push(3,2,1);
 console.log(num);

 console.log(" ");

// Atividade 4
 console.log("Atividade 4");  

const clinica = []

clinica.push('macaco','cachorro','passaro');
console.log(clinica);

clinica.pop();
console.log(clinica);

clinica.pop();
console.log(clinica);

clinica.pop();
console.log(clinica);

 console.log(" ");

// Atividade 5
 console.log("Atividade 5");

 let livro = {
  titulo : "As aventuras de Raimundo",
  autor : "Rayner",
  anoPublicacao : 2022,
  genero : "Aventura",
 };

 console.log("Título:", livro.titulo);
 console.log("Autor:", livro.autor);
 console.log("Ano de Publicação:", livro.anoPublicacao);
 console.log("Gênero:", livro.genero);


 console.log(" ");


// Atividade 6
 console.log("Atividade 6");
 
 const anoAtual = new Date().getFullYear();
 console.log(anoAtual, 'Ano atual')

 const livro1 = {
     titulo: 'Anjos e demonios',
     autor: 'Celma Silva',
     anoPublicacao: 2023,
     genero: 'Terror'
 };
    //adiciona a propriedade idadePublicacao ao objeto livro
 livro1.idadePublicacao = anoAtual - livro1.anoPublicacao;
    //criação da string mostrarDetalhes com os detalhes do livro
 const mostrarDetalhes = `Título: ${livro1.titulo}\n` +
                         `Autor: ${livro1.autor}\n` +
                         `Ano de Publicação: ${livro1.anoPublicacao}\n` +
                         `Gênero: ${livro1.genero}\n` +
                         `Idade de Publicação: ${livro1.idadePublicacao} anos`;

                         console.log(mostrarDetalhes);
 console.log(" ");

// Atividade 7
 console.log("Atividade 7");
 const livro2 = {
  titulo2: 'Casei com o cara errado',
  autor2: 'Ariana James',
  anoPublicacao2: 2001,
  genero2: 'Romance',
  idadePublicacao2: anoAtual - 2001 // Calcula a idade de publicação
};
 //impressão dos detalhes do livro utilizando colchetes para acessar as propriedades
console.log('Detalhes do Livro:');
console.log(`Título: ${livro2['titulo2']}`);
console.log(`Autor: ${livro2['autor2']}`);
console.log(`Ano de Publicação: ${livro2['anoPublicacao2']}`);
console.log(`Gênero: ${livro2['genero2']}`);
console.log(`Idade de Publicação: ${livro2['idadePublicacao2']} anos`);

 console.log(" ");

// Atividade 8
 console.log("Atividade 8");

 const livro3 = {
  titulo3: 'As 48 leis do poder: Edição concisa',
  autor3: 'Robert Greene',
  anoPublicacao3: 2021,
  genero3: 'Gestão e Liderança',
  idadePublicacao3: anoAtual - 2021,
  avaliacao: null
};
 // Função para adicionar avaliação ao livro
function adicionarAvaliacao(novaAvaliacao) {
  if (livro3.avaliacao === null) {
        livro3.avaliacao = novaAvaliacao;
        console.log(`A avaliação foi adicionada: ${livro3.avaliacao}`);
  } else {
      console.log('O livro já possui uma avaliação.');
  }
}
   // Adicionar uma avaliação ao livro
   adicionarAvaliacao(6.5); // A avaliação será adicionada
   // Tentar adicionar uma nova avaliação para verificar o comportamento
adicionarAvaliacao(5.0); // Mensagem indicando que o livro já possui uma avaliação
   // Impressão dos detalhes do livro utilizando colchetes para acessar as propriedades
console.log('Detalhes do Livro:');
console.log(`Título: ${livro3['titulo3']}`);
console.log(`Autor: ${livro3['autor3']}`);
console.log(`Ano de Publicação: ${livro3['anoPublicacao3']}`);
console.log(`Gênero: ${livro3['genero3']}`);
console.log(`Idade de Publicação: ${livro3['idadePublicacao3']} anos`);
console.log(`Avaliação: ${livro3['avaliacao']}`);
 console.log(" ");

// Atividade 9
 console.log("Atividade 9");
 
 const livro4 = {
  titulo4: 'Quebrando o hábito de ser você mesmo: Como reconstruir sua mente e criar um novo eu  ',
  autor4: 'Joe Dispenza ',
  anoPublicacao4: 2018,
  genero4: 'Gestão e Liderança',
  idadePublicacao4: anoAtual - 2018
};

console.log(`Título: ${livro4['titulo4']}`);
console.log(`Autor: ${livro4['autor4']}`);
console.log(`Ano de Publicação: ${livro4['anoPublicacao4']}`);
console.log(`Gênero: ${livro4['genero4']}`);
console.log(`Idade de Publicação: ${livro4['idadePublicacao4']} anos`);

livro4.genero4 = "Aventura";
console.log(" ");

console.log(`Título: ${livro4['titulo4']}`);
console.log(`Autor: ${livro4['autor4']}`);
console.log(`Ano de Publicação: ${livro4['anoPublicacao4']}`);
console.log(`Gênero: ${livro4['genero4']}`);
console.log(`Idade de Publicação: ${livro4['idadePublicacao4']} anos`);


 console.log(" ");

// Atividade 10
 console.log("Atividade 10");


 console.log(" ");

// Atividade 11
  console.log("Atividade 11");

 console.log(" ");

// Atividade 12
  console.log("Atividade 12");


  console.log(" ");

// Atividade 13
 console.log("Atividade 13");


  
  console.log(" ");

// Atividade 14
 console.log("Atividade 14");


  
 console.log(" ");

// Atividade 15
 console.log("Atividade 15");


  
 console.log(" ");
let quiz = [
    {
        pergunta: "Onde JESUS nasceu?",
        resposta1: "Em Roma, na Itália!",
        resposta2: "Em Alexandria, no Egito!",
        resposta3: "Em Belém, na Judeia!"
    },
    {}
]
class Temas {
  constructor(tema, opcao1, opcao2, opcao3) {
    this.tema = tema;
    this.opcao1 = opcao1;
    this.opcao2 = opcao2;
    this.opcao3 = opcao3;
  }  

}

let primeiraPergunta = new Temas(quiz[0].pergunta);
console.log(primeiraPergunta)

        function iniciarPerguntas() {
            let primeiraPergunta = `
            <div class="templates_das_perguntas">
            <p class="perguntas_dos_templates">${quiz[0].pergunta}</p>
            <p class="perguntas_dos_templates">${quiz[0].resposta1}</p>
            <p class="perguntas_dos_templates">${quiz[0].resposta2}</p>
            <pclass="perguntas_dos_templates">${quiz[0].resposta3}</p>
            </div>
            `;
            document.getElementById("corpo_principal_do_quiz").innerHTML = primeiraPergunta;

        }



//         let novoEstilo = document.querySelector("#imagem");
//         novoEstilo.addEventListener("click", function() {
//             novoEstilo.classList.toggle("novo");
//         });
        
//         function mostrarHtml() {
//             let saudacao = `
//             <!DOCTYPE html>
// <html lang="pt-br">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <main>
//     <h1>Isso é um título</p>
//     <a href="jogoAdivinhacao.html">proxima pergunta</a>
//     </main>
// </body>
// </html>
//             `;
//             document.getElementById("mostra_html").innerHTML = saudacao;
//         }
        
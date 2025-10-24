// IMC = peso / (altura * altura)
function calculaIMC() {
    let peso = document.getElementById("recebe-peso").value;
    let altura = document.getElementById("recebe-altura").value;
    // Recebendo os valores do input do HTML;
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    // Convertendo os valores de string para números;
    let resultaIMC = peso / (altura * altura);
    if(resultaIMC < 18.5) {
        return document.getElementById("resultado").innerHTML = `<p>Você está abaixo do peso ideal. Que tal conversar com um nutricionista?</p>`;
    } else if(resultaIMC >= 18.5 && resultaIMC <= 24.9 ) {
        return document.getElementById("resultado").innerHTML = `<p>Parabéns! Seu peso está dentro da faixa considerada saudável.</p>`;
    } else if(resultaIMC >= 25 && resultaIMC <= 29.9 ) {
        return document.getElementById("resultado").innerHTML = `<p>Você está com sobrepeso. Pequenas mudanças no dia a dia podem fazer a diferença!</p>`;
    } else if(resultaIMC >= 30 && resultaIMC <= 34.9 ) {
        return document.getElementById("resultado").innerHTML = `<p>Obesidade grau I. É importante buscar orientação profissional para cuidar da saúde.</p>`;
    } else if(resultaIMC >= 35 && resultaIMC <= 39.9 ) {
        return document.getElementById("resultado").innerHTML = `<p>Obesidade grau II. Recomendamos acompanhamento médico e nutricional.</p>`;
    } else if(resultaIMC >= 40) {
        return document.getElementById("resultado").innerHTML = `<p>Obesidade grau III (mórbida). Cuide-se! Procure ajuda especializada o quanto antes.</p>`;
    }
    else {
        return  document.getElementById("resultado").innerHTML = `<p>Por favor, preencha os campos de "PESO" e "ALTURA"!</p>`;
    }
    
} 

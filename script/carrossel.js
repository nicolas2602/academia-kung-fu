const imagens = [
    { src: "imagem/imagem-lemas/lema1-kung-fu.jpg", description: "Imagem 1: A Força da Serenidade, a Sabedoria do Dragão" },
    { src: "imagem/imagem-lemas/lema2-kung-fu.jpg", description: "Imagem 2: Domine o Corpo, Liberte a Mente" },
    { src: "imagem/imagem-lemas/lema3-kung-fu.jpg", description: "Imagem 3: Caminhe na Harmonia, Lute com Honra" },
    { src: "imagem/imagem-lemas/lema4-kung-fu.jpg", description: "Imagem 4: A Disciplina é a Espada que Forja o Guerreiro" },
    { src: "imagem/imagem-lemas/lema5-kung-fu.jpg", description: "Imagem 5: Silêncio na Alma, Poder nas Mãos" },
    { src: "imagem/imagem-lemas/lema6-kung-fu.jpg", description: "Imagem 6: O Verdadeiro Mestre Vence Sem Lutar" },
    { src: "imagem/imagem-lemas/lema7-kung-fu.jpg", description: "Imagem 7: Transforme o Medo em Força, a Fraqueza em Sabedoria" },
    { src: "imagem/imagem-lemas/lema8-kung-fu.jpg", description: "Imagem 8: O Espírito do Tigre, a Paciência do Panda" },
    { src: "imagem/imagem-lemas/lema9-kung-fu.jpg", description: "Imagem 9: A Verdadeira Vitória é Sobre Si Mesmo" },
    { src: "imagem/imagem-lemas/lema10-kung-fu.jpg", description: "Imagem 10: A Fluidez da Água, a Determinação da Montanha" }
];

let posicao = 0;

const setaEsquerda= document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const imgCarroussel = document.querySelector(".img-carrossel");
const descCarroussel = document.querySelector(".desc-imagem");

setaEsquerda.addEventListener("click", () => moverCarroussel(-1));
setaDireita.addEventListener("click", () => moverCarroussel(1));

function moverCarroussel(direcao) {
    posicao += (direcao + imagens.length) % imagens.length;
    atualizarCarrousel();
}

function mudarPosicao(numeroPosicao){

    let posicaoImagem = ""

    if (numeroPosicao === 1 || numeroPosicao === 2){
        posicaoImagem = "imagem-centro";
    } else {
        posicaoImagem = "imagem-canto";
    }

    return posicaoImagem;
}

function atualizarCarrousel() {
    imgCarroussel.innerHTML = "";
    descCarroussel.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        let imgIndex = (posicao + i) % imagens.length;
        const imgAlinhar = document.createElement("div");
        imgAlinhar.className = "img-alinhar";

        const imgElemento = document.createElement("img");
        imgElemento.src = imagens[imgIndex].src;
        imgElemento.alt = imagens[imgIndex].description;
        imgElemento.className = mudarPosicao(i);
        imgElemento.addEventListener("click", () => moverCarroussel(i < 2 ? -1 : 1));
        imgAlinhar.appendChild(imgElemento);

        imgCarroussel.appendChild(imgAlinhar);

        const descriptionElement = document.createElement("p");
        descriptionElement.className = "desc-imagem";
        descriptionElement.textContent = imagens[imgIndex].description;
        descCarroussel.appendChild(descriptionElement);
    }
}

atualizarCarrousel()
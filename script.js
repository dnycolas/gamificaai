// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarra = document.getElementById("iconeBarra")
let iconeX = document.getElementById("iconeX")

function abrirFecharMenu(){
    //  se o menu esta fechado
    if (menu.classList.contains("menu-fechado")){
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostra icone x
        iconeX.style.display = "unset"

        // Esconder icone barras
        iconeBarra.style.display = "none"
    } 
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Mostra icone x
        iconeX.style.display = "none"

        // Esconder icone barras
        iconeBarra.style.display = "unset"
    }
}   

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarra.style.display = "none"
}

// Função Carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner' ,
    'terceiro-banner'
]


// essa variavel pode ser usada pra dar um numero limite de slides
// let ultimoItem = 3

let slidesAtual = 0

let numerSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slidesAtual])

const mostraProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slidesAtual])



    if(slidesAtual < (numerSlides - 1)) {
        slidesAtual++
    } else {
        slidesAtual = 0
    }

    // Muda a posicao da lista de slides, para mostrar o slideAtual
    // slidesAtual++


    // Renderiza o slideAtual
    banner.classList.add(slides[slidesAtual])
}

const mostraSlideAnterior = () => {
    // Remove slide anterior    
    banner.classList.remove(slides[slidesAtual])

    if(slidesAtual > 0) {
        slidesAtual--
    }else {
        slidesAtual = numerSlides - 1
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slidesAtual])
}

const selecionarSlide = (indeceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slidesAtual = indeceSlide

    banner.classList.add(slides[indeceSlide])
}





let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança im desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
    },
    {
        imagem: "https://unsplash.it/600/400?image=39",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de trinamento."
    },
    {
        imagem: "https://unsplash.it/600/400?image=84",
        descricao: "Uma empresa de vendas umplementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },
    {
        imagem: "https://unsplash.it/600/400?image=96",
        descricao: "Uma empresa de saude promove o bem bem-estar dos funcionarios atraves de um desafio de gamificação de condicionamento fisico"
    },
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // template strings
    let template = ""

    listaCases.forEach( card => {
            template +=  `<div class="card">
            <img src="${card.imagem}" alt="">
            <p>${card.descricao}</p>
            <button>Ver mais</button>
        </div>`
    })

    elementoLista.innerHTML = template
}
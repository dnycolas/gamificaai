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





let listaCases = []

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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json() )
    .then( (dados) => {
        listaCases = dados
        renderizarCases()
    } )
    .catch( erro => console.error(erro))
}





const solicitarOrcamento = (event) => {
    // Pegar valorez dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objetos com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para api
    // 127.0.0.1 -> localhost
    // metodo HTTP POST - Create -> Cadastra post
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then (resposta => {
        console.log(resposta)

        // limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        // mostra alert como msg de sucesso
        alert("solicitação cadastrada")
    })

        // CASO ERRO - alert com msg erro
        .catch(erro => {
            console.error(erro)
            alert("Erro inusitado")
        })
    
    event.prevenDefault()
}
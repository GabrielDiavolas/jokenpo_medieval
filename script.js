var opcao_ambos = [document.getElementsByClassName("opcoes_ambos")[0],
document.getElementsByClassName("opcoes_ambos")[1],
document.getElementsByClassName("opcoes_ambos")[2], //Até aqui é a opção do jogador
document.getElementsByClassName("opcoes_ambos")[3],
document.getElementsByClassName("opcoes_ambos")[4],
document.getElementsByClassName("opcoes_ambos")[5]
]

var opcao_player_espada = document.getElementById("img_espada_player")
var opcao_player_escudo = document.getElementById("img_escudo_player")
var opcao_player_mago = document.getElementById("img_mago_player")
var escolha_player = document.getElementById("escolha_player")
var escolha_maquina = document.getElementById("escolha_maquina")
var quem_ganhou = document.getElementById("quem_ganhou")
var pontos_jogador = document.getElementById("pontos_jogador")
var pontos_maquina = document.getElementById("pontos_maquina")
var nome_jogador = document.getElementById("jogador")
var lugar_versus = document.getElementById("lugar_versus")

//Coloca nome no jogador

var jogador = window.prompt('Qual é o seu nome, nobre jogador ?')
    nome_jogador.innerText = `${jogador}`

opcao_player_espada.addEventListener('click', escolheuEspada)
opcao_player_escudo.addEventListener('click', escolheuEscudo)
opcao_player_mago.addEventListener('click', escolheuMago)


/*Cria a interação de levantar as imagens quando o mouse passa por cima*/
opcao_ambos[0].addEventListener('mouseenter',
    function interacao() {
        opcao_ambos[0].style.position = "relative"; //Adiciona a propriedade para levantar a imagem
        opcao_ambos[0].style.bottom = "10px"    //Levanta a imagem 10px
    })
opcao_ambos[0].addEventListener("mouseout",
    function removerAtt() {
        opcao_ambos[0].style.removeProperty("relative") //Remove a propriedade de levantar
        opcao_ambos[0].style.removeProperty("bottom") //Remove o tamanho erguido
    })

opcao_ambos[1].addEventListener('mouseenter',
    function interacao() {
        opcao_ambos[1].style.position = "relative";
        opcao_ambos[1].style.bottom = "10px"
    })
opcao_ambos[1].addEventListener("mouseout",
    function removerAtt() {
        opcao_ambos[1].style.removeProperty("relative")
        opcao_ambos[1].style.removeProperty("bottom")
    })

opcao_ambos[2].addEventListener('mouseenter',
    function interacao() {
        opcao_ambos[2].style.position = "relative";
        opcao_ambos[2].style.bottom = "10px"
    })
opcao_ambos[2].addEventListener("mouseout",
    function removerAtt() {
        opcao_ambos[2].style.removeProperty("relative")
        opcao_ambos[2].style.removeProperty("bottom")
    })

opcao_ambos[3].addEventListener('mouseenter',
    function interacao() {
        opcao_ambos[3].style.position = "relative";
        opcao_ambos[3].style.bottom = "10px"
    })
opcao_ambos[3].addEventListener("mouseout",
    function removerAtt() {
        opcao_ambos[3].style.removeProperty("relative")
        opcao_ambos[3].style.removeProperty("bottom")
    })

opcao_ambos[4].addEventListener('mouseenter',
    function interacao() {
        opcao_ambos[4].style.position = "relative";
        opcao_ambos[4].style.bottom = "10px"
    })
opcao_ambos[4].addEventListener("mouseout",
    function removerAtt() {
        opcao_ambos[4].style.removeProperty("relative")
        opcao_ambos[4].style.removeProperty("bottom")
    })

opcao_ambos[5].addEventListener('mouseenter',
    function interacao() {
        opcao_ambos[5].style.position = "relative";
        opcao_ambos[5].style.bottom = "10px"
    })
opcao_ambos[5].addEventListener("mouseout",
    function removerAtt() {
        opcao_ambos[5].style.removeProperty("relative")
        opcao_ambos[5].style.removeProperty("bottom")
    })

//Cria as funções que irão colocar as opções escolhidas dentro do campo de Versus e no Placar
var img_escolha = document.createElement('img')
var img_escolha_maquina = document.createElement('img')
var a_escolha_do_player
var a_escolha_da_maquina
var cont_pontos_player = 0
var cont_pontos_maquina = 0

function escolheuEspada() {
    img_escolha.src = "imagens/Espada.png"
    img_escolha.style.marginRight = "6.5em"
    escolha_player.appendChild(img_escolha)
    a_escolha_do_player = 0
    logicaGame()
}

function escolheuEscudo() {
    img_escolha.src = "imagens/Escudo.png"
    img_escolha.style.marginRight = "6.5em"
    escolha_player.appendChild(img_escolha)
    a_escolha_do_player = 1
    logicaGame()
}

function escolheuMago() {
    img_escolha.src = "imagens/Mago.png"
    img_escolha.style.marginRight = "6.5em"
    escolha_player.appendChild(img_escolha)
    a_escolha_do_player = 2
    logicaGame()
}

//Função para criar os resultados aleatórios
function aleatorizarMaquina(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)

}

//Função com a lógica do game
function logicaGame() {
    a_escolha_da_maquina = aleatorizarMaquina(3, 5)

    var versus_img = document.createElement('img')
    versus_img.src = "imagens/vs_1.png"
    versus_img.setAttribute("id", "versus")
    lugar_versus.appendChild(versus_img) 

    //Coloca as imagens na escolha da maquina
    switch (a_escolha_da_maquina) {
        case 3:
            img_escolha_maquina.src = "imagens/Espada.png"
            img_escolha_maquina.style.marginLeft = "6.5em"
            img_escolha_maquina.setAttribute("id", "img_escolha_maquina") // Cria o efeito piscante de fundo
            escolha_maquina.appendChild(img_escolha_maquina)
            break

        case 4:
            img_escolha_maquina.src = "imagens/Escudo.png"
            img_escolha_maquina.style.marginLeft = "6.5em"
            img_escolha_maquina.setAttribute("id", "img_escolha_maquina")
            escolha_maquina.appendChild(img_escolha_maquina)
            break

        case 5:
            img_escolha_maquina.src = "imagens/Mago.png"
            img_escolha_maquina.style.marginLeft = "6.5em"
            img_escolha_maquina.setAttribute("id", "img_escolha_maquina")
            escolha_maquina.appendChild(img_escolha_maquina)
            break
    }

    //Define quem ganha ou empata
    if (a_escolha_da_maquina == 3 && a_escolha_do_player == 0 ||
        a_escolha_da_maquina == 4 && a_escolha_do_player == 1 ||
        a_escolha_da_maquina == 5 && a_escolha_do_player == 2
    ) {
        quem_ganhou.innerText = `Houve um empate, ninguém pontuou \u{1F605}`
    } else if (a_escolha_da_maquina == 5 && a_escolha_do_player == 0 ||
        a_escolha_da_maquina == 4 && a_escolha_do_player == 2 ||
        a_escolha_da_maquina == 3 && a_escolha_do_player == 1
    ) {
        quem_ganhou.innerText = `Vitória de ${jogador} \u{1F609}`
        cont_pontos_player = cont_pontos_player + 1
    } else if (a_escolha_da_maquina == 5 && a_escolha_do_player == 1 ||
        a_escolha_da_maquina == 4 && a_escolha_do_player == 0 ||
        a_escolha_da_maquina == 3 && a_escolha_do_player == 2
    ) {
        quem_ganhou.innerText = `Vitória da Máquina \u{1F92D}`
        cont_pontos_maquina = cont_pontos_maquina + 1
    }

    //Coloca no placar os pontos dos jogadores
    pontos_jogador.innerText = `${cont_pontos_player}`
    pontos_maquina.innerText = `${cont_pontos_maquina}`
}


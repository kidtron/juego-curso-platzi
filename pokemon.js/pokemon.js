//funcion iniciar juego
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascota = document.getElementById("boton-mascota")

const botonReiniciar = document.getElementById("boton-reinicio")

const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
//funcion seleccionar mascota

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
//let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")

const spanMascotaJugador = document.getElementById("mascota-jugador")

//funcion seleccion enemigo
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

//funcion mensaje
const vidaMascotaJugador = document.getElementById("vida-mascota")
const vidaMascotaEnemiga = document.getElementById("vida-enemigo")

//funcion crear mensaje
const sectionMesajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataque-jugador")
const ataquesEnemigo = document.getElementById("ataque-enemigo")

//botones

let btns = document.querySelectorAll("a");

btns.forEach((btn) => {
    btn.onmousemove = function (e) {
        let x = e.pageX - btn.offsetLeft;
        let y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", x + "px")
        btn.style.setProperty("--y", y + "px")
    }
});

//contenedor
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let pokemones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePokemones
let inputSquirtle 
let inputPikachu 
let inputCharmander
let mascotaJugador
let mjo
let ataquesPokemon
let ataquesPokemonEnemigo
let botonFuego 
let botonAgua 
let botonRayo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidaJugador = 3
let vidaEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/mokemap.png"

class Pokemon {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarPokemon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }

}

let squirtle = new Pokemon("Squirtle", "./assets/squirtle.png", 5, "./assets/squirtleCabeza.png")

let pikachu = new Pokemon("Pikachu", "./assets/pikachu.png", 5, "./assets/pikachuCabeza.png")

let charmander = new Pokemon("Charmander", "./assets/charmander.png", 5,"./assets/charmanderCabeza.png")

let squirtleEnemigo = new Pokemon("Squirtle", "./assets/squirtle.png", 5, "./assets/squirtleCabeza.png", 80, 120)

let pikachuEnemigo = new Pokemon("Pikachu", "./assets/pikachu.png", 5, "./assets/pikachuCabeza.png", 150, 95)

let charmanderEnemigo = new Pokemon("Charmander", "./assets/charmander.png", 5,"./assets/charmanderCabeza.png", 200, 190)

squirtle.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "🔥", id: "boton-fuego"}
)

squirtleEnemigo.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "🔥", id: "boton-fuego"}
)

pikachu.ataques.push(
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)

pikachuEnemigo.ataques.push(
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "⚡", id: "boton-rayo"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
)

charmander.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "⚡", id: "boton-rayo"},
)

charmanderEnemigo.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "⚡", id: "boton-rayo"},
)

pokemones.push(squirtle,pikachu,charmander)
function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    pokemones.forEach((pokemon) => {
        opcionDePokemones = `
        <input type="radio" name = "mascota" id=${pokemon.nombre} />
        <label class="tarjeta-mokepon" for=${pokemon.nombre}>
        <p>${pokemon.nombre}</p>
        <img src=${pokemon.foto} alt=${pokemon.nombre}>                
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePokemones

    inputSquirtle = document.getElementById("Squirtle")
    inputPikachu = document.getElementById("Pikachu")
    inputCharmander = document.getElementById("Charmander")

    })
    sectionReiniciar.style.display = "none"
    botonMascota.addEventListener("click", seleccionarMascota)
    botonReiniciar.addEventListener("click", ReiniciarJuego)
}

function seleccionarMascota() {

    sectionSeleccionarMascota.style.display = "none"



    if(inputSquirtle.checked){
        spanMascotaJugador.innerHTML = inputSquirtle.id
        mascotaJugador = inputSquirtle.id
    }else if(inputPikachu.checked){
        spanMascotaJugador.innerHTML = inputPikachu.id
        mascotaJugador = inputPikachu.id
    }else if(inputCharmander.checked){
        spanMascotaJugador.innerHTML = inputCharmander.id
        mascotaJugador = inputCharmander.id
    }else
        
        ReiniciarJuego(); 
        
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()       

}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaJugador === pokemones[i].nombre) {
            ataques = pokemones[i].ataques

        }

    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokemon = `
            <button id=${ataque.id} class="botones BAtaque">${ataque.nombre}</button>
        `
        
        contenedorAtaques.innerHTML += ataquesPokemon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonRayo = document.getElementById("boton-rayo")
    botones = document.querySelectorAll('.BAtaque')

   
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) =>{
            if (e.target.textContent == "🔥") {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true

            }else if (e.target.textContent == "💧") {
                ataqueJugador.push('AGUA') 
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true

            }else {
                ataqueJugador.push('RAYO')
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
        
    })


    
}

function seleccionarMascotaEnemigo(enemigo) {
    let mascotaAleatorio = aleatorio(0,pokemones.length - 1)

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesPokemonEnemigo = enemigo.ataques
    secuenciaAtaques()

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length -1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO")
    }else if (ataqueAleatorio ==3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    }else{
        ataqueEnemigo.push("RAYO")

    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        mensaje()
        
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function mensaje(){

    for (let index = 0; index < ataqueJugador.length; index++) {

        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "RAYO" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            vidaMascotaJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            vidaMascotaJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] === "RAYO" && ataqueEnemigo[index]=== "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            vidaMascotaJugador.innerHTML = victoriasJugador

        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            vidaMascotaEnemiga.innerHTML = victoriasEnemigo
        }
        
    }

    resultado()
}

function resultado() {
    if (victoriasJugador == victoriasEnemigo){
    crearMensajeFinal("HA SIDO UN EMPATE, BUEN JUEGO")
    }else if (victoriasJugador > victoriasEnemigo){
    crearMensajeFinal("HAS GANADO EL COMBATE; sigue asi!!")
    }else {
    crearMensajeFinal("HAS PERDIDO EL COMBATE, MEJOR SUERTE A LA PROXIMA")    
    }
}


function crearMensaje(resultado) {


    let NuevoAtaqueJugador = document.createElement("p")
    let NuevoAtaqueEnemigo = document.createElement("p")

    sectionMesajes.innerHTML = resultado
    NuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    NuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesJugador.appendChild(NuevoAtaqueJugador)
    ataquesEnemigo.appendChild(NuevoAtaqueEnemigo)

   
}

function crearMensajeFinal(resultadoFinal) {
    

    sectionMesajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "flex"

}

function ReiniciarJuego() {
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas() {
    mjo.x = mjo.x + mjo.velocidadX
    mjo.y = mjo.y + mjo.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mjo.pintarPokemon()
    squirtleEnemigo.pintarPokemon()
    pikachuEnemigo.pintarPokemon()
    charmanderEnemigo.pintarPokemon()
    if (mjo.velocidadX !== 0 || mjo.velocidadY !== 0) {
        revisarColision(squirtleEnemigo)
        revisarColision(pikachuEnemigo)
        revisarColision(charmanderEnemigo)
    }

}

function moverDerecha() {
    mjo.velocidadX = 5
    pintarCanvas()
}
function moverIzquierda() {
    mjo.velocidadX = -5
    pintarCanvas()
}
function moverArriba() {
    mjo.velocidadY = -5
    pintarCanvas()
}
function moverAbajo() {
    mjo.velocidadY = 5
    pintarCanvas()
}

function detenerMovimiento() {
    mjo.velocidadX = 0
    mjo.velocidadY = 0
}

function sePresionaUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()            
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()    
    
        default:
            break;
    }
}

function iniciarMapa() {
    mapa.width = 320
    mapa.height = 240
    mjo = obtenerMascota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionaUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerMascota() {
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaJugador === pokemones[i].nombre) {
            return pokemones[i]

        }

    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mjo.y
    const abajoMascota = mjo.y + mjo.alto
    const derechaMascota = mjo.x + mjo.ancho
    const izquierdaMascota = mjo.x
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return;
    } 
        detenerMovimiento()
        clearInterval(intervalo)
        sectionSeleccionarAtaque.style.display = "flex"
        sectionVerMapa.style.display = "none"
        seleccionarMascotaEnemigo(enemigo)
    
}

window.addEventListener("load", iniciarJuego)
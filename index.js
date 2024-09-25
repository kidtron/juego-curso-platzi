const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id 
    }
    asignarPokemon(pokemon) {
        this.pokemon = pokemon
    }
}

class Pokemon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*") 
    res.send(id)
})

app.post("/pokemon/:jugadorID", (req,res) => {
    const jugadorID = req.params.jugadorID || ""
    const nombre =req.body.pokemon || ""
    const pokemon = new Pokemon(nombre)
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorID === jugador.id)

    if (jugadorIndex >= 0 ) {
        jugadores[jugadorIndex].asignarPokemon(pokemon)
    } 
    
    console.log(jugadores)
    console.log(jugadorID)
    res.end()
})



app.listen(8000, () => {
    console.log("servidor funcionando")
})
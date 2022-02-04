//import { toBattle } from './battle.js'
import { toBattle } from './AsyncBattle.js'
import { warrior, archer } from './personagensTeste.js'

let winner

async function resposta() {
    winner = await toBattle(warrior, archer)
    console.log(winner)
    
}
resposta()



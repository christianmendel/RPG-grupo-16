export async function toBattle(character, enemy) {
    let winner = false
    let round = 1

    let first = character
    let second = enemy
    if (character.status.agi < enemy.status.agi) {
        first = enemy
        second = character
    }
    while (winner === false) {
        if (first.life <= 0) {
            winner = second
        } else if (second.life <= 0) {
            winner = first
        } else {

            console.log(` ----------------- Round ${round} ----------------- `)
            try {
                if (first.life > 0 && second.life > 0) {
                    await atack(first, second)
                        .then((res) => {
                            second.life = res
                            console.log("( character ) " + first.name + " atacou - life: " + second.life)
                        })
                }
                if (first.life > 0 && second.life > 0) {
                    await atack(second, first)
                        .then((res) => {
                            first.life = res
                            console.log("( inimigo ) " + second.name + " atacou - life: " + first.life)
                        })
                }
            }catch(e){
                console.log("passou a vez")
            }
            round++
        }
    }
    console.log(` ----------------- WINNER!! ----------------- `)
    return { ...winner }
}

function atack(attacker, wholesale) {
    let damage = []
    if (attacker.kind === 'WARRIOR') {
        damage.push(attacker.status.str)
        damage.push(attacker.equipaments.weaponRight)
        damage.push(attacker.equipaments.weaponLeft)

    } else if (attacker.kind === 'ARCHER') {
        damage.push(attacker.status.agi)
        damage.push(attacker.equipaments.weaponRight * attacker.equipaments.inventory.arsenal[0])

    } else if (attacker.kind === 'WISARD') {
        damage.push(attacker.status.int)
        damage.push(attacker.equipaments.weaponRight * attacker.equipaments.inventory.arsenal[0])
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const armor = wholesale.equipaments.armor
            let shildTot = (armor.healm + armor.chest + armor.boots + armor.gloves)
            let damageTot = damage.reduce((acumulador, initValue) => {
                return acumulador + initValue
            })

            console.log(damageTot)
            console.log(shildTot)
            const damageTake = damageTot - shildTot

            if (damageTake <= 0) {
                reject(wholesale.life)
            } else {

                wholesale.life -= damageTake

                resolve(wholesale.life)
            }
        }, 2000 - (attacker.status.agi * 100))
    })
}

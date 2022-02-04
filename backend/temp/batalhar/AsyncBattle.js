export async function toBattle(first, second) {
  return turnPlayers(first, second);
}
let count = true;
let retorno = null;

async function turnPlayers(first, second) {
  await turn(first, second).then((resolve) => {
    if (resolve.firstPlayer.life < 0) {
      console.log("testes");
      retorno = resolve.secondPlayer;
    } else if (resolve.secondPlayer.life < 0) {
      console.log("testes");
      retorno = resolve.firstPlayer;
    }
  });

  if (retorno !== null) {
    return retorno;
  }
  await turnPlayers(second, first);
}

async function turn(first, second) {
  let color;
  color = count === true ? "\x1b[32m" : "\x1b[31m";
  return new Promise((res) => {
    setTimeout(() => {
      atack(first, second).then((resolve) => {
        res({ firstPlayer: first, secondPlayer: second });

        console.log(color, "------------- log da rodada -------------------");
        console.log(
          `nome do atacante: ${resolve.attacker.name}, dano: ${resolve.damage}`
        );
        console.log(
          `nome do atacado: ${resolve.wholesale.name}, sihld: ${resolve.shildTot}, vida restante: ${resolve.wholesale.life}`
        );
        console.log("-----------------------------------------------", color);
      });
    }, 3000);
    count = count === true ? (count = false) : true;
  });
}

async function atack(attacker, wholesale) {
  return new Promise((resolve, reject) => {
    let damage = [];
    if (attacker.kind === "WARRIOR") {
      damage.push(attacker.status.str);
      damage.push(attacker.equipaments.weaponRight);
      damage.push(attacker.equipaments.weaponLeft);
    } else if (attacker.kind === "ARCHER") {
      damage.push(attacker.status.agi);
      damage.push(
        attacker.equipaments.weaponRight *
          attacker.equipaments.inventory.arsenal[0]
      );
    } else if (attacker.kind === "WISARD") {
      damage.push(attacker.status.int);
      damage.push(
        attacker.equipaments.weaponRight *
          attacker.equipaments.inventory.arsenal[0]
      );
    }

    const armor = wholesale.equipaments.armor;
    let shildTot = armor.healm + armor.chest + armor.boots + armor.gloves;
    let damageTot = damage.reduce((acumulador, initValue) => {
      return acumulador + initValue;
    });

    const damageTake = damageTot - shildTot;

    if (damageTake <= 0) {
      reject(wholesale.life);
    } else {
      wholesale.life -= damageTake;
    }
    setTimeout(() => {
      resolve({
        attacker: { ...attacker },
        damage: damageTot,
        wholesale: { ...wholesale },
        shildTot: shildTot,
      });
    });
  });
}

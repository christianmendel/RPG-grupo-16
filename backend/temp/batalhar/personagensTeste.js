export const warrior = {
  name: "Atila",
  kind: "WARRIOR",
  life: 100,
  status: {
    level: 3,
    experience: 10,
    str: 20,
    dex: 8,
    agi: 8,
    int: 5,
  },

  equipaments: {
    pound: 23,
    armor: {
      healm: 4,
      chest: 3,
      boots: 7,
      gloves: 5,
    },

    weaponRight: 5,
    weaponLeft: 7,
    inventory: [14],
  },
};

export const archer = {
  name: "Genghis",
  kind: "ARCHER",
  life: 100,
  status: {
    level: 4,
    experience: 15,
    str: 7,
    dex: 14,
    agi: 7,
    int: 7,
  },

  equipaments: {
    pound: 14,
    armor: {
      healm: 4,
      chest: 5,
      boots: 6,
      gloves: 7,
    },

    weaponRight: 5,
    weaponLeft: 2,
    inventory: { arsenal: [5], itens: [] },
  },
};

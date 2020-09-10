export default class Player {
  constructor(name, id){
    this.name = name;
    this.id = id;
    this.team = [null, null, null, null, null, null];
  };

  say() {
    console.log(`I am a player! My name is ${this.name}`)
  }

  addPokemon(pokemon) {
    let teamSlot;
    for (let i = 0; i < this.team.length; i++) {
      if (this.team[i] === null) { teamSlot = i; break; }
    }
    this.team.splice(teamSlot, 1, pokemon);
  };
};
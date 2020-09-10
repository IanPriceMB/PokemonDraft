import { Player } from '..';

export default class AI extends Player {
  constructor(id, name){
    super(id, name);
    this.isAI = true;
  };

  say() {
    console.log(`I am an AI! My name is ${this.name}`)
  }
};
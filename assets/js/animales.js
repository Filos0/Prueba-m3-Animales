import {Animal} from "./animal.js";

export class Leon extends Animal {
  Rugir() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Lobo extends Animal {
  Aullar() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Oso extends Animal {
  Gruñir() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Serpiente extends Animal {
  Sisear() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

export class Aguila extends Animal {
  Chillar() {
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

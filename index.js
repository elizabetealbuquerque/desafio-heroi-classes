class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'uma arma desconhecida';
      }
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
 
const mago = new Heroi('Gandalf', 2000, 'mago');
const guerreiro = new Heroi('Conan', 30, 'guerreiro');
const monge = new Heroi('Ryu', 35, 'monge');
const ninja = new Heroi('Hattori Hanzo', 40, 'ninja');
  
  
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
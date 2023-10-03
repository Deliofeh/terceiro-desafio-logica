class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    
    //tipos ["guerreiro","mago", "monge", "ninja"]
    

    atacar() {
        let ataque;
        
        if(this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        }else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        }else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            console.log("ERROR");
        }

        console.log(`- ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new heroi("Delio", 22, "mago");
let guerreiro = new heroi("Delio", 22, "guerreiro");
let monge = new heroi("Delio", 22, "monge");
let ninja = new heroi("Delio", 22, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
class Character {
    maxLife = 1
    _life = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knigth extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life

    }
}

class Mage extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 4
        this.maxLife = this.life
    }
}

class Archer extends Character {
    constructor(name) {
        super(name)
        this.life = 90
        this.attack = 13
        this.defense = 6
        this.maxLife = this.life
    }
}
class Druid extends Character {
    constructor(name) {
        super(name)
        this.life = 110
        this.attack = 8
        this.defense = 8
        this.maxLife = this.life
    }
}


class Stage {
    constructor(personagem1, personagem2, personagem1EL, personagem2EL) {
        this.personagem1 = personagem1
        this.personagem2 = personagem2
        this.personagem1EL = personagem1EL
        this.personagem2EL = personagem2EL
    }

    start() {
        this.update()

        this.personagem1EL.querySelector('.atacarBotao').addEventListener('click' , ()  => this.fazerAtack(this.personagem1, this.personagem2))
        this.personagem2EL.querySelector('.atacarBotao').addEventListener('click' , ()  => this.fazerAtack(this.personagem2, this.personagem1))
    }

    update() {
        // personagem1
        this.personagem1EL.querySelector('.nome').innerHTML = `${this.personagem1.name} - ${this.personagem1.life} HP`
        let p1PCT = (this.personagem1.life / this.personagem1.maxLife) * 100
        this.personagem1EL.querySelector('.barra').style.width = `${p1PCT}%`
        //personagem2
        this.personagem2EL.querySelector('.nome').innerHTML = `${this.personagem2.name} - ${this.personagem2.life} HP`
        let p2PCT = (this.personagem2.life / this.personagem2.maxLife) * 100
        this.personagem2EL.querySelector('.barra').style.width = `${p2PCT}%`

    }


    fazerAtack(atacando , defendendo){
        console.log(`${atacando.name} esta atacando  ${defendendo.name} `)
        this.update()
    }
}

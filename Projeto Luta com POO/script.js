let mage_gandalf = new Mage("Gandalf")
let knigth_garen = new Knigth("Garen")
let druid_bardos = new Druid("Bardos")
let archer_legolas = new Archer("Legolas")

let log = new Log(document.querySelector('.log'))


const stage = new Stage(
    knigth_garen,
    mage_gandalf,
    document.querySelector('#personagem1'),
    document.querySelector('#personagem2'),
    log

)


stage.start()

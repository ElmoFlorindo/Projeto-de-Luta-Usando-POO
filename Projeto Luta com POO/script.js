let mage_gandalf = new Mage("Gandalf")
let knigth_garen = new Knigth("Garen")
let druid_bardos = new Druid("Bardos")
let archer_legolas = new Archer("Legolas")



const stage = new Stage(
    mage_gandalf,
    knigth_garen,
    document.querySelector('#personagem1'),
    document.querySelector('#personagem2')
)

stage.start()
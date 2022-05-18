const soldier = {
    soldatName: 'Emin',
    health: 10,
    supplies: 3,
    weapon: {
        nameWeapon: 'Calash',
        numberOfRounds: 30,

    },
    fire() {
        if (this.weapon.numberOfRounds !== 0
        ) {
            this.weapon.numberOfRounds--
            console.log('Ба-бах')
        }
        else {
            console.log('обойма пуста. Перезаредитесь')
        }
    },
    reload() {
        if (this.weapon.numberOfRounds < 30 && this.supplies > 0) {
            this.weapon.numberOfRounds = 30
            this.supplies--
            console.log('перезарядка...')
        } else if (this.supplies <= 0) {
                console.log('не осталось припасов')
            }
            

    },
    hurt() { 
        if(this.health === 0){
            console.log('Ты умер')
        }
        else if(this.health--){
            console.log('Ты ранен')
        }
    },

}
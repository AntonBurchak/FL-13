
class Fighter {
    constructor({ name, damage, hp, strength, agility }) {
        const figterName = name;
        const figterDamage = damage;
        const figterStrength = strength;
        const figterAgility = agility;
        let figterHp = hp;
        let wins = 0;
        let loss = 0;

        this.setHealth = (num) => {
            figterHp = num
        }
        
        this.heal = (num) => {
            figterHp += num;
        }

        this.addWin = () => wins++;
        
        this.addLoss = () => loss++;

        this.logCombatHistory = () => printLn(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loss}`);
        
        this.dealDamage = (def) => def.setHealth(def.getHealth() - this.getDamage());

        this.getName = () => figterName;
        this.getDamage = () => figterDamage;
        this.getHealth = () => figterHp;
        this.getStrength = () => figterStrength;
        this.getAgility = () => figterAgility;



        this.attack = function (defender) {
            const random = Math.random(), percents = 100;
            const chance = (percents - (defender.getAgility() + defender.getStrength())) / percents;

            if (this.getHealth() > 0) {
                if (random < chance) {
                    printLn(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
                    this.dealDamage(defender);

                    if (defender.getHealth() <= 0) {
                        this.addWin();
                        return printLn(`${this.getName()} has won!`)
                    }

                } else {
                    printLn(`${this.getName()} attack missed`);
                }
            } else {
                this.setHealth(0);
                this.addLoss();
            }
        }
    }
}

const myFighter1 = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });
const myFighter2 = new Fighter({ name: 'Commodus', damage: 23, hp: 100, strength: 30, agility: 15 });

const battle = (firstFighter, secondFighter) => {
    const err = (fighter) => printLn(`${fighter.getName()} is dead and can't fighting`)

    if (firstFighter.getHealth() > 0) {
        if (secondFighter.getHealth() > 0) {
            while (firstFighter.getHealth() >= 0 || secondFighter.getHealth() >= 0) {
                firstFighter.attack(secondFighter);
                secondFighter.attack(firstFighter);
                if (firstFighter.getHealth() <= 0 || secondFighter.getHealth() <= 0) {
                    break;
                }
            }
        } else {
            err(secondFighter)
        }
    } else {
        err(firstFighter)
    }
}

function printLn(value) {
    return console.log(value)
}
battle(myFighter1, myFighter2)  
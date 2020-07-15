function solve() {
    const canCast = (state) => ({
        cast: (spell) => {
            state.mana--;
            console.log(`${state.name} cast ${spell}`);
        }
    });

    const canFight = (state) => ({
        fight: () => {
            state.stamina--;
            console.log(`${state.name} slashes at the foe!`);
        }
    });

    function mage(name) {
        let state = { name, health: 100, mana: 100 };
        return Object.assign(state, canCast(state));
    }

    function fighter(name) {
        let state = { name, health: 100, stamina: 100 };
        return Object.assign(state, canFight(state));
    }

    return { fighter, mage };
}


let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('asdasd');
console.log(scorcher.mana);

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

function solve(){
   const armyStats = { 
      MAGES: { attack: 70, defenses: 30}, 
      FIGHTERS: { attack: 50, defenses: 50 },
      TANKS: { attack: 20, defenses: 80 }
   };
   const kingdomStats = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX']
   const mapKingdom = document.querySelectorAll('#map > div[class="kingdom"]');
   let rebuildKingdom = document.querySelector('#kingdom > div > button');
   rebuildKingdom.addEventListener('click', rebuilding);
   let joinBtn = document.querySelector('#characters > div > button');
   joinBtn.addEventListener('click', joinKingdom);
   let attackerBtn = document.querySelector('#actions > button');
   attackerBtn.addEventListener('click', war);

   function rebuilding() {
      let inputKingdom = document.querySelectorAll('#kingdom > div > input[type=text]')[0];
      let inputKing = document.querySelectorAll('#kingdom > div > input[type=text]')[1];

      if(!kingdomStats.includes(inputKingdom.value.toUpperCase())) {
         inputKingdom.value = '';
         return;
      }
     
      let kingdomName = inputKingdom.value.toUpperCase();
      let kingName = inputKing.value.toUpperCase();

      if(kingName.length < 2) {
         inputKing.value = '';
         return;
      }

      for(let k of mapKingdom) {
         if(k.id === inputKingdom.value.toLowerCase() && k.style.display === 'inline-block') {
            inputKingdom.value = '';
            return;
         }
      }

      let h1 = document.createElement('h1');
      h1.textContent = kingdomName;
      let divCastle = document.createElement('div');
      divCastle.className = 'castle';
      let h2 = document.createElement('h2');
      h2.textContent = kingName;
      //create fieldset
      let fieldset = document.createElement('fieldset');
      let legend = document.createElement('legend');
      legend.textContent = 'Army';
      let pTanks = document.createElement('p');
      pTanks.textContent = 'TANKS - 0';
      let pFighters = document.createElement('p');
      pFighters.textContent = 'FIGHTERS - 0';
      let pMages = document.createElement('p');
      pMages.textContent = 'MAGES - 0';
      let armyOutput = document.createElement('div');
      armyOutput.className = 'armyOutput';
      fieldset.appendChild(legend);
      fieldset.appendChild(pTanks);
      fieldset.appendChild(pFighters);
      fieldset.appendChild(pMages);
      fieldset.appendChild(armyOutput);

      for (let kingdom of mapKingdom) {
         if(kingdom.id === kingdomName.toLowerCase()) {
            kingdom.appendChild(h1);
            kingdom.appendChild(divCastle);
            kingdom.appendChild(h2);
            kingdom.appendChild(fieldset);
            kingdom.style.display = 'inline-block';
         }
      }
   }

   function joinKingdom() {
      let typeArmy = document.querySelectorAll('#characters > div > input[type="radio"]');
      let character = document.querySelectorAll('#characters > div > input[type="text"]')[0];
      let kingdom = document.querySelectorAll('#characters > div > input[type="text"]')[1];

      let army = '';
      if(typeArmy[0].checked) army = 'fighters';
      else if(typeArmy[1].checked) army = 'mages';
      else if(typeArmy[2].checked) army = 'tanks';
      const typesArmyOfKingdom = ['FIGHTERS', 'MAGES', 'TANKS'];
      //if selected radio input field!!!
      if(!typesArmyOfKingdom.includes(army.toUpperCase())) {
         kingdom.value = '';
         return;
      }

      if(character.value.length < 2) {
         character.value = '';
         return;
      }

      if(!kingdomStats.includes(kingdom.value.toUpperCase())) {
         kingdom.value = '';
         return;
      }

      for (let k of mapKingdom) {
         if(k.style.display === 'none' && k.id === kingdom.value.toLowerCase()) {
            kingdom.value = '';
            return;
         }
      }
   
      for (let k of mapKingdom) {
         if(k.id === kingdom.value.toLowerCase() && k.style.display === 'inline-block') {
            let armyOutput = k.querySelector('.armyOutput');
            let textNameArmy = armyOutput.textContent + `${character.value} `;
            armyOutput.textContent = textNameArmy;

            let kingdomArmy = k.querySelectorAll('fieldset > p');
            for (let a of kingdomArmy) {
               let [type, count] = a.textContent.split(' - ');

               if(type === army.toUpperCase()) {
                  let armyCount = Number(count);
                  a.textContent = `${type} - ${++armyCount}`;
               }
            }
         }
      }
   }

   function war() {
      let attackerKingdom = document.querySelectorAll('#actions > input[type="text"]')[0];
      let defenderKingdom = document.querySelectorAll('#actions > input[type="text"]')[1];

      if(!kingdomStats.includes(attackerKingdom.value.toUpperCase())) {
         attackerKingdom.value = '';
         return;
      }

      if(!kingdomStats.includes(defenderKingdom.value.toUpperCase())) {
         defenderKingdom.value = '';
         return;
      }

      if(attackerKingdom.value === defenderKingdom.value) {
         attackerKingdom.value = '';
         defenderKingdom.value = '';
         return;
      }

      let attackerArmy = 0;
      let defenderArmy = 0;
      let attackerKing = '';
      let defenseKing = '';
      for (let k of mapKingdom) {
         if(k.id === attackerKingdom.value.toLowerCase() && k.style.display === 'inline-block') {
            let attKing = k.querySelector('h2');
            attackerKing = attKing.textContent;
            let arms = k.querySelectorAll('fieldset > p');
            for (let a of arms) {
               let [type, count] = a.textContent.split(' - ');
               attackerArmy += armyStats[type]['attack'] * Number(count);
            }  
         }

         if(k.id === defenderKingdom.value.toLowerCase() && k.style.display === 'inline-block') {
            defenseKing = k.querySelector('h2').textContent;
            let arms = k.querySelectorAll('fieldset > p');
            for (let a of arms) {
               let [type, count] = a.textContent.split(' - ');
               defenderArmy += armyStats[type]['defenses'] * Number(count);
            }  
         }
      }

      if(attackerArmy > defenderArmy) {
         for (let k of mapKingdom) {
            if(k.id === defenderKingdom.value.toLowerCase() && k.style.display === 'inline-block') {
               let loseKing = k.querySelector('h2');
               loseKing.textContent = attackerKing;
            }
         }
      }

      attackerKingdom.value = '';
      defenderKingdom.value = '';
   }
}

solve();




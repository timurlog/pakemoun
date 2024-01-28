// IMPORT
import { blaziken, blazikenAttacks, enemyLT, enemyLvl, enemyName, enemyPokemon, enemyRT, fightGameplayTextBox, gardevoir, gardevoirAttacks, playerHp, playerLT, playerLvl, playerMove, playerName, playerPokemon, playerRT, pokemonSelection, pokemonSelectionScreenTop, pokemonSelectionTextBox, teamABtn, teamADisplay, teamBBtn, teamBDisplay } from "./instance.js";
import { ftRoadThemeSfx, ftStopSelectThemeSfx } from "./sound.js";

// FUNCTION FOR TEAM A SELECTION
export function teamASelected() {
    playerPokemon.setAttribute('src', './public/assets/image/pokemon/blaziken-back.gif');
    enemyPokemon.setAttribute('src', './public/assets/image/pokemon/gardevoir-front.gif');
    blazikenAttacks.style.display = 'grid';
    playerName.innerHTML = blaziken.name;
    enemyName.innerHTML = gardevoir.name;
    playerLvl.innerHTML = "<span>Lv.</span>50";
    enemyLvl.innerHTML = "<span>Lv.</span>50";
    playerHp.innerHTML = `${blaziken.hp}/${blaziken.hpMax}`;
    fightGameplayTextBox.innerHTML = `What will ${blaziken.name} do?`
    teamBDisplay.style.transform = 'scaleY(0)';
    teamABtn.style.display = 'none';
    teamBBtn.style.display = 'none';
    setTimeout(() => {
        teamBDisplay.style.display = 'none';
        pokemonSelectionTextBox.innerHTML = 'You chose team "A" composed of Blaziken and Rayquaza.';
        setTimeout(() => {
            teamADisplay.style.transform = 'scale(0)';
            pokemonSelectionTextBox.innerHTML = '';
            setTimeout(() => {
                pokemonSelectionScreenTop.classList.add('screen-top-anim');
                setTimeout(() => {
                    pokemonSelection.style.display = 'none';
                    playerMove.style.display = 'block';
                    ftStopSelectThemeSfx();
                    ftRoadThemeSfx();
                }, 600);
            }, 600);
        }, 3000);
    }, 600);
}

// FUNCTION FOR TEAM B SELECTION
export function teamBSelected() {
    playerPokemon.setAttribute('src', './public/assets/image/pokemon/gardevoir-back.gif');
    enemyPokemon.setAttribute('src', './public/assets/image/pokemon/blaziken-front.gif');
    gardevoirAttacks.style.display = 'grid';
    playerName.innerHTML = gardevoir.name;
    enemyName.innerHTML = blaziken.name;
    playerLvl.innerHTML = "<span>Lv.</span>50";
    enemyLvl.innerHTML = "<span>Lv.</span>50";
    playerHp.innerHTML = `${gardevoir.hp}/${gardevoir.hpMax}`;
    fightGameplayTextBox.innerHTML = `What will ${gardevoir.name} do?`
    enemyLT.setAttribute('src', './public/assets/image/pokemon/blaziken-front.gif');
    enemyRT.setAttribute('src', './public/assets/image/pokemon/rayquaza-front.gif');
    playerLT.setAttribute('src', './public/assets/image/pokemon/deoxys-back.gif');
    playerRT.setAttribute('src', './public/assets/image/pokemon/gardevoir-back.gif');
    teamADisplay.style.transform = 'scaleY(0)';
    teamBBtn.style.display = 'none';
    teamABtn.style.display = 'none';
    setTimeout(() => {
        teamADisplay.style.display = 'none';
        pokemonSelectionTextBox.innerHTML = 'You chose team "B" composed of Gardevoir and Deoxys.';
        setTimeout(() => {
            teamBDisplay.style.transform = 'scale(0)';
            pokemonSelectionTextBox.innerHTML = '';
            setTimeout(() => {
                pokemonSelectionScreenTop.classList.add('screen-top-anim');
                setTimeout(() => {
                    pokemonSelection.style.display = 'none';
                    playerMove.style.display = 'block';
                    ftStopSelectThemeSfx();
                    ftRoadThemeSfx();
                }, 600);
            }, 600);
        }, 3000);
    }, 600);
}
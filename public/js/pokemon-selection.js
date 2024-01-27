import { enemyLT, enemyRT, playerLT, playerMove, playerRT, pokemonSelection, pokemonSelectionScreenTop, pokemonSelectionTextBox, teamABtn, teamADisplay, teamBBtn, teamBDisplay } from "./instance.js";
import { ftRoadThemeSfx, ftStopSelectThemeSfx } from "./sound.js";

export function teamASelected() {
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

export function teamBSelected() {
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
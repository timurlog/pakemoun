import { playerMove, pokemonSelection, pokemonSelectionScreenTop, pokemonSelectionTextBox, teamABtn, teamADisplay, teamBBtn, teamBDisplay } from "./instance.js";
import { ftRoadThemeSfx, ftStopSelectThemeSfx } from "./sound.js";

export function teamASelected() {
    teamBDisplay.style.transform = 'scaleY(0)';
    teamABtn.style.display = 'none';
    teamBBtn.style.display = 'none';
    setTimeout(() => {
        teamBDisplay.style.display = 'none';
        pokemonSelectionTextBox.innerHTML = 'You chose team "A" composed of Blaziken and Rayquaza';
        setTimeout(() => {
            teamADisplay.style.transform = 'scaleY(0)';
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
    teamADisplay.style.transform = 'scaleY(0)';
    teamBBtn.style.display = 'none';
    teamABtn.style.display = 'none';
    setTimeout(() => {
        teamADisplay.style.display = 'none';
        pokemonSelectionTextBox.innerHTML = 'You chose team "B" composed of Gardevoir and Deoxys';
        setTimeout(() => {
            teamBDisplay.style.transform = 'scaleY(0)';
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
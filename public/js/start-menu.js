// IMPORT
import { pokemonSelection, startBtn, startMenu, startMenuTitle } from "./instance.js";
import { ftSelectThemeSfx } from "./sound.js";

// FUNCTION FOR STAT POKEMON SELECTION
export function startMenuDisplayNone() {
    startMenuTitle.style.transform = 'scale(0)';
    startBtn.style.display = 'none';
    setTimeout(() => {
        startMenu.style.display = 'none';
        pokemonSelection.style.display = 'block';
        ftSelectThemeSfx()
    }, 600);
}
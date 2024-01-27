// IMPORT
import { startBtn, teamABtn, teamBBtn } from "./instance.js";
import { movePlayer, stopAnimation } from "./player-move.js";
import { teamASelected, teamBSelected } from "./pokemon-selection.js";
import { ftButtonSfx } from "./sound.js";
import { startMenuDisplayNone } from "./start-menu.js";

// STAR MENU
startBtn.addEventListener('click', () => {
    ftButtonSfx();
    startMenuDisplayNone();
})

// POKEMON SELECTION
teamABtn.addEventListener('click', () => {
    ftButtonSfx();
    teamASelected();
})

teamBBtn.addEventListener('click', () => {
    ftButtonSfx();
    teamBSelected();
})

// PLAYER MOVE
window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopAnimation);
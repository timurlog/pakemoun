import { startBtn, teamABtn, teamBBtn } from "./instance.js";
import { movePlayer, stopAnimation } from "./move-player-function.js";
import { teamASelected, teamBSelected } from "./pokemon-selection.js";
import { ftButtonSfx } from "./sound.js";
import { startMenuDisplayNone } from "./start-menu.js";

startBtn.addEventListener('click', () => {
    ftButtonSfx();
    startMenuDisplayNone();
})

teamABtn.addEventListener('click', () => {
    ftButtonSfx();
    teamASelected();
})

teamBBtn.addEventListener('click', () => {
    ftButtonSfx();
    teamBSelected();
})

window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopAnimation);
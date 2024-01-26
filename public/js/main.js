import { movePlayer, stopAnimation } from "./move-player-function.js";

window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopAnimation);
import { buttonSfx, roadThemeSfx, selectThemeSfx } from "./instance.js";

export function ftButtonSfx() {
    buttonSfx.volume = '0.5';
    buttonSfx.play();
}

export function ftSelectThemeSfx() {
    selectThemeSfx.volume = '0.5';
    selectThemeSfx.loop = true;
    selectThemeSfx.play();
}

export function ftStopSelectThemeSfx() {
    selectThemeSfx.pause();
    selectThemeSfx.currentTime = 0;
}

export function ftRoadThemeSfx() {
    roadThemeSfx.volume = '0.5';
    roadThemeSfx.play();
}
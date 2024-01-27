// IMPORT
import { battleThemeSfx, buttonSfx, roadThemeSfx, selectThemeSfx } from "./instance.js";

// BUTTON CLIC SOUND FX
export function ftButtonSfx() {
    buttonSfx.volume = '0.5';
    buttonSfx.play();
}

// SELECT THEME SOUND FX
export function ftSelectThemeSfx() {
    selectThemeSfx.volume = '0.5';
    selectThemeSfx.loop = true;
    selectThemeSfx.play();
}

export function ftStopSelectThemeSfx() {
    selectThemeSfx.pause();
    selectThemeSfx.currentTime = 0;
}

// ROAD THEME SOUND FX
export function ftRoadThemeSfx() {
    roadThemeSfx.volume = '0.5';
    roadThemeSfx.loop = true;
    roadThemeSfx.play();
}

export function ftStopRoadThemeSfx() {
    roadThemeSfx.pause();
    roadThemeSfx.currentTime = 0;
}

// BATTLE THEME SOUND FX
export function ftBattleThemeSfx() {
    battleThemeSfx.volume = '0.5';
    battleThemeSfx.loop = true;
    battleThemeSfx.play();
}
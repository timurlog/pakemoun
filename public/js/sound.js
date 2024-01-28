// IMPORT
import { battleThemeSfx, blazeKickSfx, bounceSfx, bulkUpSfx, buttonSfx, calmMindSfx, doubleEdgeSfx, dragonAscentSfx, dragonPulseSfx, extremeSpeedSfx, fireBlastSfx, flareBlitzSfx, hyperBeamSfx, megaKickSfx, psychicSfx, psychoBoostSfx, roadThemeSfx, selectThemeSfx, solarBeamSfx, teamButtonSfx, thunderboltSfx } from "./instance.js";

// BUTTON CLIC SOUND FX
export function ftButtonSfx() {
    buttonSfx.volume = '0.5';
    buttonSfx.play();
}

// TEAM BUTTON CLIC SOUND FX
export function ftTeamButtonSfx() {
    teamButtonSfx.volume = '0.5';
    teamButtonSfx.play();
}

// SELECT THEME SOUND FX
export function ftSelectThemeSfx() {
    selectThemeSfx.volume = '0.3';
    selectThemeSfx.loop = true;
    selectThemeSfx.play();
}

export function ftStopSelectThemeSfx() {
    selectThemeSfx.pause();
    selectThemeSfx.currentTime = 0;
}

// ROAD THEME SOUND FX
export function ftRoadThemeSfx() {
    roadThemeSfx.volume = '0.3';
    roadThemeSfx.loop = true;
    roadThemeSfx.play();
}

export function ftStopRoadThemeSfx() {
    roadThemeSfx.pause();
    roadThemeSfx.currentTime = 0;
}

// BATTLE THEME SOUND FX
export function ftBattleThemeSfx() {
    battleThemeSfx.volume = '0.3';
    battleThemeSfx.loop = true;
    battleThemeSfx.play();
}

// POKEMON SFX
export function ftBlazeKickSfx() {
    blazeKickSfx.volume = '0.4';
    blazeKickSfx.play();
}

export function ftFlareBlitzSfx() {
    flareBlitzSfx.volume = '0.4';
    flareBlitzSfx.play();
}

export function ftBulkUpSfx() {
    bulkUpSfx.volume = '0.4';
    bulkUpSfx.play();
}

export function ftBounceSfx() {
    bounceSfx.volume = '0.4';
    bounceSfx.play();
}

export function ftPsychicSfx() {
    psychicSfx.volume = '0.4';
    psychicSfx.play();
}

export function ftDoubleEdgeSfx() {
    doubleEdgeSfx.volume = '0.4';
    doubleEdgeSfx.play();
}

export function ftCalmMindSfx() {
    calmMindSfx.volume = '0.4';
    calmMindSfx.play();
}

export function ftThunderboltSfx() {
    thunderboltSfx.volume = '0.4';
    thunderboltSfx.play();
}

export function ftPsychoBoostSfx() {
    psychoBoostSfx.volume = '0.4';
    psychoBoostSfx.play();
}

export function ftSolarBeamSfx() {
    solarBeamSfx.volume = '0.4';
    solarBeamSfx.play();
}

export function ftMegaKickSfx() {
    megaKickSfx.volume = '0.4';
    megaKickSfx.play();
}

export function ftHyperBeamSfx() {
    hyperBeamSfx.volume = '0.4';
    hyperBeamSfx.play();
}

export function ftDragonAscentSfx() {
    dragonAscentSfx.volume = '0.4';
    dragonAscentSfx.play();
}

export function ftDragonPulseSfx() {
    dragonPulseSfx.volume = '0.4';
    dragonPulseSfx.play();
}

export function ftExtremeSpeedSfx() {
    extremeSpeedSfx.volume = '0.4';
    extremeSpeedSfx.play();
}

export function ftFireBlastSfx() {
    fireBlastSfx.volume = '0.4';
    fireBlastSfx.play();
}
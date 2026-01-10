import kaplay from "kaplay";

export default function makeKaplayCtx() {
    return kaplay({
        global: false,
        pixelDensity: 2,
        touchToMouse: true,
        debug: true, //  TODO: set it false in production
        debugKey: "f2",
        canvas: document.getElementById("game"),
        maxFPS: 60,
    })
}
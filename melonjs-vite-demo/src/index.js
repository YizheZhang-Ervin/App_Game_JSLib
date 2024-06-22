import {
    audio,
    loader,
    state,
    device,
    video,
    utils,
    plugin,
    pool,
    event,
    TextureAtlas,
    input
} from "melonjs";

import "./index.css";

import PlayScreen from "./js/stage/play.js";
import PlayerEntity from "./js/renderables/player.js";
import { SlimeEnemyEntity, FlyEnemyEntity } from './js/renderables/enemies.js';
import CoinEntity from './js/renderables/coin.js';
import DataManifest from "./manifest.js";
import game from './js/game.js';
// import { DebugPanelPlugin } from "debugPlugin";

device.onReady(() => {
    device.pauseOnBlur = false;

    // initialize the display canvas once the device/browser is ready
    if (!video.init(1218, 562, { parent: "screen", scale: "auto" })) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // initialize the debug plugin in development mode.
    if (process.env.NODE_ENV === 'development') {
        import("@melonjs/debug-plugin").then((debugPlugin) => {
            // automatically register the debug panel
            utils.function.defer(plugin.register, this, debugPlugin.DebugPanelPlugin, "debugPanel");
        });
    }

    // register the debug plugin
    // me.plugin.register(DebugPanelPlugin, "debugPanel");

    // Initialize the audio.
    audio.init("mp3,ogg");

    // allow cross-origin for image/texture loading
    loader.setOptions({ crossOrigin: "anonymous" });

    // set and load all resources.
    loader.preload(DataManifest, function () {

        // set the "Play/Ingame" Screen Object
        state.set(state.PLAY, new PlayScreen());

        // set the fade transition effect
        state.transition("fade", "#FFFFFF", 250);

        // register our objects entity in the object pool
        pool.register("mainPlayer", PlayerEntity);
        pool.register("SlimeEntity", SlimeEnemyEntity);
        pool.register("FlyEntity", FlyEnemyEntity);
        pool.register("CoinEntity", CoinEntity, true);

        // load the texture atlas file
        // this will be used by renderable object later
        game.texture = new TextureAtlas(
            loader.getJSON("texture"),
            loader.getImage("texture")
        );

        // add some keyboard shortcuts
        event.on(event.KEYDOWN, (action, keyCode /*, edge */) => {

            // change global volume setting
            if (keyCode === input.KEY.PLUS) {
                // increase volume
                audio.setVolume(audio.getVolume() + 0.1);
            } else if (keyCode === input.KEY.MINUS) {
                // decrease volume
                audio.setVolume(audio.getVolume() - 0.1);
            }

            // toggle fullscreen on/off
            if (keyCode === input.KEY.F) {
                if (!device.isFullscreen()) {
                    device.requestFullscreen();
                } else {
                    device.exitFullscreen();
                }
            }
        });

        // switch to PLAY state
        state.change(state.PLAY);
    });
});

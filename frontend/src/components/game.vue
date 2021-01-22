<template>
  <div
    id="div001"
    ondragstart="return false"
    oncontextmenu="return false"
    onselectstart="return false"
    @click="play()"
  >
    <h1 class="center vh100" v-show="!btnShow">点击任意位置开始游戏</h1>
    <div oncontextmenu="return false" class="noselect" v-show="btnShow">
      <canvas id="bgCanvas"></canvas>
      <canvas id="heroCanvas"></canvas>
      <canvas id="bulletCanvas"></canvas>
      <canvas id="enemyCanvas"></canvas>
      <input id="leftBtn" type="button" :style="btnBg.leftBtn" />
      <input id="rightBtn" type="button" :style="btnBg.rightBtn" />
      <input id="upBtn" type="button" :style="btnBg.upBtn" />
      <input id="downBtn" type="button" :style="btnBg.downBtn" />
      <label id="accLbl">调速:</label>
      <input id="accBtn" type="button" value="点击加速(不可反悔)" />
    </div>
  </div>
</template>

<script>
import start from "../assets/js/gameCanvas.js";
export default {
  name: "EGGame",
  props: {
    status: {
      type: String,
    },
  },
  data() {
    return {
      btnBg: {
        leftBtn: {
          backgroundImage: "url(" + require("../assets/game/left.png") + ")",
          backgroundSize: "cover",
        },
        rightBtn: {
          backgroundImage: "url(" + require("../assets/game/right.png") + ")",
          backgroundSize: "cover",
        },
        upBtn: {
          backgroundImage: "url(" + require("../assets/game/up.png") + ")",
          backgroundSize: "cover",
        },
        downBtn: {
          backgroundImage: "url(" + require("../assets/game/down.png") + ")",
          backgroundSize: "cover",
        },
      },
      btnShow: false,
      playStatus: false,
    };
  },
  methods: {
    play() {
      if (!this.playStatus) {
        this.btnShow = true;
        this.playStatus = true;
        start();
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
canvas {
  box-shadow: 0 0 10px #333;
}
#bgCanvas,
#heroCanvas,
#bulletCanvas,
#enemyCanvas {
  position: absolute;
  left: 0;
  top: 0;
}
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#accBtn {
  width: 192px;
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  z-index: 10;
  color: white;
  background-color: transparent;
}

#accLbl {
  width: 64px;
  height: 64px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  color: white;
  background-color: transparent;
  line-height: 64px;
  text-align: center;
}
</style>
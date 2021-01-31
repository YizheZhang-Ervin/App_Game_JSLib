<template>
  <div id="container">
    <aside>
      <!-- left navigation bar -->
      <el-menu
        id="navbar001"
        default-active="1"
        background-color="#2b2b2b"
        text-color="#fff"
        active-text-color="gold"
        :collapse="menuCollapse"
      >
        <!-- home -->
        <el-menu-item index="1" @click="changeShow('video')">
          <i class="el-icon-s-home"></i>
          <span slot="title">Home</span>
        </el-menu-item>
        <!-- tools -->
        <el-submenu index="2" collapse="false">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Tools</span>
          </template>
          <el-menu-item-group>
            <template slot="title">Tools</template>
            <el-menu-item index="2-1" @click="changeShow('video')">
              <i class="el-icon-video-camera-solid"></i>
              <span slot="title">Video</span>
            </el-menu-item>
            <el-menu-item index="2-2" @click="changeShow('recipe')">
              <i class="el-icon-food"></i>
              <span slot="title">Recipe</span>
            </el-menu-item>
            <el-menu-item index="2-3" @click="changeShow('excel')">
              <i class="el-icon-s-grid"></i>
              <span slot="title">Excel</span>
            </el-menu-item>
            <el-menu-item index="2-4" @click="changeShow('monitor')">
              <i class="el-icon-monitor"></i>
              <span slot="title">Monitor</span>
            </el-menu-item>
            <el-menu-item index="2-5" @click="changeShow('geo')">
              <i class="el-icon-location-outline"></i>
              <span slot="title">Geolocation</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- games -->
        <el-submenu index="3" collapse="false">
          <template slot="title">
            <i class="el-icon-cpu"></i>
            <span>Games</span>
          </template>
          <el-menu-item-group>
            <template slot="title">Games</template>
            <el-menu-item index="3-1" @click="changeShow('game')">
              <i class="el-icon-mouse"></i>
              <span slot="title">Game Canvas</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- group -->
        <el-menu-item index="4" @click="changeShow('group')">
          <i class="el-icon-user"></i>
          <span slot="title">Group</span>
        </el-menu-item>
        <!-- collapse -->
        <el-menu-item index="5" @click="changeMenuCollapse">
          <i class="el-icon-s-fold"></i>
          <span slot="title"
            >Hide (<span class="bgtrans" v-text="mouseX"></span> ,
            <span v-text="mouseY" class="bgtrans"></span>)</span
          >
        </el-menu-item>
      </el-menu>
    </aside>
    <main>
      <!-- components -->
      <EGVideo v-show="videoShow"></EGVideo>
      <EGRecipe v-show="recipeShow"></EGRecipe>
      <EGMonitor v-show="monitorShow"></EGMonitor>
      <EGGeo v-show="geoShow"></EGGeo>
      <EGGroup v-show="groupShow"></EGGroup>
      <EGGame v-show="gameShow" status="go"></EGGame>
      <EGExcel v-show="excelShow"></EGExcel>
      <el-backtop></el-backtop>
    </main>
  </div>
</template>

<script>
import EGVideo from "./video.vue";
import EGRecipe from "./recipe.vue";
import EGMonitor from "./monitor.vue";
import EGGroup from "./group.vue";
import EGGeo from "./geo.vue";
import EGGame from "./game.vue";
import EGExcel from "./excel.vue";

export default {
  name: "EGHome",
  components: {
    EGVideo,
    EGRecipe,
    EGMonitor,
    EGGroup,
    EGGeo,
    EGGame,
    EGExcel,
  },
  data: function () {
    return {
      menuCollapse: true,
      videoShow: true,
      monitorShow: false,
      recipeShow: false,
      groupShow: false,
      geoShow: false,
      gameShow: false,
      excelShow: false,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.changeTitle();
    }, 1000);
    document.onmousemove = this.mouseMove;
  },
  methods: {
    changeTitle() {
      let timer;
      if (document.visibilityState != "visible") {
        timer = setInterval(() => {
          let date = new Date(Date.now());
          document.title =
            "EGGroup-IM " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds();
          if (document.visibilityState == "visible") {
            clearInterval(timer);
            document.title = "EGGroup-IM";
          }
        }, 1000);
      }
    },
    changeMenuCollapse() {
      this.menuCollapse = !this.menuCollapse;
    },
    changeShow(index) {
      switch (index) {
        case "video": {
          this.videoShow = true;
          this.monitorShow = false;
          this.recipeShow = false;
          this.groupShow = false;
          this.geoShow = false;
          this.gameShow = false;
          this.excelShow = false;
          break;
        }
        case "monitor": {
          this.videoShow = false;
          this.monitorShow = true;
          this.recipeShow = false;
          this.groupShow = false;
          this.geoShow = false;
          this.gameShow = false;
          this.excelShow = false;
          break;
        }
        case "recipe": {
          this.videoShow = false;
          this.monitorShow = false;
          this.recipeShow = true;
          this.groupShow = false;
          this.geoShow = false;
          this.gameShow = false;
          this.excelShow = false;
          break;
        }
        case "group": {
          this.videoShow = false;
          this.monitorShow = false;
          this.recipeShow = false;
          this.groupShow = true;
          this.geoShow = false;
          this.gameShow = false;
          this.excelShow = false;
          break;
        }
        case "geo": {
          this.videoShow = false;
          this.monitorShow = false;
          this.recipeShow = false;
          this.groupShow = false;
          this.geoShow = true;
          this.gameShow = false;
          this.excelShow = false;
          break;
        }
        case "game": {
          this.videoShow = false;
          this.monitorShow = false;
          this.recipeShow = false;
          this.groupShow = false;
          this.geoShow = false;
          this.gameShow = true;
          this.excelShow = false;
          break;
        }
        case "excel": {
          this.videoShow = false;
          this.monitorShow = false;
          this.recipeShow = false;
          this.groupShow = false;
          this.geoShow = false;
          this.gameShow = false;
          this.excelShow = true;
          break;
        }
      }
    },
    mouseMove(ev) {
      ev = ev || window.event;
      var mousePos = this.mouseCoords(ev);
      //获取当前的x,y坐标
      this.mouseX = mousePos.x;
      this.mouseY = mousePos.y;
    },
    mouseCoords(ev) {
      //鼠标移动的位置
      if (ev.pageX || ev.pageY) {
        return { x: ev.pageX, y: ev.pageY };
      }
      return {
        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: ev.clientY + document.body.scrollTop - document.body.clientTop,
      };
    },
  },
};
</script>

<style scoped>
main {
  overflow: hidden;
}
</style>

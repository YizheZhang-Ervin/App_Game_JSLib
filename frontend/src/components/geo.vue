<template>
  <div>
    <p style="position: absolute">{{ userLocation }}</p>
    <div id="charts" style="height: 100vh; width: 90vw"></div>
  </div>
</template>

<script>
var echarts = require('echarts');
import '../assets/js/china.js';

export default {
  name: "EGGeo",
  data: function () {
    return {
      userLocation: "",
    };
  },
  mounted() {
    this.plot();
    this.getLocation();
  },
  methods: {
    sendNotification(position) {
      let latitude =
        position.coords.latitude > 0
          ? position.coords.latitude + " N"
          : position.coords.latitude + " S";
      let longitude =
        position.coords.longitude > 0
          ? position.coords.longitude + " E"
          : position.coords.longitude + " W";
      this.userLocation = `Your Location is \n (${latitude}, ${longitude})`;
      var n = new Notification("地理位置确认", {
        body: this.userLocation,
        tag: "eggroup",
        requireInteraction: false,
        data: {
          loc: this.userLocation,
        },
      });
      n.onclick = function () {
        n.close();
      };
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.sendNotification);
      }
    },
    plot: function () {
      let myChart = echarts.init(document.getElementById("charts"));
      let option = {
        series: [
          {
            type: "map",
            map: "china",
            zoom: 1,
            roam: true,
            scaleLimit: {
              min: 1,
              max: 10,
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
</style>
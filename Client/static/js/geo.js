Vue.component('eg-geo', {
    data: function () {
        return {
            
        }
    },
    mounted(){
        this.plot()
    },
    methods: {
        convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        },
        plot: function () {
            let myChart = echarts.init(document.getElementById('charts'));
            let option = {
                series: [{
                    type: 'map',
                    map: 'world',
                    zoom: 1,
                    roam: true,
                    scaleLimit: {
                        min: 1,
                        max: 10
                    },
                }],

            }
            myChart.setOption(option);
        }
    },
    template: `
<div>
<div id="charts" style="height:100vh;width:90vw"></div>
</div>
    `
})
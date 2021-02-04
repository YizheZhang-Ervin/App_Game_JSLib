var app = new Vue({
    el: '#app',
    data() {
        return {
            cgShow: false,
            unityShow: true,
            btnShow: false,
            playStatus: false,
        }
    },
    mounted() {
        setInterval(() => {
            this.checkVisibility();
        }, 1000);
    },
    methods: {
        changeShow(key, keyPath) {
            if (key == "canvas") {
                this.cgShow = true;
                this.unityShow = false;
                document.getElementById("iframe001").src="";
            } else {
                this.cgShow = false;
                this.unityShow = true;
            }
        },
        checkVisibility: function () {
            let vs = document.visibilityState;
            let date = new Date(Date.now());
            if (vs == "visible") {
                document.title = "EGGroup - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            }
        },
        play() {
            if (!this.playStatus) {
                this.btnShow = true;
                this.playStatus = true;
                start();
            }
        },
    }
});
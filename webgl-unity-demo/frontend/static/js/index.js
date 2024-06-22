var app = new Vue({
    el: '#app',
    data() {
        return {
            homeShow: true,
            unityShow: false
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
                this.unityShow = false;
                this.homeShow = false;
                document.getElementById("iframe001").src = "";
            } else if (key == "home") {
                this.unityShow = false;
                this.homeShow = true;
            } else {
                this.unityShow = true;
                this.homeShow = false;
            }
        },
        checkVisibility: function () {
            let vs = document.visibilityState;
            let date = new Date(Date.now());
            if (vs == "visible") {
                document.title = "EGGroup - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            }
        }
    }
});
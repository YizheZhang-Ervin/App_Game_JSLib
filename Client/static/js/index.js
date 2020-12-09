new Vue({
    el:"#app",
    data:function(){
        return{
            menuCollapse:true,
            homeShow:true,
            monitorShow:false,
            toolShow:false,
            groupShow:false,
        }
    },
    methods:{
        changeMenuCollapse(){
            this.menuCollapse = !this.menuCollapse;
        },
        changeShow(index){
            switch(index){
                case 'home':{
                    this.homeShow=true;
                    this.monitorShow=false;
                    this.toolShow=false;
                    this.groupShow = false;
                    break;
                }
                case 'monitor':{
                    this.homeShow=false;
                    this.monitorShow=true;
                    this.toolShow=false;
                    this.groupShow = false;
                    break;
                }
                case 'tool':{
                    this.homeShow=false;
                    this.monitorShow=false;
                    this.toolShow=true;
                    this.groupShow = false;
                    break;
                }
                case 'group':{
                    this.homeShow=false;
                    this.monitorShow=false;
                    this.toolShow=false;
                    this.groupShow = true;
                    break;
                }
            }
        },
    }
})
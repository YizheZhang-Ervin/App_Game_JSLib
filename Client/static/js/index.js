new Vue({
    el:"#app",
    data:function(){
        return{
            menuCollapse:true,
            homeShow:true,
            monitorShow:false,
            meetingShow:false,
            groupShow:false,
            geoShow:false,
        }
    },
    mounted(){
        setInterval(()=>{
            this.changeTitle()
        },1000)
    },
    methods:{
        changeTitle(){
            let timer;
            if(document.visibilityState!="visible"){
                timer = setInterval(()=>{
                    let date = new Date(Date.now())
                    document.title = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                    if(document.visibilityState=="visible"){
                        clearInterval(timer);
                        document.title = "EGGroup-IM"
                    }
                },1000)
            }
        },
        changeMenuCollapse(){
            this.menuCollapse = !this.menuCollapse;
        },
        changeShow(index){
            switch(index){
                case 'home':{
                    this.homeShow=true;
                    this.monitorShow=false;
                    this.meetingShow=false;
                    this.groupShow = false;
                    this.geoShow = false;
                    break;
                }
                case 'monitor':{
                    this.homeShow=false;
                    this.monitorShow=true;
                    this.meetingShow=false;
                    this.groupShow = false;
                    this.geoShow = false;
                    break;
                }
                case 'meeting':{
                    this.homeShow=false;
                    this.monitorShow=false;
                    this.meetingShow=true;
                    this.groupShow = false;
                    this.geoShow = false;
                    break;
                }
                case 'group':{
                    this.homeShow=false;
                    this.monitorShow=false;
                    this.meetingShow=false;
                    this.groupShow = true;
                    this.geoShow = false;
                    break;
                }
                case 'geo':{
                    this.homeShow=false;
                    this.monitorShow=false;
                    this.meetingShow=false;
                    this.groupShow = false;
                    this.geoShow = true;
                    break;
                }
            }
        },
    }
})
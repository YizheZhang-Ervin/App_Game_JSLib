new Vue({
    el:"#app",
    data:function(){
        return{
            menuCollapse:true,
            videoShow:false,
            monitorShow:false,
            recipeShow:true,
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
                case 'video':{
                    this.videoShow=true;
                    this.monitorShow=false;
                    this.recipeShow=false;
                    this.groupShow = false;
                    this.geoShow = false;
                    break;
                }
                case 'monitor':{
                    this.videoShow=false;
                    this.monitorShow=true;
                    this.recipeShow=false;
                    this.groupShow = false;
                    this.geoShow = false;
                    break;
                }
                case 'recipe':{
                    this.videoShow=false;
                    this.monitorShow=false;
                    this.recipeShow=true;
                    this.groupShow = false;
                    this.geoShow = false;
                    break;
                }
                case 'group':{
                    this.videoShow=false;
                    this.monitorShow=false;
                    this.recipeShow=false;
                    this.groupShow = true;
                    this.geoShow = false;
                    break;
                }
                case 'geo':{
                    this.videoShow=false;
                    this.monitorShow=false;
                    this.recipeShow=false;
                    this.groupShow = false;
                    this.geoShow = true;
                    break;
                }
            }
        },
    }
})
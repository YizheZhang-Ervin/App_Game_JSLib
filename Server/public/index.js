new Vue({
    el: '#app',
    data: function() {
      return { 
            showHome:true,
            showPro:false,
            showGroup:false,
            showGroupDetail:false,
            memberDetail:{},
            members:[{
                index:'1',
                name:"张以哲",
                location:"波士顿",
                pro:"全栈, 前端",
                img:'./static/ervin.jpg',
                mail:"zhang.yizhe@northeastern.edu",
                phone:"保密",
                contact:"<a href='https://ervinzhang.pythonanywhere.com/' target='_new'>个人网站</a>",
                linkedin:"https://www.linkedin.com/in/yizhe-zhang/",
                title:"CKO",
                exp1:"全栈开发, 前端开发",
                exp2:"<p>房产网 (Angular+Express+MongoDB)\
                </p><p>博客网 (React+Django+Sqlite)</p>\
                <p>游戏网 (Vue+Express+Mysql)</p>",
                exp3:"NEU, UCLA, NTU",
                exp4:"Python, JavaScript/Node.js, SQL",
                exp5:"汉语, 英语"
            },{
                index:'2',
                name:"何仕杰",
                location:"上海",
                pro:"数据库",
                img:"./static/sky.jpg",
                mail:"hsj@hsj.com",
                phone:"保密",
                contact:"保密",
                linkedin:"https://www.linkedin.com/in/%E4%BB%95%E6%9D%B0-%E4%BD%95-98a516190/",
                title:"CPO",
                exp1:"数据库",
                exp2:"<p>未知</p><p>未知</p><p>未知</p>",
                exp3:"NTU",
                exp4:"SQL",
                exp5:"汉语, 英语"
            },{
                index:'3',
                name:"石烜逵",
                location:"广州",
                pro:"SAP",
                img:"./static/colin.jpg",
                mail:"sxk@sxk.com",
                phone:"保密",
                contact:"保密",
                linkedin:"https://www.linkedin.com/in/%E7%83%9C%E9%80%B5-%E7%9F%B3-17162219a/",
                title:"CCO",
                exp1:"SAP",
                exp2:"<p>未知</p><p>未知</p><p>未知</p>",
                exp3:"NTU",
                exp4:"SAP",
                exp5:"汉语, 英语, 日语"
            },{
                index:'4',
                name:"陆其杰",
                location:"无锡",
                pro:"销售",
                img:"./static/lqj.jpg",
                mail:"lqj@lqj.com",
                phone:"保密",
                contact:"保密",
                linkedin:"#",
                title:"CBO",
                exp1:"未知",
                exp2:"<p>未知</p><p>未知</p><p>未知</p>",
                exp3:"NTU",
                exp4:"未知",
                exp5:"汉语, 英语"
            },{
                index:'4',
                name:"陈灵健",
                location:"南通",
                pro:"未知",
                img:"./static/clj.jpg",
                mail:"clj@clj.com",
                phone:"保密",
                contact:"保密",
                linkedin:"#",
                title:"CHO",
                exp1:"未知",
                exp2:"<p>未知</p><p>未知</p><p>未知</p>",
                exp3:"NTU",
                exp4:"未知",
                exp5:"汉语, 英语"
            }]
     }
    },
    methods:{
        changePage:function(index){
            switch(index){
                case 1:{
                    this.showHome=true;
                    this.showPro=false;
                    this.showGroup=false;
                    this.showGroupDetail = false;
                    break;
                }
                case 2:{
                    this.showHome=false;
                    this.showPro=true;
                    this.showGroup=false;
                    this.showGroupDetail = false;
                    break;
                }
                case 3:{
                    this.showHome=false;
                    this.showPro=false;
                    this.showGroup=true;
                    this.showGroupDetail = false;
                    break;
                }
            }
        },
        changePageDetail:function(member){
            this.showGroup = false;
            this.memberDetail = member;
            this.showGroupDetail = true;
        }
    }
  })
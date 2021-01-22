<template>
<div id="groupComponent">
    <!-- 列表 -->
    <div class="scroll-v" v-show="listShow">
    <div class="space-v">
        <el-card v-for="m in members" shadow="hover" :key=m.name>
            <div class="around" @click="changeListDetailShow(m)">
                <el-image style="height:150px;width:250px;" :src="m.img" fit="cover">
                </el-image>
                <div>{{m.name}}</div>
                <div>{{m.location}}</div>
                <div>{{m.pro}}</div>
            </div>
        </el-card>
    </div>
    </div>
    <!-- 单人详细 -->
    <div class="scroll-v" v-show="detailShow">
    <el-button circle icon="el-icon-arrow-left" @click="changeListDetailShow('back')"></el-button>
    <el-row type="flex" justify="space-around" class="space-v">
        <!-- 左边 -->
        <el-col :span="6">
            <el-card :body-style="{padding:'0px'}">
                <img width="100%" :src="memberDetail.img">
                <div style="padding: 14px;">
                    <el-button type="text" icon="el-icon-message">邮箱: {{memberDetail.mail}}
                    </el-button>
                    <br />
                    <el-button type="text" icon="el-icon-phone-outline">电话:
                        {{memberDetail.phone}}</el-button>
                    <br />
                    <el-button type="text" icon="el-icon-user">联系: <span
                            v-html="memberDetail.contact"></span></el-button>
                    <el-divider></el-divider>
                    <div class="around">
                        <a :href="memberDetail.linkedin">
                            <el-button circle>ln</el-button>
                        </a>
                        <el-divider direction="vertical"></el-divider>
                        <a href="javascript:window.print()">
                            <el-button icon="el-icon-printer" circle></el-button>
                        </a>
                    </div>
                </div>
            </el-card>
        </el-col>
        <!-- 右边 -->
        <el-col :span="15">
            <!-- 名字 -->
            <div class="between">
                <h1>{{memberDetail.name}}
                    <span class="font-small">{{memberDetail.title}}</span>
                </h1>
                <el-image style="width: 70px; height: 80px" :src="logo" fit="contain">
                </el-image>
            </div>
            <!-- 专业领域 -->
            <div>
                <el-divider content-position="left">专业领域</el-divider>
                <p>{{memberDetail.exp1}}</p>
            </div>
            <!-- 项目经历 -->
            <div>
                <el-divider content-position="left">项目经历</el-divider>
                <div v-html="memberDetail.exp2"></div>
            </div>
            <!-- 教育背景 -->
            <div>
                <el-divider content-position="left">教育背景</el-divider>
                <p>{{memberDetail.exp3}}</p>
            </div>
            <!-- 职业技能 -->
            <div>
                <el-divider content-position="left">职业技能</el-divider>
                <p>{{memberDetail.exp4}}</p>
            </div>
            <!-- 工作语言 -->
            <div>
                <el-divider content-position="left">工作语言</el-divider>
                <p>{{memberDetail.exp5}}</p>
            </div>
            <!-- 按钮 -->
            <div class="text-right">
                <el-button>下载简历</el-button>
            </div>
        </el-col>
    </el-row>
    </div>
</div>
</template>

<script>
export default {
    name: "EGGroup",
    data: function () {
        return {
            listShow: true,
            detailShow: false,
            logo:require("../assets/img/im.png"),
            memberDetail: {},
            members: [{
                index: '1',
                name: "张以哲",
                location: "波士顿",
                pro: "全栈, 前端",
                img: require("../assets/img/ervin.jpg"),
                mail: "zhang.yizhe@northeastern.edu",
                phone: "保密",
                contact: "<a href='https://ervinzhang.pythonanywhere.com/' target='_new'>个人网站</a>",
                linkedin: "https://www.linkedin.com/in/yizhe-zhang/",
                title: "CKO",
                exp1: "前端/全栈开发, 游戏开发, FinTech",
                exp2: "<p>房产网 (Angular+Express+MongoDB+Ngzorro)\
                </p><p>博客网 (React+Django+Sqlite+Antd+Echarts)</p>\
                <p>游戏网 (Vue+Express+Mysql+ElementUI+Echarts)</p>\
                <p>金融算法 (Vue+Django+Sqlite+ElementUI)</p>\
                <p>共享单车 (Django+Sqlite+Echarts)</p>",
                exp3: "NEU, UCLA, NTU",
                exp4: "Python, JavaScript",
                exp5: "汉语, 英语"
            }, {
                index: '2',
                name: "何仕杰",
                location: "上海",
                pro: "数据库",
                img: require("../assets/img/sky.jpg"),
                mail: "hsj@hsj.com",
                phone: "保密",
                contact: "保密",
                linkedin: "https://www.linkedin.com/in/%E4%BB%95%E6%9D%B0-%E4%BD%95-98a516190/",
                title: "CPO",
                exp1: "数据库",
                exp2: "<p>未知</p><p>未知</p><p>未知</p>",
                exp3: "NTU",
                exp4: "SQL",
                exp5: "汉语, 英语"
            }, {
                index: '3',
                name: "石烜逵",
                location: "广州",
                pro: "SAP",
                img: require("../assets/img/colin.jpg"),
                mail: "sxk@sxk.com",
                phone: "保密",
                contact: "保密",
                linkedin: "https://www.linkedin.com/in/%E7%83%9C%E9%80%B5-%E7%9F%B3-17162219a/",
                title: "CCO",
                exp1: "SAP",
                exp2: "<p>未知</p><p>未知</p><p>未知</p>",
                exp3: "NTU",
                exp4: "SAP",
                exp5: "汉语, 英语, 日语"
            }, {
                index: '4',
                name: "陆其杰",
                location: "无锡",
                pro: "销售",
                img: require("../assets/img/lqj.jpg"),
                mail: "lqj@lqj.com",
                phone: "保密",
                contact: "保密",
                linkedin: "#",
                title: "CBO",
                exp1: "未知",
                exp2: "<p>未知</p><p>未知</p><p>未知</p>",
                exp3: "NTU",
                exp4: "未知",
                exp5: "汉语, 英语"
            }, {
                index: '4',
                name: "陈灵健",
                location: "南通",
                pro: "未知",
                img: require("../assets/img/clj.jpg"),
                mail: "clj@clj.com",
                phone: "保密",
                contact: "保密",
                linkedin: "#",
                title: "CHO",
                exp1: "未知",
                exp2: "<p>未知</p><p>未知</p><p>未知</p>",
                exp3: "NTU",
                exp4: "未知",
                exp5: "汉语, 英语"
            }]
        }
    },
    methods: {
        changeListDetailShow: function (member) {
            if (member == "back") {
                this.listShow = true;
                this.detailShow = false;
            } else {
                this.listShow = false;
                this.memberDetail = member;
                this.detailShow = true;
            }
        }
    },
}
</script>

<style scoped>
.el-divider__text{
    background-color: white!important;
    color:black!important;
    font-weight: bold!important;
}
</style>
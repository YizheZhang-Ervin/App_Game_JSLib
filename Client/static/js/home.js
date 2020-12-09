Vue.component('eg-home', {
    data: function () {
      return {
        count: "home"
      }
    },
    template: `
    <div id="homeComponent">
    <!-- 底部 -->
<footer class="space-v">
    <!-- 底部菜单列表 -->
    <el-row class="text-center">
        <el-col :span="6">
            <ul>
                <li>专业介绍</li>
                <li>经济学基础</li>
                <li>计算机基础</li>
                <li>管理学基础</li>
            </ul>
        </el-col>
        <el-col :span="6">
            <ul>
                <li>信息系统</li>
                <li>软件开发</li>
                <li>产品设计</li>
                <li>测试运维</li>
            </ul>
        </el-col>
        <el-col :span="6">
            <ul>
                <li>信息管理</li>
                <li>数据相关</li>
                <li>管理科学</li>
                <li>情报处理</li>
            </ul>
        </el-col>
        <el-col :span="6">
            <ul>
                <li>相关方向</li>
                <li>战略咨询</li>
                <li>市场销售</li>
                <li>其他</li>
            </ul>
        </el-col>
    </el-row>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 底部标签 -->
    <el-row class="text-center">
        <el-col :span="9">
            <span>©IM 2020 00000000</span>
        </el-col>
        <el-col :span="2">
            <el-avatar icon="el-icon-trophy">
            </el-avatar>

        </el-col>
        <el-col :span="2">
            <el-avatar icon="el-icon-trophy">
            </el-avatar>
        </el-col>
        <el-col :span="2">
            <el-avatar icon="el-icon-trophy">
            </el-avatar>
        </el-col>
        <el-col :span="9">
            <span>法律声明</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>网站地图</span>
        </el-col>
    </el-row>
</footer>
    </div>
    `
  })
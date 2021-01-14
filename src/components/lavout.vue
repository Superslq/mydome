<!--  -->
<template>
  <el-container class="page">
    <el-header>header</el-header>
    <el-container>
      <el-aside style="width: 150px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        > 
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>管理系统</span>
            </template>
          
              <el-menu-item index="/student">学生管理</el-menu-item>
              <el-menu-item index="/course">课程管理</el-menu-item>
           
          </el-submenu>
         
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}

.el-header {
  background: blue;
}
.el-aside {
  background: #545c64;
}
.el-main {
  background: darkturquoise;
}
.el-submenu .el-menu-item{
    min-width: 150px;
}
</style>
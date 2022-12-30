<template>
    <el-menu :default-active="this.$router.path"
             router mode="horizontal"
             class="el-menu-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @open="handleOpen"
             @close="handleClose">
        <el-menu-item index="/">首页</el-menu-item>
             <el-menu-item index="/views/NewsView">研究动态</el-menu-item>
             <el-menu-item index="/views/AchievementView">研究成果</el-menu-item>
             <el-menu-item index="/views/TeamView">团队成员</el-menu-item>
             <el-menu-item index="/views/DatabaseView">数据库</el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
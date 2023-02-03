<template>
  <div class="wrapper">
    <div class="header"><HeaderView /></div>
     <div class="main">
      <el-row>
         <div style="background: #FFFFFF;height: 25px;width: 100%;line-height: 25px">
           <el-col :span="24">
             <el-page-header @back="onBack">
                <template #content>
                   <span class="text-large font-600 mr-3"> 研究动态</span>
                </template>
                <template #extra>
                   <el-breadcrumb :separator-icon="ArrowRight">
                     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                     <el-breadcrumb-item>研究动态</el-breadcrumb-item>
                   </el-breadcrumb>
                </template>
             </el-page-header>
           </el-col>
         </div>
      </el-row>
      <el-divider />
      <ArticleList />
    </div>
    <div class="footer"><FooterView /></div>
  </div>
</template>
<script lang="ts" setup>
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import ArticleList from '@/components/ArticleList'
import { Search} from '@element-plus/icons-vue'
const onBack = () => {
   history.back()
}
</script>
<style>
.main-container{
  min-height: calc(100vh - 100px);
}
.el-divider--horizontal{
     margin: 8px 0;
     background: 0 0;
}
.box-card {
  height: 480px;
}
.wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .header {
        flex: 0;
    }

    .main{
        flex: 1;
    }

    .footer {
        flex: 0;
    }
</style>
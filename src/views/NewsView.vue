<template>
    <div>
      <el-row>
        <HeaderView />
      </el-row>
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
      <el-card class="box-card">
      <ArticleList />
      </el-card>
      <el-row>
        <FooterView />
      </el-row>

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
.el-divider--horizontal{
     margin: 8px 0;
     background: 0 0;
}
.box-card {
  height: 480px;
}
</style>
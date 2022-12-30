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
                   <span class="text-large font-600 mr-3"> 数据库</span>
                </template>
                <template #extra>
                   <el-breadcrumb :separator-icon="ArrowRight">
                     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                     <el-breadcrumb-item>数据库</el-breadcrumb-item>
                   </el-breadcrumb>
                </template>
             </el-page-header>
           </el-col>
         </div>
       </el-row>
       <el-divider />
       <el-card class="box-card">
       <el-row>
           <el-col v-for="(o, index) in 8" :key="o" :span="8" :offset="index > 0 ? 0.5 : 0">
               <el-card class="card">
                   <el-button size="large" type="primary" color="#626aef" :icon="Edit">{{ItemList[index]}}</el-button>
               </el-card>
           </el-col>
       </el-row>
       </el-card>
       <el-row>
           <FooterView />
       </el-row>
    </div>
</template>
<script lang="ts" setup>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
const ItemList = ['全国建材碳排放','建筑建材隐含碳','全国建筑业施工碳排放','建筑运行碳排放全国*省级*城市',
                 '建筑面积','排放因子','城镇污水处理碳排放','城市生活垃圾处理碳排放']
const onBack = () => {
   history.back()
}
</script>
<style>
.flex-grow {
  flex-grow: 1;
}
.el-divider--horizontal{
     margin: 8px 0;
     background: 0 0;
}
.box-card {
  height: 500px;
}
</style>
<template>
   <div>
       <el-row>
           <HeaderView />
       </el-row>

       <el-row>
           <div style="width: 100%">
                <NavigatorView />
           </div>
       </el-row>
       <el-row>
         <div style="background: #FFFFFF;height: 20px;width: 100%;line-height: 20px">
          <el-col :span="24">
             <div style="font-size: 15px;width: 1025px;text-align: left;display: inline-block">最新动态</div>
             <div style="width: 200px;text-align: right;display: inline-block">
                <el-link type="danger">more>></el-link>
             </div>
          </el-col>
         </div>
       </el-row>
       <el-row>
              <el-col :span="12">
              <el-divider />
              <div style="width: 600px;text-align: center;display: inline-block">
              <ImageView />
              </div>
              </el-col>
              <el-col :span="12">
              <el-divider />
              <div style="width: 600px;display: inline-block">
              <ArticleList />
              </div>
              </el-col>
       </el-row>
       <el-row>
          <el-col :span="12">
             <div style="font-size: 15px;width: 275px;text-align: left;display: inline-block">关于我们</div>
             <div style="width: 200px;text-align: right;display: inline-block">
                <el-link type="danger">more>></el-link>
             </div>
          </el-col>
          <el-col :span="12">
             <div style="font-size: 15px;width: 375px;text-align: left;display: inline-block">成果展示</div>
             <div style="width: 200px;text-align: right;display: inline-block">
                <el-link type="danger">more>></el-link>
             </div>
          </el-col>
       </el-row>
       <el-row>
          <el-col :span="9">
             <el-divider />
             <div style="width: 450px;display: inline-block">
              <ContactList />
             </div>
          </el-col>
          <el-col :span="3">
          </el-col>
          <el-col :span="11">
             <el-divider />
             <div style="width: 450px;display: inline-block">
              <AchievementList />
             </div>
          </el-col>
       </el-row>
       <FooterView />
   </div>

</template>

<script lang="ts" setup>
import ImageView from '@/components/ImageView'
import ArticleList from '@/components/ArticleList'
import ContactList from '@/components/ContactList'
import AchievementList from '@/components/AchievementList'
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import NavigatorView from '@/components/NavigatorView'
import {
  Search,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeIndex = ref('1')
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.el-divider--horizontal{
     margin: 8px 0;
     background: 0 0;
}
</style>
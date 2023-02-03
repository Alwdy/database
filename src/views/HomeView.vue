<template>
   <div class="wrapper">
       <div class="header"><HeaderView /></div>
       <div class="main">
       <el-row>
         <div style="background: #FFFFFF;height: 20px;width: 100%;line-height: 20px">
          <el-col :span="24">
             <div style="font-size: 15px;width: 90%;text-align: left;display: inline-block">最新动态</div>
             <div style="width: 10%;text-align: right;display: inline-block">
                <el-link @click="news" type="danger">more>></el-link>
             </div>
          </el-col>
         </div>
       </el-row>
       <el-row>
              <el-col :span="10">
              <el-divider />
              <ImageView />
              </el-col>
              <el-col :span="14">
              <el-divider />
              <TemplateNew />
              </el-col>
       </el-row>
       <el-row>
          <el-col :span="12">
             <div style="font-size: 15px;width: 82%;text-align: left;display: inline-block">团队成员</div>
             <div style="width: 10%;text-align: right;display: inline-block">
                <el-link @click="team" type="danger">more>></el-link>
             </div>
          </el-col>
          <el-col :span="12">
             <div style="font-size: 15px;width: 82%;text-align: left;display: inline-block">成果展示</div>
             <div style="width: 10%;text-align: right;display: inline-block">
                <el-link @click="achievement" type="danger">more>></el-link>
             </div>
          </el-col>
       </el-row>
       <el-row>
          <el-col :span="9">
             <el-divider />
             <ShowTeam />
          </el-col>
          <el-col :span="2">
             <el-divider />
          </el-col>
          <el-col :span="1">
          </el-col>
          <el-col :span="11">
             <el-divider />
             <HomeAchievement />
          </el-col>
       </el-row>
       </div>
     <div class="footer">
       <FooterView />
     </div>
   </div>
</template>

<script lang="ts" setup>
import ImageView from '@/components/ImageView'
import HomeNews from '@/components/HomeNews'
import TemplateNew from '@/components/TemplateNew'
import ShowTeam from '@/components/ShowTeam'
import HomeAchievement from '@/components/HomeAchievement'
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import { useRouter } from 'vue-router'
import {
  Search,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeIndex = ref('1')
const router = useRouter()
function news(){
	router.push({
		path:'/views/NewsView', //B页面的路径
	})
}
function team(){
	router.push({
		path:'/views/TeamView', //B页面的路径
	})
}
function achievement(){
	router.push({
		path:'/views/AchievementView', //B页面的路径
	})
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
.main-container{
  min-height: calc(100vh - 100px);
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
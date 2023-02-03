<template>
  <div class="wrapper">
    <div class="header"><HeaderView /></div>
     <div class="main">
      <el-row>
         <div style="background: #FFFFFF;height: 25px;width: 100%;line-height: 25px">
           <el-col :span="24">
             <el-page-header @back="onBack">
                <template #content>
                   <div v-for="article in info.list" v-show="article.ID==ID">
                     <span class="text-large font-600 mr-3"> {{article.title}}</span>
                   </div>
                </template>
                <template #extra>
                   <el-breadcrumb :separator-icon="ArrowRight">
                     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                     <el-breadcrumb-item :to="{ path: '/views/NewsView'}">研究动态</el-breadcrumb-item>
                     <el-breadcrumb-item>正文</el-breadcrumb-item>
                   </el-breadcrumb>
                </template>
             </el-page-header>
           </el-col>
         </div>
      </el-row>
      <el-divider />
      <div v-for="article in info.list" v-show="article.ID==ID">
          <TeamPdf :pdfUrl="article.content">
          </TeamPdf>
      </div>
    </div>
    <div class="footer"><FooterView /></div>
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import TeamPdf from '@/components/TeamPdf'
import axios from 'axios';

    export default{
        name: "NewsDetail",
        components: {HeaderView,FooterView,TeamPdf},
        data: function () {
            return {
                info: '',
                ID: '',
            }
        },
        mounted() {
            this.getArticle();

        },
        methods: {
            getArticle() {
             axios
            .get('/api/news/getNewsList')
            .then(response => {
                 this.info = response.data['data'];
                 this.ID = this.$route.query.id;
                 console.log(this.ID);
            });
           },
           onBack(){
               history.back()
            }
        }
    }

</script>
<style>
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
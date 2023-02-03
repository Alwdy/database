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
          <el-row>
            <el-col :span="22">
            <div style="font-size: 25px;width: 100%;text-align: center;">
              {{article.title}}
            </div>
            </el-col>
            <el-col :span="2">
            <el-button type="primary" plain @click="handleAgreement">预览</el-button>
            </el-col>
            <el-dialog
              v-model="showPdf"

              :append-to-body='true'
               width="'80%'"
              :before-close="closePreviewClick"
              top="200px"
            center>
                 <div v-for="article in info.list" v-show="article.ID==ID">
                    <PdfView :pdfUrl="article.content" />
                 </div>
            </el-dialog>
          </el-row>

          <el-row>
            <el-col :span="22">
              <div style="font-size: 14px;width: 100%;text-align: center;">
                {{article.title}}
              </div>
            </el-col>
          </el-row>
          <div style="font-size: 13px;width: 100%;text-align: center;">
             <span>下载链接：</span>
             <el-link :href="'http://www.cbeed.cn'+article.content">{{'http://www.cbeed.cn'+article.content}}
             </el-link>
          </div>
      </div>
    </div>
    <div class="footer"><FooterView /></div>
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import PdfView from '@/components/PdfView'
import axios from 'axios';

    export default{
        name: "AboutView",
        components: {HeaderView,FooterView,PdfView},
        data: function () {
            return {
                info: '',
                ID: '',
                showPdf: false,
                loading: true,
            }
        },
        mounted() {
            this.getArticle();

        },
        methods: {
            getArticle() {
             axios
            .get('/api/achievement/getAchievementList')
            .then(response => {
                 this.info = response.data['data'];
                 this.ID = this.$route.query.id;
                 console.log(this.ID);
            });
           },
           handleAgreement() {
               this.showPdf = true
           },
           closePreviewClick() {
               this.showPdf = false
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
body {
  margin: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
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

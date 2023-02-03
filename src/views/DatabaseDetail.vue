<template>
  <div class="wrapper">
    <div class="header"><HeaderView /></div>
    <div class="main">
      <el-row>
      <div style="width: 100%">
        <NavigatorView />
      </div>
      </el-row>
      <el-row>
         <div style="background: #FFFFFF;height: 25px;width: 100%;line-height: 25px">
           <el-col :span="24">
             <el-page-header @back="onBack">
                <template #content>
                   <span class="text-large font-600 mr-3"> {{name}}</span>
                </template>
                <template #extra>
                   <el-breadcrumb :separator-icon="ArrowRight">
                     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                     <el-breadcrumb-item :to="{ path: '/views/DatabaseView' }">数据库</el-breadcrumb-item>
                     <el-breadcrumb-item>数据列表</el-breadcrumb-item>
                   </el-breadcrumb>
                </template>
             </el-page-header>
           </el-col>
         </div>
      </el-row>
      <el-divider direction="horizontal"/>
      <div class="common-layout" style="height: 450px;">
         <el-container class="container">
            <el-aside width="450px">
                <div style="font-size: 20px;text-align: center;margin-top: 5px;">{{name}}</div>
                <div style="font-size: 20px;text-align: center;margin-top: 25px;">
                <el-tree
                   ref="tree"
                   :data="treeData"
                   default-expand-all
                   highlight-current
                   @node-click="click"
                   node-key="id"
                   :current-node-key="current"
                >
                </el-tree>
                </div>

            </el-aside>
            <el-divider direction="vertical" />
            <el-main>
               <div id="tables">
                   <el-table :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe
                   :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                   highlight-current-row
                   height="350px"
                   style="border:1px solid #dfe6ec;"
                   v-loading="loading"
                   @filter-change="filterChange"
                   :key="isUpdate">
                      <el-table-column prop="ID" label="ID" width="80" />
                      <el-table-column prop="title" label="Name" width="350" />
                      <el-table-column prop="year" label="Year" width="120"
                      :filters="filter"
                      column-key="year"/>
                      <el-table-column label="Operation" key="slot">
                        <template #default="scope">
                          <el-button type="primary" plain @click="preview">预览</el-button>
                          <el-dialog
                            v-model="showPdf"
                            :append-to-body='true'
                            width="'80%'"
                            :before-close="closePreviewClick"
                            top="200px"
                            center>
                              <PdfView :pdfUrl="'/api'+scope.row.content" />
                          </el-dialog>
                          <el-button type="primary" plain @click="download(scope.row.content)">下载</el-button>
                        </template>
                      </el-table-column>
                   </el-table>
                   <div style="text-align: center;margin-top: 25px;" class="pagination">
                   <el-pagination
                       background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-sizes="[6,12, 24]"
                       :page-size="pagesize"
                       layout="sizes,prev, pager,next,jumper, ->,total,"
                       :total="total"
                   >
                   </el-pagination>
                   </div>
               </div>
            </el-main>
         </el-container>
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
        name: "DatabaseDetail",
        components: {HeaderView,FooterView,PdfView},
        data: function () {
            return {
                total: 0,
                list: [],
                current: 0,
                ID: '',
                name: '',
                idList: [],
                filter: [],
                isUpdate: true,
                showPdf: false,
                currentPage: 1, //默认显示页面为1
                pagesize: 6, //    每页的数据条数
                databaseList: [],
                treeData: [
                   {
                       id: this.$route.query.id,
                       label:"",
                       children:[]
                   },
                ],
                param: {params:{
                    parentId: "",
                    year: "",
                    ordering: "-year",
                }},
            }
        },
        mounted() {
            this.getArticle();

        },
        methods: {
            getArticle() {
            axios.all([
                axios
		        .get('/api/database/getPermDatabaseList',{params:{parentId: this.$route.query.id}})
			    .then(res => res.data),
	            ]).then(
		        axios.spread((val1) => {
                this.databaseList = val1['data'].list;
                let arr = val1['data'].list.map(item=>{
                    return{
                      label: item.title,
                      id: item.ID
                    };
                });
                this.idList = val1['data'].list.map(item=>{
                    return{
                      id: item.ID
                    };
                });
                this.name=this.$route.query.name;
                this.treeData[0].label=this.$route.query.name;
                this.treeData[0].id=this.$route.query.id;
                this.treeData[0].children=arr;
                this.current=arr[0].id;
                console.log('两个接口全部加载完成',arr[0].id) ;  // 1,2
                this.$nextTick(() => {
                     this.$refs.tree.setCurrentKey(this.current);
                     this.param={params:{parentId: arr[0].id,ordering: "-year",}};
                     console.log(this.param);
                     this.getRes();

                });
		        })
	            ).catch(err => {
		             console.log(err) ;
	            })
           },
           onBack(){
               history.back()
           },
           formatDate(row, column) {
               let data = row[column.property];
               if(data == null) {
                  return null;
               }
               let dt = new Date(data)
               return dt.getFullYear()
           },
           preview() {
               this.showPdf = true
           },
           closePreviewClick() {
               this.showPdf = false
           },
           download(e){
               window.location.href = 'http://www.cbeed.cn'+e
           },
           handleSizeChange: function(size) {
                this.pagesize = size;
                console.log(this.pagesize)
            },
            //点击第几页
            handleCurrentChange: function(currentPage) {
                this.currentPage = currentPage;
                /*console.log(this.currentPage) */
            },
           async filterChange(filterObj){   // 该方法会对每个row执行
                console.log(filterObj.year);
                var selecArr=[];
                let list=this.list
                let year= filterObj.year
                if (filterObj.year.length > 0) {
                    this.param.params.year=filterObj.year[0];
                    await this.getRes();
                    for(let i=0;i<filterObj.year.length;i++){
                    console.log(i)
                    var obj=list.find( (obj) =>{
                       return obj.year === filterObj.year[i]
                    })
                        selecArr.push(obj)
                    }
               } else {
                    console.log("点击重置");
               }
               console.log(selecArr)
               this.list=selecArr
               this.filter = this.list.map(item=>{
                    return{
                      text: item.year,
                      value: parseInt(item.year),
                    };
                })
           },
           click(data,node){
               this.isUpdate=!this.isUpdate;
               console.log(node)
               if(parseInt(data.id) < 10){
               }else{
                axios
                .get('/api/database/getPermDatabaseList',{params:{ordering: "-year",parentId: data.id}})
                .then(response => (
                this.param.params.parentId = data.id,
                this.list = response.data['data'].list,
                this.total= response.data['data'].total,
                this.filter = response.data['data'].list.map(item=>{
                    return{
                      text: item.year,
                      value: parseInt(item.year),
                    };
                }),
                this.filter = this.unique(this.filter)
                ))
               }
           },
           unique(arr) {
              const res = new Map();
              return arr.filter((arr) => !res.has(arr.value) && res.set(arr.value, 1));
           },
           async getRes(){
               await axios
                .get('/api/database/getPermDatabaseList',this.param)
                .then(response => (
                   this.list = response.data['data'].list,
                   this.temp = response.data['data'].list,
                   this.total= response.data['data'].total,
                   this.filter = response.data['data'].list.map(item=>{
                    return{
                      text: item.year,
                      value: parseInt(item.year),
                    };
                    }),
                  this.filter = this.unique(this.filter)

                ))
           }
        }
    }

</script>
<style scoped>
.el-divider--horizontal{
     margin: 8px 0;
     background: 0 0;
}
.el-divider--vertical{
  width:2px;
  height: 450px;
  margin: 0 8px;
  vertical-align:middle;
  position:relative;
}
.container .el-aside {
  background: #FFFFFF;
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
<template>
  <div style="height: 400px">
    <div v-for="article in list.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-bind:key="article.ID" id="articles">
        <el-row>
           <el-col :span="20">
              <div class="article-title" style="text-align: left">
                <el-link @click="detail(article)">{{article.title}}
                </el-link>
              </div>
           </el-col>
           <el-col :span="4">
              <div style="font-size: 10px;text-align: right;color: gray">{{ formatted_time(article.CreatedAt) }}</div>
           </el-col>
        </el-row>
    </div>
  </div>
    <div style="text-align: center">
    <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        layout="prev, pager,next,jumper,total,"
        :total="total"
        >
    </el-pagination>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ArticleList',
        data: function () {
            return {
                list: [],
                total: 0,
                currentPage: 1, //默认显示页面为1
                pagesize: 8, //    每页的数据条数
                keyword: this.$route.query.keyword,
            }
        },
        mounted() {
            this.getData();
        },
        watch: {
            $route(to, from) {
            //监听路由是否变化
            if (to.query.keyword != from.query.keyword) {
                 this.keyword=to.query.keyword;
                 this.getData(); //重新加载数据
            }
            },
        },
        methods: {
            getData(){
                axios.all([
		        axios.get('/api/news/getNewsList')
			    .then(res => res.data),
		        axios
			    .get('/api/achievement/getAchievementList')
			    .then(res => res.data)
	            ]).then(
		        axios.spread((val1,val2) => {
			    // val 是数组中每个接口返回的值 res.data
			    const list1=val1['data'].list.concat(val2['data'].list);
			    this.list = list1.filter((p)=>{//返回过滤后的数组
                    return p.title.indexOf(this.keyword) !==-1
                });
                this.total=this.list.length;
			    console.log('两个接口全部加载完成',val1,val2) ;  // 1,2
		        })
	            ).catch(err => {
		             console.log(err) ;
	            })
            },
            formatted_time: function (iso_date_string) {
                const date = new Date(iso_date_string);
                return date.toLocaleDateString()
            },
            detail(article) {
                if(article.image){
                     window.location.href = article.content;
                } else{
                     this.$router.push({path:'/views/AchievementDetail',query: {id: article.ID}});
                }
            },
            //点击第几页
            handleCurrentChange: function(currentPage) {
                this.currentPage = currentPage;
                /*console.log(this.currentPage) */
            },

        }
    }

</script>

<!-- "scoped" 使样式仅在当前组件生效 -->
<style scoped>
    #articles {
        padding: 10px;
    }

    .el-link {
        margin-right: 8px;
    }
    .el-link .el-icon--right.el-icon {
        vertical-align: text-bottom;
    }

</style>
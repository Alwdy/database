<template>
  <div style="height: 400px">
    <div v-for="article in list.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-bind:key="article.ID" id="articles">
        <el-row>
           <el-col :span="20">
              <div class="article-title" style="text-align: left">
                <el-link :href="article.content">{{article.title}}
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
            }
        },
        mounted() {
            axios
                .get('/api/news/getNewsList')
                .then(response => (this.list = response.data['data'].list,
                this.total=response.data['data'].total))
        },
        methods: {
            formatted_time: function (iso_date_string) {
                const date = new Date(iso_date_string);
                return date.toLocaleDateString()
            }

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
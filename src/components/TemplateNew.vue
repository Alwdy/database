<template>
    <div v-for="(article,index) in info.list" v-show="article.ID<7" id="articles">
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
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HomeNews',
        data: function () {
            return {
                info: '',
            }
        },
        mounted() {
            axios
                .get('/api/news/getNewsList')
                .then(response => (this.info = response.data['data']))
        },
        methods: {
            formatted_time: function (iso_date_string) {
                const date = new Date(iso_date_string);
                return date.toLocaleDateString()
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
<template>
    <div v-for="article in info.list" v-show="article.ID<9" v-bind:key="article.ID" id="articles">
        <el-row>
           <el-col :span="20">
              <div class="article-title" style="text-align: left">
                <el-link @click="detail(article.ID)">{{article.title}}</el-link>
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
        name: 'HomeAchievement',
        data: function () {
            return {
                info: '',
            }
        },
        mounted() {
            axios
                .get('/api/achievement/getAchievementList')
                .then(response => (this.info = response.data['data']))
        },
        methods: {
            formatted_time: function (iso_date_string) {
                const date = new Date(iso_date_string);
                return date.toLocaleDateString()
            },
            detail(ID) {
                this.$router.push({path:'/views/AchievementDetail',query: {id: ID}});
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
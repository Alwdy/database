<template>
  <el-row>
    <el-col
      v-for="(o, index) in info.list"
      :key="o"
      :span="7"
      :offset= "1"
    >
       <el-card @click.native="show(o.ID,o.title)" :body-style="{ padding: '10px' }" shadow="hover" class="box-card">
         <el-image style="width:50%;height:57%;" :src="'http://www.cbeed.cn'+o.image" :fit="contain" />
        <div style="padding: 25px">
          <span>{{o.title}}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios';
import {Delete} from '@element-plus/icons-vue'
export default {
    components: {Delete},
    data() {
        return {
          info: '',
        };
    },
    mounted() {
            axios
                .get('/api/database/getPermDatabaseList',{params:{level:"1"}})
                .then(response => (this.info = response.data['data']))
        },
    methods: {
            formatted_time: function (iso_date_string) {
                const date = new Date(iso_date_string);
                return date.toLocaleDateString()
            },
            show(ID,Name) {
            this.$router.push({path:'/views/DatabaseDetail',query: {id: ID,name:Name}});
            },

    },
}
</script>
<style scoped>
.box-card {
  height: 180px;
  width: 300px;
  border-radius: 14px;
  margin-top: 25px;
  line-height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
}
</style>
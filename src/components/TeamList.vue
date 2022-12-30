<template>
  <el-row>
    <el-col
      v-for="(o, index) in info.list"
      :key="o"
      :span="8"
      :offset="index > 0 ? 0.5 : 0"
    >
      <el-card class="box-card">
        <el-image :fit="contain"
          :src="url+o.image"
          class="image"
        />
        <div style="padding: 14px">
          <span>{{o.name}}</span>
          <div class="bottom">
            <span>{{ o.desc }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios';
export default {
      data() {
        return {
          url: 'http://www.cbeed.cn',
          info: '',
        };
    },
    mounted() {
            axios
                .get('/api/team/getTeamList')
                .then(response => (this.info = response.data['data']))
        }
}
</script>
<style scoped>
.box-card {
  height: 500px;
  width: 300px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
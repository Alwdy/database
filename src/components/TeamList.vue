<template>
  <el-row>
    <el-col
      v-for="(o, index) in info.list"
      :key="o"
      :span="6"
      :offset="index > 0 ? 0.5 : 0"
    >
      <el-card @click.native="show(o.ID)" shadow="hover" class="box-card" >
        <div style="padding: 10px;height: 275px;width: 184px">
        <el-image
          style="width:100%;height:100%;"
          :src="url+o.image"
          :fit="scale-down"
          class="image"
        />
        </div>
        <div style="padding: 5px">
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
        },
    methods:{
        show(ID) {
            this.$router.push({path:'/views/TeamDetail',query: {id: ID}});
        },
    }
}
</script>
<style scoped>
.box-card {
  height: 375px;
  width: 250px;
}
.bottom {
  margin-top: 10px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
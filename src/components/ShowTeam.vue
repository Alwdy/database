<template>
  <el-carousel :interval="2000" type="card" arrow="always" height="320px" @click.native="linkTo" class="images">
    <el-carousel-item v-for="item in info.list" :key="item.ID">
        <el-image @click.native="show(item.ID)" style="width:100%;height:100%;" :src="url+item.image" :fit="contain" />
    </el-carousel-item>
  </el-carousel>
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
.images{
    padding-left: 30px;
}
</style>
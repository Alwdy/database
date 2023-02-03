<template>
  <el-carousel :interval="5000" arrow="always" @click.native="linkTo">
    <el-carousel-item v-for="item in info.list" :key="item.ID">
        <el-image @click.native="show(item.ID)" style="width:100%;height:87%;" :src="url+item.image" :fit="contain" />
        <div style="font-size: 10px;text-align: center">{{item.title}}</div>
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
                .get('/api/news/getNewsList')
                .then(response => (this.info = response.data['data']))
        },
    methods:{
        show(ID) {
            this.$router.push({path:'/views/NewsDetail',query: {id: ID}});
        },
    }
}
</script>
<style scoped>
</style>
<template>
  <el-carousel :interval="5000" arrow="always" @click.native="linkTo">
    <el-carousel-item v-for="item in info.list" :key="item.ID">
        <img style="object-fit: scale-down;width:100%;height:100%;" :src="url+item.image" class="image">
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
        }
}
</script>
<style scoped>
</style>
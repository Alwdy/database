<template>
   <div class="logo">
      <el-image style="width: 80px; height: 80px" :src="url" :fit="contain" />
    </div>
</template>

<script>
export default {
  name: 'LogoView',
  data(){
  	return{
  		url:require('@/assets/logo.png')
  	}
  }
}
</script>
<template>
   <div class="logo">
      <el-image style="width: 100px; height: 100px" :src="url" :fit="contain" />
    </div>
</template>

<script>
export default {
  name: 'LogoView',
  data(){
  	return{
  		url:require('@/assets/code.png')
  	}
  }
}
</script>
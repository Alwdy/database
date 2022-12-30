<template>
   <div class="logo">
      <el-image style="width: 120px; height: 120px" :src="url" :fit="contain" />
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
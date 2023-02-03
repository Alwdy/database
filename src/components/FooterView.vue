<template>
     <div class="app-foot">
            <el-row>
            <el-col :span="22">
                <div style="font-size: 15px;text-align: center;" class="item">
                地址:重庆市沙坪坝区沙正街 174 号
                </div>
                <div style="font-size: 15px;text-align: center;" class="item">
                    <span>Powered by CBEED</span>
                    <el-divider direction="vertical" />
                    <span>Copyright flipped-aurora团队</span>
                </div>
            </el-col>
            <el-col :span="2">
                <CodeView />
            </el-col>
            </el-row>
    </div>
</template>

<script lang="ts" setup>
import CodeView from '@/components/CodeView'
</script>
<style scoped>
.app-foot {
  min-height: 100px;
  background-color: #eeeeee;
  margin-top: 25px;
}
.item {
    padding: 5px 10px;
    margin: 15px;
}
</style>
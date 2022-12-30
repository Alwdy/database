<template>
     <div style="background: #EEEEEE;height: 120px;width: 100%;line-height: 120px">
            <el-row>
            <el-col :span="20">
                <div style="font-size: 15px;height: 30px;width: 500px;text-align: center">
                地址:重庆市沙坪坝区沙正街 174 号
                </div>
                <div style="font-size: 15px;width: 500px;text-align: center;display: inline-block">备案号</div>
            </el-col>
            <el-col :span="4">
                <CodeView />
            </el-col>
            </el-row>
    </div>
</template>

<script lang="ts" setup>
import CodeView from '@/components/CodeView'
</script>
<style scoped>
</style>
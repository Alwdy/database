<template>
    <div style="background: #83D131;height: 80px;width: 100%;line-height: 80px">
        <el-col :span="24" :offset="0">
            <!--在这个栅格里面再开辟一个24列的el-row-->
            <el-row>
                <!--logo区域-->
                <el-col :span="2">
                   <div style="height: 40px;width: 40px;line-height: 40px">
                      <LogoView />
                   </div>
                </el-col>

                 <el-col :span="17" style="color: white;">
                    <div style="font-size: 20px;width: 500px;text-align: left;display: inline-block">
                    中国建筑能耗与碳排放研究</div>
                 </el-col>
                 <el-col :span="5">
                    <div style="width: 175px;text-align: center;display: inline-block">
                       <el-input v-model="input1" class="w-50 m-2" placeholder="Type something">
                       </el-input>
                    </div>
                    <div style="width: 50px;text-align: right;display: inline-block">
                       <el-button :icon="Search" circle />
                    </div>
                 </el-col>
            </el-row>
        </el-col>
    </div>
</template>
<script lang="ts" setup>
import LogoView from '@/components/LogoView'
import {Search,} from '@element-plus/icons-vue'
</script>
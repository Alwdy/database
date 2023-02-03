<template>
    <div style="background: #83D131;width: 100%;line-height: 80px">
            <el-row>
                <div style="height: 40px;width: 8%;line-height: 40px">
                    <LogoView />
                </div>
                <div style="font-size: 20px;width: 57%;text-align: left;display: inline-block">
                    中国建筑能耗与碳排放研究</div>

                    <div style="width: 15%;text-align: center;display: inline-block">
                       <el-input v-model="keyword" class="w-50 m-2" placeholder="Please Type Keyword" clearable>
                       </el-input>
                    </div>
                    <div style="width: 5%;text-align: center;display: inline-block">
                       <el-button :icon="Search" @click="search" circle />
                    </div>
                    <div style="width: 15%;display: inline-block" v-if="showLogin==null">
                       <el-avatar style="width: 20%"> user </el-avatar>
                       <el-link style="width: 80%" @click="login">登录/注册</el-link>
                    </div>
                    <div style="width: 15%;display: inline-block" v-if="showLogin!=null">
                       <el-avatar style="width: 20%"> {{showLogin[0].toUpperCase()}} </el-avatar>
                       <el-link style="width: 80%" @click="logout">退出登录</el-link>
                    </div>
                 <div style="width: 100%">
                   <NavigatorView />
                 </div>
            </el-row>
            <el-dialog
            v-model="dialogVisible"
            title="Tips"
            width="30%"
            >
                <span>The keyword can't be null!</span>
                <template #footer>
                <span class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">
                   Confirm
                </el-button>
                </span>
                </template>
            </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import LogoView from '@/components/LogoView'
import NavigatorView from '@/components/NavigatorView'
import {Search,} from '@element-plus/icons-vue'
import axios from "axios"
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const keyword = ref('')
const showLogin = ref(window.sessionStorage.getItem("username"))
const dialogVisible = ref(false)
const search = (val) => {
    if(keyword.value ===""){
        dialogVisible.value=true;
    }else{
        router.push({path:'/views/SearchResult',query: {keyword: keyword.value}})
    }
}
const login = () => {
   router.push('/views/LoginView')
}
const logout = () => {
   window.sessionStorage.removeItem("token");
   window.sessionStorage.removeItem("username");
   showLogin.value=null;
}
</script>
<style scoped>
</style>
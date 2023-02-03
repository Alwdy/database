<template>
  <div class="wrapper">
    <div class="header"><HeaderView /></div>
     <div class="main">
      <el-row>
         <div style="background: #FFFFFF;height: 25px;width: 100%;line-height: 25px">
           <el-col :span="24">
             <el-page-header @back="onBack">
                <template #content>
                   <div v-for="article in info.list" v-show="article.ID==ID">
                     <span class="text-large font-600 mr-3"> {{article.title}}</span>
                   </div>
                </template>
                <template #extra>
                   <el-breadcrumb :separator-icon="ArrowRight">
                     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                     <el-breadcrumb-item :to="{ path: '/views/NewsView'}">研究动态</el-breadcrumb-item>
                     <el-breadcrumb-item>正文</el-breadcrumb-item>
                   </el-breadcrumb>
                </template>
             </el-page-header>
           </el-col>
         </div>
      </el-row>
      <el-divider />
      <div
         class="callback float"
         @click="onClick"
         @mousedown="down"
         @touchstart="down"
         @mousemove="move"
         @touchmove="move"
         @mouseup="end"
         @touchend="end"
         ref="fu"
      >
         <img @click="callback" src="@/assets/logo.png" />
      </div>
    </div>
    <div class="footer"><FooterView /></div>
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import axios from 'axios';

    export default{
        name: "AboutView",
        components: {HeaderView,FooterView},
        data: function () {
            return {
                info: '',
                isLoading: false,
                flags: false, //控制使用
                position: {
                    x: 0,
                    y: 0,
                },
                nx: "",
                ny: "",
                dx: "",
                dy: "",
                xPum: "",
                yPum: "",
            }
        },
        methods: {
            callback() {
                this.$router.go(-1);
            },
            onRefresh() {
                // window.location.reload();
                setTimeout((res) => {
                console.log(res);
                this.isLoading = false;
            }, 1000);
            },
    down() {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = this.$refs.fu.offsetLeft;
      this.dy = this.$refs.fu.offsetTop;
    },
    move() {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        let width = window.innerWidth - this.$refs.fu.offsetWidth; //屏幕宽度减去自身控件宽度
        let height = window.innerHeight - this.$refs.fu.offsetHeight; //屏幕高度减去自身控件高度
        this.xPum < 0 && (this.xPum = 0);
        this.yPum < 0 && (this.yPum = 0);
        this.xPum > width && (this.xPum = width);
        this.yPum > height && (this.yPum = height);
        // if (this.xPum >= 0 && this.yPum >= 0 && this.xPum<= width &&this.yPum<= height) {
        this.$refs.fu.style.left = this.xPum + "px";
        this.$refs.fu.style.top = this.yPum + "px";
        // }
        //阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function () {
            event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    },
    onClick() {
      //在这里我是作为子组件来使用的
      this.$emit("click");
    },
    },
    }

</script>
<style>
.el-divider--horizontal{
     margin: 8px 0;
     background: 0 0;
}
.wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .header {
        flex: 0;
    }

    .main{
        flex: 1;
    }

    .footer {
        flex: 0;
    }

.callback p {
  font-size: 16px;
  color: #fff;
  background: rgba(56, 57, 58, 0.5);
  border-radius: 50%;
  text-align: center;
  width: 100px;
  height: 100px;
  line-height: 50px;
  font-family: PingFang SC;
  font-weight: 600;
  box-shadow: 0 0 10px #fff;
}
.callback img {
  display: block;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10px rgb(133, 129, 129);
  border-radius: 100%;
  background: #fff;
}
.callback {
  position: fixed;
  top: 40px;
  left: 20px;
  z-index: 99999;
}
.float {
  position: fixed;
  right: 20px;
  top: 60%;
  touch-action: none;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  line-height: 48px;
  color: white;
}
</style>

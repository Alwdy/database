<template>
  <div class="pdf-preview">
    <div v-for="i in state.numPages" :key="i" class="pdf-wrap">
     <vue-pdf-embed :source="state.source" :style="scaleFun" class="vue-pdf-embed" :page="i" width="800" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, computed } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs"; // 获得总页数

const props = defineProps({
    pdfUrl: {
        type: String,
        required: true
    }
})

const state = reactive({
    source: props.pdfUrl, //预览pdf文件地址
    pageNum: 1, //当前页面
    scale: 1, // 缩放比例
    numPages: 0, // 总页数
});

const scaleFun = computed(() => `transform:scale(${state.scale})`)
onMounted(() => {
    const loadingTask = createLoadingTask(state.source);
    loadingTask.promise.then((pdf:{numPages: number}) => {
        state.numPages = pdf.numPages;
    });
});
</script>

<style scoped>
.pdf-preview {
    position: relative;
    padding: 20px 0;
    box-sizing: border-box;
}
.pdf-wrap{
    overflow-y:auto ;
}
.vue-pdf-embed {
    text-align: center;
    width: 800px;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    box-sizing: border-box;
}
</style>
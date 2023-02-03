import { ref } from 'vue'
let flag = ref(true)
const mySwitch = () => {
    const pre_box = document.querySelector('.pre-box')
    const img = document.querySelector("#avatar")
    if (flag.value) {
        pre_box.style.transform = "translateX(100%)"
        pre_box.style.backgroundColor = "#F7F7F7"
        img.src = require("@/assets/logo.png")
    }
    else {
        pre_box.style.transform = "translateX(0%)"
        pre_box.style.backgroundColor = "#F7F7F7"
        img.src = require("@/assets/logo.png")
    }
    flag.value = !flag.value
}
export default mySwitch
import { getItem, setItem } from "@/utils/storage";
import { left } from "@popperjs/core"
import { ref } from "vue"

export default function useAlbum() {

  const img_MaxBoxRef = ref();// 最外层盒子
  const imgBoxRef = ref(); // 装图片的盒子
  const widthArr = ref<number[]>([]);
  const imgOffsetAndWidthArr = ref<string[]>([]);
  const currentItem = ref(0) // 当前导航

  // 随机获取left/top/bottom/right/width值
  function getOffsetOrWidth(index: number, imglenght: number) {
    imgOffsetAndWidthArr.value = getImgOffset(imglenght);
  }

  // 求每张图片的offset值和随机宽度
  /**
   * @param {number} imgNumber 渲染的图片数量
   */
  function getImgOffset(imgNumber: number) {
    // 获取随机宽度集合
    const widthArr = getImgNuber(imgNumber);
    // 随机二二组合
    let imgOffsetArr = [];
    // 如果已经存储了，就直接返回
    if (getItem(`imgOffsetArr${currentItem.value + 1}`)) {
      return JSON.parse(getItem(`imgOffsetArr${currentItem.value + 1}`));
    }

    for (let i = 0; i < imgNumber; i++) {
      const imgs = imgBoxRef.value.children[i];
      // 分两组
      let leftOrRight: Array<number> = [Math.floor(-(Math.random() * 60 + 60)), Math.floor(-(Math.random() * 60 + 60))];
      let topORBottom = [Math.floor(-(Math.random() * 60 + 60)), Math.floor(-(Math.random() * 60 + 60))];

      let offsetOrwidth: string = ''

      if (i == 0) {
        offsetOrwidth = `width:${widthArr[i]}%; left: ${leftOrRight[Math.round(Math.random())]}%; top: ${topORBottom[Math.round(Math.random())]}%;`
      }
      if (i == 1) {
        offsetOrwidth = `width:${widthArr[i]}%; right: ${leftOrRight[Math.round(Math.random())]}%; top: ${topORBottom[Math.round(Math.random())]}%;`
      }
      if (i == 2) {
        offsetOrwidth = `width:${widthArr[i]}%; left: ${leftOrRight[Math.round(Math.random())]}%; bottom: ${topORBottom[Math.round(Math.random())]}%;`
      }
      if (i == 3) {
        offsetOrwidth = `width:${widthArr[i]}%; right: ${leftOrRight[Math.round(Math.random())]}%; bottom: ${topORBottom[Math.round(Math.random())]}%;`
      }
      imgOffsetArr.push(offsetOrwidth)

    }
    // 存取一次性随机offset值和宽度
    if (currentItem.value === 0 && !getItem('imgOffsetArr1')) {
      setItem("imgOffsetArr1", JSON.stringify(imgOffsetArr));
    }
    if (currentItem.value === 1 && !getItem('imgOffsetArr2')) {
      setItem("imgOffsetArr2", JSON.stringify(imgOffsetArr));
    }
    if (currentItem.value === 2 && !getItem('imgOffsetArr3')) {
      setItem("imgOffsetArr3", JSON.stringify(imgOffsetArr));
    }
    if (currentItem.value === 3 && !getItem('imgOffsetArr4')) {
      setItem("imgOffsetArr4", JSON.stringify(imgOffsetArr));
    }
    return JSON.parse(getItem(`imgOffsetArr${currentItem.value + 1}`));
  }

  // 求随机宽度的值
  function getImgNuber(imglenght: number) {
    let widthArr: Array<number> = [];
    for (let i = 0; i < imglenght; i++) {
      const width = Math.floor(Math.random() * 30 + 80);
      widthArr.push(width);
    }
    return widthArr
  }
  return {
    img_MaxBoxRef,
    imgBoxRef,
    getOffsetOrWidth,
    imgOffsetAndWidthArr,
    currentItem
  }
}
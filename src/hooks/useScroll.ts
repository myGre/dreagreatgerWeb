import { ref } from "vue";
import { ElScrollbar } from 'element-plus'

export function useScroll() {

  const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>() // 滚动组件
  const mainRef = ref() // 最外层包裹滚动对象的盒子
  const isBounce = ref(true) // 是否显示或隐藏底部引导
  const currtent = ref(0) // 当前显示的盒子
  const isCurrtent = ref(true) // 是否触发Currtent改变

  // 触发滚动事件
  function onScroll(scroll: { scrollLeft: number, scrollTop: number }) {
    // 是否显示或隐藏底部引导
    scroll.scrollTop > 0 ? isBounce.value = false : isBounce.value = true

    // 鼠标滚动才触发
    if (isCurrtent.value) {
      // 鼠标滚动到不同的页面，显示对应的导航
      let height: number = mainRef.value!.children[0].clientHeight / 1.1
      if (0 < scroll.scrollTop && scroll.scrollTop < height) {
        currtent.value = 0
      }
      if (height < scroll.scrollTop && scroll.scrollTop < 2 * height) {
        currtent.value = 1
      }
      if (2 * height < scroll.scrollTop && scroll.scrollTop < 3 * height) {
        currtent.value = 2
      }
      if (3 * height < scroll.scrollTop && scroll.scrollTop < 4 * height) {
        currtent.value = 3
      }
      if (scroll.scrollTop > 4 * height && scroll.scrollTop < 5 * height) {
        currtent.value = 4
      }
    }
  }
  /**
 * @param {number} distance 当前位置
 * @param {number} targetLocation, 目标位置
 * @param {number} step 每步的长度
 * @return void
   */
  function moveSlow(distance: number, targetLocation
    : number, step: number) {
    let times: any
    // 向下走，步数为正
    if (targetLocation > distance) {
      times = setInterval(() => {
        distance += step
        if (targetLocation < distance) {
          clearInterval(times)
        } else {
          scrollbarRef.value?.setScrollTop(distance)
        }

      }, 1)
    }

    // 向上走，步数为负
    if (targetLocation < distance) {
      times = setInterval(() => {
        distance -= step
        if (targetLocation > distance) {
          clearInterval(times)
        } else {
          scrollbarRef.value?.setScrollTop(distance)
        }
      }, 1)
    }
  }
  // 点击跳到第一条信息
  function btnClick() {
    let targetLocation = mainRef.value!.children[1].clientHeight
    // step = (目标位置减初始位置 * 10) / 100
    let step = (targetLocation - 10) / 100
    moveSlow(0, targetLocation, step)
    currtent.value = 1

  }
  return {
    isBounce,
    scrollbarRef,
    mainRef,
    currtent,
    onScroll,
    btnClick,
    moveSlow,
    isCurrtent
  }
}

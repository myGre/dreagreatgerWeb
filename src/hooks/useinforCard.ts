import { reactive } from 'vue'
import { InforCard } from './interface'

/**
 * @description InforCard 页面操作方法封装
 * @param {Function} api 获取资料卡数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(非必传，默认为{})
 * @param {Boolean} isPageable 是否有分页(非必传，默认为true)
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法(非必传)
 * */
export const useInforCard = (
  api: () => Promise<any>
) => {
  const state = reactive<InforCard.InforCardList>({
    inforCardList: []
  })

  // 初始化图片
  async function getImageList() {
    const { data } = await api();
    state.inforCardList = data;
  }
  return {
    state,
    getImageList
  }
}
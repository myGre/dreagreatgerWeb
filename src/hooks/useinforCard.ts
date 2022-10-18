import { onMounted, reactive } from 'vue'
import { TatleList } from './interface'

/**
 * @description InforCard 页面操作方法封装
 * @param {Function} api 获取资料卡数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(非必传，默认为{})
 * @param {Boolean} isPageable 是否有分页(非必传，默认为true)
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法(非必传)
 * */
export const useInforCard = (
  api: (data?: any) => Promise<any>,
  initParam?: {},
  isPageable?: true,
  dataCallBack?: (data: any) => any
) => {
  const state = reactive<TatleList.State>({
    // 资料卡导航数据
    cardList: [],
    // 分页数据对象
    pageable: {
      pageNo: 1,
      pageSize: 20,
      total: 0
    },
    // 对应资料卡的内容
    contentList: []
  })

  // 初始化
  async function getContentList() {
    try {
      const result = await api({ ...state.pageable, ...initParam });
      state.cardList = result.data;
      // 解构后台返回的分页数据 (如果有分页更新分页信息)
      const { pageNo, pageSize, total } = result;
      updatePageable({ pageNo, pageSize, total });
    } catch (error) {
      console.log(error);
    }

  }

  /**
   * @description 更新分页信息
   * @param {Object} pageable 后台返回的分页数据
   * @return void
   * */
  const updatePageable = (pageable: TatleList.Pageable) => {
    Object.assign(state.pageable, pageable);

  }

  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
    state.pageable.pageSize = val;
    getContentList();
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`);
    state.pageable.pageNo = val;
    getContentList();
  }

  return {
    state,
    getContentList,
    handleSizeChange,
    handleCurrentChange
  }
}
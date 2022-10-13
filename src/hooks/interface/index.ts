export namespace InforCard {
  export interface Pageable {
    pageNo: 1,
    pageSize: 30,
    total: 0
  }
  export interface InforCardList {
    cardList: any[],
    pageable: Pageable,
    contentList: {
      [key: string]: any
    }
  }
}
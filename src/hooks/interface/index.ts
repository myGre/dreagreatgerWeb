export namespace InforCard {
  export interface Pageable {
    pageNo: number,
    pageSize: number,
    total: number
  }
  export interface InforCardList {
    cardList: any[],
    pageable: Pageable,
    contentList: {
      [key: string]: any
    }
  }
}
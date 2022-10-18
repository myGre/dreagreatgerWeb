import http from '../index';
import { ResPage, tag } from '../interface'

// 获取根标签列表
export const getRootTog = (data: tag.ReqTagList) => {
  return http.post<ResPage<tag.ResTagList>>('/togList/page', data);
}
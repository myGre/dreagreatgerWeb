import http from '../index';
import { User } from '../interface';
/**
 * @name 用户模块
 * 
 */
// * 获取资料卡图片·
export const getImage = () => {
  return http.get<User.ResUserImgs>('/user/image')
}
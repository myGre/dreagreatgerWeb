import { Login } from "../interface";
// import qs from "qs"
import { PORT1 } from "../config/servicePort";
import http from "../../api/index"

/**
 * @name 登录模块
 * 
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(PORT1 + `/login`, params);
}
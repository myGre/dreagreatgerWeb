import { createPinia, defineStore } from "pinia";
import { GlobalState } from "./interface";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import { piniaPersistConfig } from "../config/piniaPersist";

export const GlobalStore = defineStore('global', {
  state: (): GlobalState => {
    return {
      token: "",
      userInfo: ""
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    }
  },
  getters: {
  },
  persist: piniaPersistConfig("GlobalState")
});

// 持久化存储
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

export default pinia
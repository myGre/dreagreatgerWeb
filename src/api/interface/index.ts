// * 请求响应参数(不包含data)
export interface Result {
  code: number;
  msg: string;
}


// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data?: T;
}

// * 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: any;
  }
}

// * user模块
export namespace User {
  export interface ResUserImgs {
    id: string;
    image: string;
    title: string;
    csentence: string;
    cparagraph: string;
  }
}
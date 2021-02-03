import T from './i18n';

const DevModel = true;


function getBaseUrl() {
  // if (DevModel) return 'http://192.168.2.103:9090/';

  // if (DevModel) return 'http://192.168.1.103:9090/';x

  // return 'https://testapi.naviguy.com:3344/';
  // return 'https://testapi.naviguy.com/';    //

  return 'https://naviguy.ciie.org/';    // 线上
  // return 'http://192.168.1.5:9090/?debug=true'; // 本地调试
  // return 'http://192.168.1.103:9090/?debug=true'; // 本地调试

}


function getI18nUrl(url) {
  if (T.locale == 'zh_CN' || T.locale == 'zh_cn') {
    return url;
  }

  return url + '?lang=en';
}

//项目首页正式
// export const url_BaseSrc = getBaseUrl()+'ciie2';
// 项目首页开发测试
export const url_BaseSrc = getBaseUrl() + 'neccdh_test';
// 本地
// export const url_BaseSrc = "http://192.168.1.107:9090/";

//分享出去的url
export const url_share = getBaseUrl() + 'ciie2';

//热搜 页面
export const url_hot_search = getI18nUrl(getBaseUrl() + 'lab_intro/hotsearch.html');

// 关于我们 介绍页面
export const url_lab_intro = getI18nUrl(getBaseUrl() + 'lab_intro');

// 整体api地址头
// export const bluetoothUrl = getBaseUrl().slice(0,getBaseUrl().length -1);
// export const apiBaseUrl = 'https://testapi.naviguy.com:3344';
// export const apiBaseUrl = 'https://naviguy.ciie.org/xcxdev';
// 正式
export const apiBaseUrl = 'https://naviguy.ciie.org';

// websocket URL
// export const websocketUrl = 'wss://testapi.naviguy.com:3344';
// 正式
export const websocketUrl = 'wss://testapi.naviguy.com';

//地图定义
// export const MapId = '12e6a0f0-50b0-4344-92ea-ccc497f505d0'; // 鸟巢区域uuid
export const MapId = 'e7d31e40-b88e-40ce-b000-f18012c4d567'; // 国展

// export const AppCode = 'gzjbh_201911';
export const AppCode = 'gzjbh_202011';

// 登录参数
export const AppType = '20bc6effc2eb5c3ba3deafb6d5f8ab41';




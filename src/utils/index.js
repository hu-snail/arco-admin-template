/**
 * @description 判断是否为数组
 * @param {*} val array
 * @returns boolean
 */
export const isArray = (val) => Object.prototype.toString.call(val) === '[object Array]';

/**
 * @description 判断是否为对象
 * @param {*} val object
 * @returns boolean
 */
export const isObject = (val) => typeof val === 'object';

/**
 * @description 判断是否为字符串
 * @param {*} val string
 * @returns boolean
 */
export const isString = (val) => typeof val === 'string';

/**
 *  判断是否是数字
 * @param {Number} val
 */
export const checkNum = (val) => /^\d{1,}$/g.test(val);

/**
 *  判断是否是字母
 * @param {Number} val
 */
export const checkLetter = (val) => /^[a-zA-Z]+$/g.test(val);

/**
 * 判断是否是字母或数字
 * @param {Number || String} val  字符或数字
 */
export const checkNumOrLetter = (val) => /^[0-9a-zA-Z]*$/g.test(val);

/**
 * 判断是否是中文
 * @param {String} data  中文
 */
export const checkChinese = (val) => /^[\u4E00-\u9FA5]+$/g.test(val);

/**
 * 判断是否是邮箱地址
 * @param {String} val
 */
export const checkEmail = (val) => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
  if (reg.test(val)) return true;
};

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} val
 */
export const checkTelphone = (val) => {
  const reg = /^((\+|00)86)?1[3-9]\d{9}$/g;
  if (reg.test(val)) return true;
};

/**
 * 判断是浏览器内核
 */
export const checkBrowser = () => {
  const u = navigator.userAgent;
  const obj = {
    trident: u.indexOf('Trident') > -1, // IE内核
    presto: u.indexOf('Presto') > -1, // opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1 // 火狐内核
  };
  return Object.keys(obj)[Object.values(obj).indexOf(true)];
};

/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
  const u = navigator.userAgent;
  const obj = {
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
    iPad: u.indexOf('iPad') > -1 // 是否iPad
  };
  return Object.keys(obj)[Object.values(obj).indexOf(true)];
};

/**
 * localStorage 存贮
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param {String} key  属性
 * @param {Object} val 值
 */
export const localStorageSet = (key, val) => {
  if (isObject(val)) val = JSON.stringify(val);
  localStorage.setItem(key, val);
};

/**
 * localStorage 获取
 * @param {String} key  属性
 */
export const localStorageGet = (key) => localStorage.getItem(key);

/**
 * localStorage 移除
 * @param {String} key  属性
 */
export const localStorageRemove = (key) => localStorage.removeItem(key);

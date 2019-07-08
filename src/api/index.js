import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000/main/'

// 首页开始
// 对返回的数据进行数据拦截
axios.interceptors.response.use(function (response) {
  // 返回response.data
  return response.data
}, function (error) {
  return Promise.reject(error)
})

// 今日推荐分类接口
export function getClassify () {
  return axios.get('classify')
}

// 品牌特卖接口
export function getSaleHot () {
  return axios.get('saleHot')
}

// 唯品快抢接口
export function getSaleFast () {
  return axios.get('saleFast')
}

// 首页今日特卖接口
export function getTodaySale () {
  return axios.get('todaySale')
}

// 首页接口结束

// 母婴页面接口开始
// 母婴页面轮播图
export function getFransnanaBanner () {
  return axios.get('slider')
}

// 母婴页面分类
export function getWbClassify () {
  return axios.get('wbClassify')
}

// 母婴页面今日特卖
export function getWbSaleHot () {
  return axios.get('wbSaleHot')
}

// 母婴页面唯品快抢版块
export function getWbSaleFast () {
  return axios.get('wbSaleFast')
}

// 获取主分类页面的左边分类栏
export function getWbLeftNav () {
  return axios.get('wbClassifyLeft')
}

// 分类推荐
export function getWbRecommend () {
  return axios.get('recommend')
}

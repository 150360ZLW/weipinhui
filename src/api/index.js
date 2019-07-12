import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.137.1:3000/main/'

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

export function getRegister () {
  return axios.get('register')
}

// 田定茂
// 轮播接口
export function getCarousel () {
  return axios.get('tcarousel')
}
// 手机接口
export function getCallphone () {
  return axios.get('tcellphone')
}
// 广告
export function getFenlei () {
  return axios.get('tfenlei')
}
// 快抢
export function getTkuai () {
  return axios.get('tkuai')
}
// 小米
export function getTmi1 () {
  return axios.get('tmi1')
}
export function getTmi2 () {
  return axios.get('tmi2')
}
// 展示
export function getShow () {
  return axios.get('show')
}

// lfz

export function getBanner () {
  return axios.get('banner')
}

export function getHomeCate () {
  return axios.get('category')
}

export function getkuaiqiang () {
  return axios.get('weipinkuaiqiang')
}

// 地区馆接口
export function getBrandList () {
  return axios.get('brandList')
}

// 猜你喜欢接口
export function getCainixihuan () {
  return axios.get('cainixihuan')
}

// 更多推荐接口
export function getgengduotuijian () {
  return axios.get('gengduotuijian')
}

// 页头图片接口
export function getYetou () {
  return axios.get('yetou')
}
// 翟龙伟 唯品奢接口
export function getClassname () {
  return axios.get('classname')
}
export function getCataer () {
  return axios.get('cataer')
}
export function getNative () {
  return axios.get('native')
}
export function getFicion () {
  return axios.get('ficion')
}
export function getLiction () {
  return axios.get('liction')
}
// 聂苗苗 国际
// 轮播图接口
export function getBanner1 () {
  return axios.get('banner1')
}
// 展示图接口
export function getComptPlay () {
  return axios.get('playList')
}
// 左滑动接口
export function getLeftslide () {
  return axios.get('leftslide')
}
// 快抢接口
export function getGrabList () {
  return axios.get('grabList')
}
// 猜你喜欢接口
export function getGuessLike () {
  return axios.get('guessLike')
}
// 唯品国际接口
export function getOnlyproduct () {
  return axios.get('onlyproduct')
}
// 李沛钊
export function getMuBanner () {
  return axios.get('Mubanner')
}
export function getMuFenLei () {
  return axios.get('Mufenlei')
}

export function getJiazuihou () {
  return axios.get('Jiazuihou')
}
export function getJiaJing () {
  return axios.get('JiaJing')
}
export function getKuaiQiang () {
  return axios.get('jiaKuaiQiang')
}
export function getKouBei () {
  return axios.get('jiaKouBei')
}
export function getJiaDaPai () {
  return axios.get('jiaDaPai')
}
export function getJiaXunHuan () {
  return axios.get('jiaxunhuan')
}

// 豆欣欣 生活接口
export function getBanner2 () {
  return axios.get('banner2')
}

//第二部分
export function getLiveCate () {
  return axios.get('category2')
}

// 第三部分
export function getLiveThree () {
  return axios.get('three')
}

// 第四部分
export function getLiveFour () {
  return axios.get('four')
}

// 第五部分
export function getLiveFive () {
  return axios.get('five')
}

// 第六部分
export function getLiveSix () {
  return axios.get('six')
}
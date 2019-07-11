function checkTime (i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

export default function getTimer (time) {
  // 1.要返回时分秒
  // 获取当前时间
  var date = new Date()
  var now = date.getTime()
  // 设置截止时间
  var endDate = new Date(time)
  var end = endDate.getTime()

  // 时间差
  var leftTime = end - now
  // 定义变量 d,h,m,s保存倒计时的时间
  var d, h, m, s
  if (leftTime >= 0) {
    d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
    h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
    m = Math.floor(leftTime / 1000 / 60 % 60)
    s = Math.floor(leftTime / 1000 % 60)
  }
  // 将0-9的数字前面加上0，例1变为01
  d = checkTime(d)
  h = checkTime(h)
  m = checkTime(m)
  s = checkTime(s)

  return {
    d,
    h,
    m,
    s
  }
}

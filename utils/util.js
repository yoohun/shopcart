const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const randomNumber=function () {
  let outTradeNo = "";  //订单号
  for (let i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
  {
    outTradeNo += Math.floor(Math.random() * 10);
  }
  outTradeNo = new Date().getTime() + outTradeNo;
  return outTradeNo
}

module.exports = {
  formatTime: formatTime,
  randomNumber: randomNumber
}

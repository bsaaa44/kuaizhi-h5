import Vue from 'vue'
import wx from 'weixin-js-sdk'
import { Toast } from 'vant'
import { hostUrl } from '../../components/Global.vue'

Vue.use(Toast)

function axiosRequest(method, url, params, data, success, fail) {
  Vue.prototype
    .$ajax({
      method: method,
      url: url,
      headers: { 'Access-Control-Allow-Origin': '*', from: 'h5' },
      dataType: 'jsonp',
      data,
      params
    })
    .then(res => {
      if (res.data.errno === 0) {
        success(res)
      } else {
        console.log('test', res.data.errmsg)
        fail(res)

        Toast(res.data.errmsg)
        //请求错误
      }
    })
    .catch(res => {
      Toast(res.response.data.errmsg)
      // console.log(res.response.data.errmsg)
      if (res.response.status == 401) {
        let param = ``
        // getCode(param)
      }
      if (typeof fail == 'function') {
        fail(res)
      }
    })
}
function getCode(param) {
  // const redirect_url = encodeURIComponent(`https://pdz.sync163.com/webpage/`)
  let redirect_url
  if (param) {
    redirect_url = encodeURIComponent(param)
  } else {
    redirect_url = encodeURIComponent(`https://kz.sync163.com/webpage/`)
    // redirect_url = encodeURIComponent(`http://dev.kz.sync163.com/webpage/`)
  }

  const appId = 'wxbcc23d04c3aa4a7c'
  const response_type = 'code'
  const scope = 'snsapi_userinfo'
  const state = 11
  let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirect_url}&response_type=${response_type}&scope=${scope}&state=${state}#wechat_redirect`
  window.location.href = url
}
function login(data) {
  return new Promise((resolve, reject) => {
    axiosRequest(
      'POST',
      'gzh/login',
      '',
      data,
      res => {
        console.log(res)
        // localStorage.setItem('userInfo',res.data.userinfo)
        Vue.prototype.$global.userInfo = res.data.userinfo
        resolve(res)
      },
      res => {
        console.log(res)
        reject()
      }
    )
  })
}
function payRequest(timestamp, nonceStr, pack, signType, paySign, success) {
  console.log(typeof timestamp)
  wx.chooseWXPay({
    timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    nonceStr, // 支付签名随机串，不长于 32 位
    package: pack, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
    signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign, // 支付签名
    success: function(res) {
      if (typeof success == 'function') {
        success(res)
      }
      // 支付成功后的回调函数
    }
  })
}
function wxConfig(success, data) {
  axiosRequest(
    'POST',
    'gzh/jssdk/config',
    '',
    data,
    res => {
      console.log(res)
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.payload.config.appId, // 必填，公众号的唯一标识
        timestamp: res.data.payload.config.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.payload.config.nonceStr, // 必填，生成签名的随机串
        signature: res.data.payload.config.signature, // 必填，签名
        jsApiList: res.data.payload.config.jsApiList // 必填，需要使用的JS接口列表
      })
      wx.ready(function() {
        // alert('调用ready')
        if (typeof success == 'function') {
          success()
        }
      })
    },
    res => {}
  )
}

export default {
  axiosRequest,
  getCode,
  payRequest,
  login,
  wxConfig
}

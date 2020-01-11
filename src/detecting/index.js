// const ua = (lower) => {
//   return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
// };

function ua(lower) {
  return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
}
/**
 * detect IOS
 * From https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 * more see:
 * https://github.com/madrobby/zepto/blob/master/src/detect.js#files
 */
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(ua());
};

const isiPhone = () => {
  return /iPhone/.test(ua());
};

const isIPad = () => {
  return /iPad/.test(ua());
};
/**
 * detect Android
 * From https://stackoverflow.com/questions/6031412/detect-android-phone-via-javascript-jquery
 */
const isAndroid = () => {
  return ua('l').indexOf('android') > -1;
};

/**
 * detect PC / Mobile
 * From https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
 */
const isMobile = () => {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua('l'));
};
const isPC = () => {
  return !isMobile();
};

const isWeixin = () => {
  return /MicroMessenger/i.test(ua('l')); // 微信
};

const isNewsApp = () => {
  return /qqnews/.test(ua()); // 腾讯新闻app
};

const mqqbrowser = () => {
  return /mqqbrowser\//.test(ua()); // QQ浏览器
};

const isQQ = () => {
  return /qq\//.test(ua()); // 手机QQ
};

const isTenvideo = () => {
  return /qqlivebrowser/.test(ua()); // 腾讯视频
};

const isIphoneXmodel = () => {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }
  ];
  if (typeof window !== 'undefined' && window) {
    const { devicePixelRatio, screen } = window;
    const { width, height } = screen;
    return xSeriesConfig.some(
      (item) =>
        item.devicePixelRatio === devicePixelRatio && item.width === width && item.height === height
    );
  }
  return false;
};

const isIE = () => {
  return ieVersion() > 0;
};

/**
 * ie version
 * From https://codepen.io/gapcode/pen/vEJNZN
 * IE 10 ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
 * IE 11 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
 * Edge 12 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
 * Edge 13 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
 */
const ieVersion = () => {
  let uakit = ua();
  let msie = uakit.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(uakit.substring(msie + 5, uakit.indexOf('.', msie)), 10);
  }

  let trident = uakit.indexOf('Trident/');
  if (trident > 0) {
    let rv = uakit.indexOf('rv:');
    return parseInt(uakit.substring(rv + 3, uakit.indexOf('.', rv)), 10);
  }

  let edge = uakit.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, uakit.indexOf('.', edge)), 10);
  }

  return '';
};

export {
  ua,
  isIOS,
  isiPhone,
  isIPad,
  isAndroid,
  isMobile,
  isPC,
  isWeixin,
  isNewsApp,
  isQQ,
  isTenvideo,
  isIphoneXmodel,
  ieVersion,
  isIE,
  mqqbrowser
};

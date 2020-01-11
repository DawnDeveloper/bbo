import { args, noop } from '../arguments/index';

/************************************************************************
 * LOGS
 *************************************************************************/
/**
 * log on mobile html body
 */

function log(msg, styles) {
  let ele = document.getElementById('_bbo_log');
  if (ele === null) {
    ele = document.createElement('div');
    ele.setAttribute('id', '_bbo_log');
    ele.setAttribute('style', 'position:fixed;left:0;top:0;z-index:9999;padding:4px;');
    document.body.appendChild(ele);
  }

  if (styles) {
    for (let style in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, style)) {
        ele.style[style] = styles[style];
      }
    }
  }
  ele.innerHTML = msg;
}

/**
 * bbo.logs('only id&10', 1, 2);
 */
function logs() {
  if (window.console && window.console.log) {
    let onlyId = String(arguments[0]);
    let times = parseInt(onlyId.split('&')[1], 10) || 10;
    let logsCache = _cache.logs;

    if (!logsCache[onlyId]) logsCache[onlyId] = {};
    if (!logsCache[onlyId].once) logsCache[onlyId].once = 1;

    if (logsCache[onlyId].once <= times) {
      console.log.apply(console, args(arguments, 1));
      logsCache[onlyId].once++;
    }
  }
}

function removeConsole(clear) {
  try {
    if (!window.console) window.console = {};
    window.console.log = window.console.info = window.console.dir = window.console.warn = window.console.trace = noop;
    if (clear === 'clear' && window.console.clear) window.console.clear();
  } catch (e) {}
}
/************************************************************************
 *   Private Method
 *************************************************************************/
let _cache = {
  urls: {},
  logs: {}
};

export { log, logs, removeConsole };

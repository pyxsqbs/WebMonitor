let md5 = require('md5');
const pwdKey = 'pyxsqbs';

export function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  let currentTime = d.getTime();
  cvalue = encodeURIComponent(cvalue);
  d.setTime(currentTime + (exdays * 24 * 60 * 60 * 1000));
  let signToken = md5(pwdKey + currentTime + cvalue);
  let cookieValue = `${signToken}&&${encryption(currentTime)}&&${encryption(cvalue)}`;
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cookieValue + "; " + expires + '; path=/';
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      let cookieValue = c.substring(name.length, c.length);
      let cookieStrings = cookieValue.split('&&');
      if (cookieStrings && cookieStrings.length === 3) {
        let signToken = cookieStrings[0];
        let currentTime = decryption(cookieStrings[1]);
        let cvalue = decryption(cookieStrings[2]);
        let sign = md5(pwdKey + currentTime + cvalue);
        if (sign === signToken) {
          cvalue = decodeURIComponent(cvalue);
          return cvalue;
        }
      }
    }
  }
  return "";
}

export function parseCookieToJson(cookie) {
  return '{"' + cookie.split('; ').join('","').split('=').join('":"') + '"}';
}

export function delCookie(cname) {
  if (
    cname !== 'language'
    && cname !== 'remember'
    && cname !== 'currentUser'
  ) {
    let d = new Date();
    d.setTime(d.getTime() + ((-1) * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + "; " + expires + '; path=/';
  }
}

export function delAllCookie() {
  document.cookie.split('; ').map(x => (x.substring(0, x.indexOf('=')))).map(x => delCookie(x));
}

function stringToHex(str) {
  let val = "";
  for (let i = 0; i < str.length; i++) {
    let doubleVal = str.charCodeAt(i).toString(16);
    while (doubleVal.length < 2) {
      doubleVal = '0' + doubleVal;
    }
    val += doubleVal;
  }
  return val;
}


function hexToString(str) {
  let val = "";
  let strLength = str.length;
  for (let i = 0; i < strLength / 2; i++) {
    let doubleVal = parseInt(str.slice(0, 2), 16);
    val += String.fromCharCode(doubleVal);
    str = str.slice(2);
  }
  return val;
}

function encryption(prev) {
  if (!prev) {
    return prev;
  } else {
    if (typeof prev !== 'string') {
      prev = String(prev);
    }
    let next = [];
    prev = stringToHex(prev).split('');
    for (let i = 0; i < prev.length; i++) {
      next.push(prev[i]);
      for (let j = 0; j < (i + 1) % 2; j++) {
        next.push(Math.round(Math.random() * 15).toString(16));
      }
    }
    next = next.join('');
    return next;
  }
}


function decryption(next) {
  if (!next) {
    return next;
  } else {
    if (typeof next !== 'string') {
      next = String(next);
    }
    let prev = [];
    next = next.split('');
    let prevLength = (next.length % 3 === 0) ? next.length * 2 / 3 : (next.length * 2 - 1) / 3;
    for (let i = prevLength; i > 0; i--) {
      for (let j = 0; j < i % 2; j++) {
        next.pop();
      }
      prev.unshift(next.pop());
    }
    prev = hexToString(prev.join(''));
    return prev;
  }
}

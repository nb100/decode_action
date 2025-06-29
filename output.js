//Sun Jun 29 2025 20:30:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import "assets://js/lib/crypto-js.js";
async function init(_0x293f80) {
  _0x293f80.skey = "";
  _0x293f80.stype = "3";
}
let host = "https://nkvod.me";
async function request(_0x105b9d) {
  const _0x25da27 = await req(_0x105b9d, {
    method: "get",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29",
      referer: host
    }
  });
  return _0x25da27.content;
}
async function home(_0x4313aa) {
  let _0x4fa665 = await request(host);
  let _0x11bae7 = [{
    type_id: "1",
    type_name: "电影"
  }, {
    type_id: "2",
    type_name: "电视剧"
  }, {
    type_id: "3",
    type_name: "综艺"
  }, {
    type_id: "4",
    type_name: "动漫"
  }];
  let _0x4153f2 = _0x4fa665.match(/热播[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/);
  let _0x3691a1 = /<img.*?class="lazy.*?data-src="(.*?)".*?<a.*?href="(.*?)" title="(.*?)">.*?<div.*?>(.*?)<\/div>/g;
  let _0x5ae601 = [];
  let _0x4e4ab6;
  while ((_0x4e4ab6 = _0x3691a1.exec(_0x4153f2)) !== null) {
    _0x5ae601.push({
      vod_id: _0x4e4ab6[2],
      vod_name: _0x4e4ab6[3],
      vod_pic: _0x4e4ab6[1],
      vod_remarks: _0x4e4ab6[4]
    });
  }
  return JSON.stringify({
    class: _0x11bae7,
    list: _0x5ae601
  });
}
async function homeVod() {}
async function category(_0x1f0235, _0x41cc5d, _0x6ec8ce, _0x1f6b58) {
  let _0x161477 = await request(host + "/show/" + _0x1f0235 + "--hits------" + _0x41cc5d + "---.html");
  let _0x34bc65 = _0x161477.match(/<div class="box-width wow fadeInUp">.*?<\/div><\/div><\/div><\/div>/);
  let _0x3d5716 = /<a.*?class="public-list-exp".*?href="(.*?)".*?title="(.*?)">[\s\S]*?<img.*?class="lazy.*?data-src="(.*?)".*?>[\s\S]*?<div class="public-list-subtitle.*?>(.*?)<\/div>/g;
  let _0x59f323 = [];
  let _0x1bf399;
  while ((_0x1bf399 = _0x3d5716.exec(_0x34bc65)) !== null) {
    _0x59f323.push({
      vod_id: _0x1bf399[1],
      vod_name: _0x1bf399[2],
      vod_pic: _0x1bf399[3],
      vod_remarks: _0x1bf399[4]
    });
  }
  return JSON.stringify({
    page: _0x41cc5d,
    pagecount: 99999,
    limit: 40,
    total: 99999,
    list: _0x59f323
  });
}
async function detail(_0xcb6904) {
  let _0x31826a = await request("" + host + _0xcb6904);
  let _0x2d547e = _0x31826a.match(/<i class="fa ds-dianying">.*?<li.*?<\/div><\/div><\/div><\/div>/).join("");
  let _0x3bb205 = Array.from(_0x2d547e.matchAll(/<\/i>(.*?)<.*?>/g), _0x30a75a => _0x30a75a[1].replace(/&nbsp;/g, "")).join("$$$");
  let _0x2383c3 = Array.from(_0x2d547e.matchAll(/<ul.*?>([\s\S]*?)<\/ul>/g)).map(_0x28d170 => Array.from(_0x28d170[1].matchAll(/<a.*?href="(.*?)">(.*?)<\/a>/g)).map(_0x4dfa8a => _0x4dfa8a[2] + "$" + _0x4dfa8a[1]).join("#")).join("$$$");
  var _0x92c993 = [{
    vod_play_from: _0x3bb205,
    vod_play_url: _0x2383c3
  }];
  return JSON.stringify({
    list: _0x92c993
  });
}
async function play(_0x17ceb5, _0xad92c8, _0x675410) {
  let _0x5ced51 = await request("" + host + _0xad92c8);
  let _0x23185b = JSON.parse(_0x5ced51.match(/var player_aaaa=(.*?)</)[1]).url;
  if (_0x23185b.indexOf("m3u8") > -1) {
    return JSON.stringify({
      parse: 0,
      url: _0x23185b
    });
  } else {
    let _0x24292a = Date.now().toString();
    let _0x4e1199 = "timestamp=" + _0x24292a + "&url=" + host + _0xad92c8 + "&referrer=" + host + _0xad92c8 + "&clientX=1773&clientY=424&pageX=1773&pageY=424&screenX=1773&screenY=522&siteReferer=" + host + "&buttonText=non-button-element&deviceResolution=1920x1080&loadToClickTime=7393&";
    let _0x766a38 = CryptoJS.enc.Utf8.parse(_0x4e1199).toString(CryptoJS.enc.Hex);
    let _0x59f95e = _0x766a38.slice(2, 8);
    let _0x234a69 = _0x766a38.slice(8, 14);
    let _0x13542 = _0x59f95e + "9" + _0x766a38 + _0x234a69;
    let _0x29a76b = await req(host + "/hm.gif", {
      body: _0x13542,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29",
        "content-type": "application/json"
      },
      method: "POST"
    });
    let _0xb847bb = await request("https://op.yrmq.cn/nkvod2.php?url=" + _0x23185b);
    let _0x455628 = _0xb847bb.match(/getrandom\('(.*?)'/)[1];
    let _0xbfee81 = CryptoJS.enc.Base64.parse(_0x455628.slice(10)).toString(CryptoJS.enc.Utf8);
    let _0x210748 = _0xbfee81.slice(10, -10).split("_")[0];
    let _0x2fa06 = _0x210748.substring(0, 20) + _0x210748.substring(21);
    let _0x52cd3a = CryptoJS.enc.Hex.parse(_0x2fa06).toString(CryptoJS.enc.Utf8);
    return JSON.stringify({
      parse: 0,
      url: _0x52cd3a
    });
  }
}
async function search(_0x21d473, _0x2bded1) {}
export function __jsEvalReturn() {
  return {
    init: init,
    home: home,
    homeVod: homeVod,
    category: category,
    detail: detail,
    play: play,
    search: search
  };
}
//Thu May 08 2025 03:17:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0x5a773c) {
  let _0x1d9676 = _0x5a773c.url;
  const _0x4c3e3e = getQuery.call({
      "url": _0x1d9676,
      "key": "id"
    }) || "jade_twn",
    _0x573b28 = getQuery.call({
      "url": _0x1d9676,
      "key": "ip"
    }) || "50.7.234.10:8278";
  _0x1d9676 = "http://" + _0x573b28 + "/" + _0x4c3e3e + "/playlist.m3u8";
  const _0x5a7221 = {
      "CLIENT-IP": "127.0.0.1",
      "X-FORWARDED-FOR": "127.0.0.1"
    },
    _0x17c298 = "mc42afe745533",
    _0x9b8137 = String(Math.floor(Date.now() / 150)),
    _0x347d0f = md5.call({
      "data": "tvata nginx auth module/" + _0x4c3e3e + "/playlist.m3u8" + _0x17c298 + _0x9b8137
    });
  _0x1d9676 += "?tid=" + _0x17c298 + "&ct=" + _0x9b8137 + "&tsum=" + _0x347d0f;
  return JSON.stringify({
    "url": _0x1d9676,
    "headers": JSON.stringify(_0x5a7221)
  });
}
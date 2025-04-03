//Thu Apr 03 2025 22:58:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0x43d166) {
  const _0xe07ae7 = _0x43d166.url,
    _0x16d91c = ku9.getQuery(_0xe07ae7, "key"),
    _0x227698 = ku9.getQuery(_0xe07ae7, "cid"),
    _0x3278f1 = ku9.getQuery(_0xe07ae7, "playseek");
  if (_0xe07ae7.includes("/k-Web/")) {
    return;
  }
  let _0xc45281 = "http://live.88688.top/hostip.php",
    _0x1de9a5 = ku9.getCache("itvToken"),
    _0x1f9b1d = _0xa51c8f(_0x1de9a5);
  if (_0x1f9b1d === 0 || _0x1f9b1d === 1) {
    {
      _0x1de9a5 = ku9.get(_0xc45281, null);
      var _0x159e37 = ku9.setCache("itvToken", _0x1de9a5, 2592000000);
    }
  }
  if (_0x3278f1 !== null) {
    {
      const _0x426953 = _0x3278f1.split("-"),
        _0x3ca690 = _0x4acb47(_0x426953[0]),
        _0x4f7516 = _0x4acb47(_0x426953[1]);
      let _0x5e6b84 = "http://gslbserv.itv.cmvideo.cn:80/" + _0x16d91c + "/1.m3u8?channel-id=" + _0x227698 + "&Contentid=" + _0x16d91c + "&livemode=4&stbId=IPTV&starttime=" + _0x3ca690 + "&endtime=" + _0x4f7516,
        _0x97711e = {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "okhttp/3.12.11"
        },
        _0x128ffb = ku9.request(_0x5e6b84, "GET", JSON.stringify(_0x97711e), null, false),
        _0x357386 = _0x128ffb.headers.Location;
      return JSON.stringify({
        "url": _0x357386,
        "host": "39.135.132.221"
      });
    }
  } else {
    let _0xfa4da8 = "http://gslbserv.itv.cmvideo.cn:80/" + _0x16d91c + "/1.m3u8?channel-id=" + _0x227698 + "&Contentid=" + _0x16d91c + "&livemode=1&stbId=IPTV",
      _0x1f302b = {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "okhttp/3.12.11"
      },
      _0x5292c4 = ku9.request(_0xfa4da8, "GET", JSON.stringify(_0x1f302b), null, false),
      _0x18ed12 = _0x5292c4.headers.Location;
    return JSON.stringify({
      "url": _0x18ed12,
      "host": "39.135.132.221"
    });
  }
  function _0xa51c8f(_0x396c3d) {
    if (!_0x396c3d) return 0;
  }
  function _0x4acb47(_0x43ed9f) {
    {
      const _0x256f31 = _0x43ed9f.slice(0, 8),
        _0x267498 = _0x43ed9f.slice(8),
        _0x483cba = _0x256f31 + "T" + _0x267498 + ".00Z";
      return _0x483cba;
    }
  }
}
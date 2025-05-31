//Sat May 31 2025 01:37:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function main(_0x1d1ed5) {
  try {
    {
      if (!_0x1d1ed5 || !_0x1d1ed5.url) return {
        "url": "房间号错误或没开播"
      };
      let _0xcafd7d = _0x1d1ed5.url;
      id = ku9.getQuery(_0xcafd7d, "id") || "11342412";
      const _0x187a55 = ["tx", "hw", "hs", "hy"],
        _0xd91358 = _0x187a55[Math.floor(Math.random() * _0x187a55.length)],
        _0x3b2f16 = [0, 1, 2, 3];
      let _0x2c8012 = 0;
      const _0x543d1a = "https://mp.huya.com/cache.php?m=Live&do=profileRoom&roomid=" + id,
        _0xbb3f8 = ku9.request(_0x543d1a, "GET"),
        _0x2bbd5d = JSON.parse(_0xbb3f8.body);
      if (!_0x2bbd5d.data || !_0x2bbd5d.data.stream || !_0x2bbd5d.data.stream.baseSteamInfoList || _0x2bbd5d.data.stream.baseSteamInfoList.length === 0) return {
        "url": "房间号错误或没开播"
      };
      const _0x11af55 = _0x2bbd5d.data,
        _0x1491d4 = _0x11af55.profileInfo.uid,
        _0x46b835 = _0x11af55.stream.baseSteamInfoList[0].sStreamName;
      let _0x3e74b1 = _0x11af55.stream.flv.multiLine[_0x2c8012].url,
        _0x545993 = _0x3e74b1.split("?")[0];
      while (!_0x545993) {
        _0x2c8012 = _0x3b2f16[Math.floor(Math.random() * _0x3b2f16.length)];
        _0x3e74b1 = _0x11af55.stream.flv.multiLine[_0x2c8012].url;
        _0x545993 = _0x3e74b1.split("?")[0];
      }
      const _0x517b22 = "DWq8BcJ3h6DJt6TY_$0_$1_$2_$3",
        _0x58f28f = String(parseInt(_0x1491d4) + parseInt(Date.now())),
        _0x5b6ee7 = "tars_wap",
        _0x5bd36c = "102",
        _0x2637fe = ku9.md5(_0x58f28f + "|" + _0x5b6ee7 + "|" + _0x5bd36c),
        _0x47bb78 = (Math.floor(Date.now() / 1000) + 21600).toString(16),
        _0x1723ac = _0x517b22.replace(/\$[0-3]/g, _0x23afff => {
          {
            if (_0x23afff === "$0") return _0x1491d4;
            if (_0x23afff === "$1") return _0x46b835;
            if (_0x23afff === "$2") return _0x2637fe;
            if (_0x23afff === "$3") return _0x47bb78;
            return _0x23afff;
          }
        }),
        _0x3d4192 = ku9.md5(_0x1723ac);
      let _0xb5b451 = "wsSecret=" + _0x3d4192 + "&wsTime=" + _0x47bb78 + "&ctype=" + _0x5b6ee7 + "&seqid=" + _0x58f28f + "&uid=" + _0x1491d4 + "&fs=bgct&ver=1&t=" + _0x5bd36c;
      const _0x34a008 = _0x545993 + "?" + _0xb5b451;
      return {
        "url": _0x34a008,
        "headers": {
          "User-Agent": "Mozilla/5.0"
        }
      };
    }
  } catch (_0x173db8) {
    typeof console !== "undefined" && console.error("房间号错误或没开播", _0x173db8);
    return {
      "url": "房间号错误或没开播"
    };
  }
}
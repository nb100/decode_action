//Sun Jun 15 2025 10:54:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  var c = $response.body;
  var d = c.match(/<img\s+src="(https?:\/\/[^\/]+\/video\/\d{8}\/[a-zA-Z0-9_]+\/vod\.jpg)"/);
  if (d) {
    {
      var f = d[1].replace(/vod\.jpg$/, "index.m3u8");
      var g = "<span class=\"tx-bg\" style=\"margin-left:10px;cursor:pointer;\" onclick=\"window.open('".concat(f, "', '_blank')\">解锁视频</span>\n  <span class=\"tx-bg\" style=\"margin-left:10px;cursor:pointer;background:#3b82f6;\" onclick=\"window.open('https://t.me/Jsforbaby', '_blank')\">加入作者频道</span>");
      c = c.replace(/(<a[^>]*rel="tag"[^>]*>\s*#\s*<\/a>)/, "$1" + g);
    }
  }
  c = c.replace(/(<p[^>]*class="ta-c mb20 f-18"[^>]*>)[\s\S]*?<\/p>/, "$1请点击下面\"解锁视频\"按钮 观看完整视频</p>");
  $done({
    body: c
  });
})();